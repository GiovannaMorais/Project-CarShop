import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.create(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }
  public async getAllMotorcycles() {
    const motorcycles = await this.service.getAllMotorcycles();
    return this.res.status(200).json(motorcycles);
  }

  public async getMotorcycleById() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });
    const motorcycle = await this.service.getMotorcycleById(id as string);
    if (!motorcycle) return this.res.status(404).json({ message: 'Motorcycle not found' });
    return this.res.status(200).json(motorcycle);
  }
  public async updateMotorcycleById() {
    const { id } = this.req.params;
    const motorcycleUpdated = this.req.body;    
    if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });
    const motorcycle = await this.service.updateMotorcycleById(id, motorcycleUpdated);
    if (!motorcycle) return this.res.status(404).json({ message: 'Motorcycle not found' });
    return this.res.status(200).json(motorcycle);
  }
}
  
export default MotorcycleController;