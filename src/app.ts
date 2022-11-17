import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import carRoutes from './routes/CarRoutes';
import motorcyclesRoutes from './routes/MotorcycleRoutes';

const app = express();
app.use(express.json());
app.use(carRoutes);
app.use(motorcyclesRoutes);
app.use(ErrorHandler.handle);

export default app;
