import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }
  public async getAllCars() {
    const cars = await this.service.getAllCars();
    return this.res.status(200).json(cars);
  }

  public async getCarById() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });
    const car = await this.service.getCarById(id as string);
    if (!car) return this.res.status(404).json({ message: 'Car not found' });
    return this.res.status(200).json(car);
  }
  public async updateCarById() {
    const { id } = this.req.params;
    const carUpdated = this.req.body;
   
    if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });
    const car = await this.service.updateCarById(id, carUpdated);
    
    if (!car) return this.res.status(404).json({ message: 'Car not found' });
    return this.res.status(200).json(car);
  }
}
  
export default CarController;