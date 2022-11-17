import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotorcyclesODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycle');
  }

  public async getAllmotorcycles(): Promise<IMotorcycle[]> {
    return this.model.find();
  }

  public async getMotorcycleById(_id: string): Promise<IMotorcycle | null> {
    return this.model.findOne({ _id });
  }

  public async updateMotorcycleById(_id: string, car: IMotorcycle): Promise<IMotorcycle | null > {
    return this.model.findByIdAndUpdate({ _id }, car, { new: true });
  }
}

export default MotorcyclesODM;