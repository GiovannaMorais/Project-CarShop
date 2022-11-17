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

  public async getAllMotorcycles() {
    const motorcycleODM = new MotorcyclesODM();
    const motorcycles = await motorcycleODM.getAllmotorcycles();
    const motorcyclesArray = motorcycles.map((mot) => this.createMotorcycleDomains(mot));
    return motorcyclesArray;
  }
  public async getMotorcycleById(id: string) {
    const motorcycleODM = new MotorcyclesODM();
    const motorcycles = await motorcycleODM.getMotorcycleById(id);
    console.log('motorcycles', motorcycles);
    return this.createMotorcycleDomains(motorcycles);
  }
  public async updateMotorcycleById(id: string, motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcyclesODM();
    const motorcycles = await motorcycleODM.updateMotorcycleById(id, { ...motorcycle });
    console.log('...car ', { ...motorcycle });
    console.log('motorcyclesService', motorcycles);
    return this.createMotorcycleDomains(motorcycles);
  }
}

export default MotorcycleService;