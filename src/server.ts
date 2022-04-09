import 'dotenv/config'
import express from "express";

const server = express();

server.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.URL}:${process.env.PORT}`));