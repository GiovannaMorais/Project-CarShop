import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }

  public async getAllCars(): Promise<ICar[]> {
    return this.model.find();
  }

  public async getCarById(_id: string): Promise<ICar | null> {
    return this.model.findOne({ _id });
  }

  public async updateCarById(_id: string, car: ICar): Promise<ICar | null > {
    return this.model.findByIdAndUpdate({ _id }, car, { new: true });
  }
}

export default CarODM;