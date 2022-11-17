import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import carRoutes from './routes/CarRoutes';

const app = express();
app.use(express.json());
app.use(carRoutes);
app.use(ErrorHandler.handle);

export default app;
