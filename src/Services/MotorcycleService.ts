import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';

class MotorcycleService {
  private createMotorcycleDomains(motorcycle: IMotorcycle | null): Motorcycle | null | undefined {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }
  public async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcyclesODM();
    const motorcycles = await motorcycleODM.create(motorcycle);
    console.log('motorcycles', motorcycles);
    return this.createMotorcycleDomains(motorcycles);
  }
}

export default MotorcycleService;