import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

describe('Testing the car registration', function () {
  it('Testing the car registration with SUCCESS', async function () {
    const car: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const outputCar: Car = new Car(car);

    sinon.stub(Model, 'create').resolves(outputCar);

    const service = new CarService();
    const result = await service.create(car);

    expect(result).to.be.deep.equal(outputCar);
  });

  it('Testing Endpoint to list cars', async function () {
    const cars: ICar[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Tempra',
        year: 1995,
        color: 'Black',
        buyValue: 39,
        doorsQty: 2,
        seatsQty: 5,
        status: false,
      },
    ];

    sinon.stub(Model, 'find').resolves(cars);

    const service = new CarService();
    const result = await service.getAllCars();

    expect(result).to.be.deep.equal(cars);
  });

  it('Testing Endpoint to list cars By ID', async function () {
    const cars: ICar = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };

    sinon.stub(Model, 'findOne').resolves(cars);

    const service = new CarService();
    const result = await service.getCarById('634852326b35b59438fbea2f');

    expect(result).to.be.deep.equal(cars);
  });
  
  it('Testing if fails to return a car By Id', async function () {
    const cars: ICar = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };

    sinon.stub(Model, 'findOne').resolves({});
    try {
      const service = new CarService();
      await service.getCarById(cars.id as string);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });

  it('Testing if the update fails when returning an invalid body', async function () {
    const cars : ICar = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    sinon.stub(Model, 'findByIdAndUpdate').resolves({});
    
    try {
      const service = new CarService();
      await service.updateCarById('634852326b35b59438fbea2f', cars);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });

  afterEach(function () {
    sinon.restore();
  });
});