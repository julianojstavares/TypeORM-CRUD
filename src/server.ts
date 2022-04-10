import 'dotenv/config'
import express from "express";
import { routes } from './routes';

const server = express();

server.use(express.json());

server.use(routes);

server.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.URL}:${process.env.PORT}`));