import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('Testing the motorcycle registration', function () {
  it('Testing the motorcycle registration with SUCCESS', async function () {
    const motorcycle: IMotorcycle = {
      model: 'Honda Cb 400f Hornet',
      year: 2005,
      color: 'Black',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const outputMotorcycle = new Motorcycle(motorcycle);

    sinon.stub(Model, 'create').resolves(outputMotorcycle);

    const service = new MotorcycleService();
    const result = await service.create(motorcycle);

    expect(result).to.be.deep.equal(outputMotorcycle);
  });

  it('Testing Endpoint to list motorcycles', async function () {
    const motorcycles: IMotorcycle[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Black',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Honda Cbr 1000rr',
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
    ];

    sinon.stub(Model, 'find').resolves(motorcycles);

    const service = new MotorcycleService();
    const result = await service.getAllMotorcycles();

    expect(result).to.be.deep.equal(motorcycles);
  });

  it('Testing Endpoint to list motorcycles By ID', async function () {
    const motorcycles: IMotorcycle = {
      id: '634852326b35b59438fbea31',
      model: 'Honda Cb 600f Hornet',
      year: 2011,
      color: 'Orange',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'findOne').resolves(motorcycles);

    const service = new MotorcycleService();
    const result = await service.getMotorcycleById('634852326b35b59438fbea2f');

    expect(result).to.be.deep.equal(motorcycles);
  });
  
  it('Testing if fails to return a motorcycle By Id', async function () {
    const motorcycles: IMotorcycle = {
      id: '634852326b35b59438fbea31',
      model: 'Honda Cbr 1000rr',
      year: 2013,
      color: 'Orange',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'findOne').resolves({});
    try {
      const service = new MotorcycleService();
      await service.getMotorcycleById(motorcycles.id as string);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });

  it('Testing if the update fails when returning an invalid body', async function () {
    const motorcycles: IMotorcycle = {
      id: '634852326b35b59438fbea31',
      model: 'Honda Cbr',
      year: 2012,
      color: 'Yellow',
      status: true,
      buyValue: 32.000,
      category: 'Street',
      engineCapacity: 600,
    };
    sinon.stub(Model, 'findByIdAndUpdate').resolves({});
    
    try {
      const service = new MotorcycleService();
      await service.updateMotorcycleById('634852326b35b59438fbea2f', motorcycles);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
  });

  afterEach(function () {
    sinon.restore();
  });
});