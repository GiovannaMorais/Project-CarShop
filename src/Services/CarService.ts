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

  public async getAllCars() {
    const carODM = new CarODM();
    const cars = await carODM.getAllCars();
    const carsArray = cars.map((car) => this.createCarDomains(car));
    return carsArray;
  }
  public async getCarById(id: string) {
    const carODM = new CarODM();
    const cars = await carODM.getCarById(id);
    console.log('cars', cars);
    return this.createCarDomains(cars);
  }
  public async updateCarById(id: string, car: ICar) {
    const carODM = new CarODM();
    const cars = await carODM.updateCarById(id, { ...car });
    console.log('...car ', { ...car });
    console.log('carsService', cars);
    return this.createCarDomains(cars);
  }
}

export default CarService;