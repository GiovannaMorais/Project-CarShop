import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomains(car: ICar | null): Car | null | undefined {
    if (car) {
      return new Car(car);
    }
    return null;
  }
  public async create(car: ICar) {
    const carODM = new CarODM();
    const cars = await carODM.create(car);
    console.log('cars', cars);
    return this.createCarDomains(cars);
  }
}

export default CarService;