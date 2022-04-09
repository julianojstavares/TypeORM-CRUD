import 'dotenv/config'
import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [],
    migrations: ["src/database/migrations/*.ts"],
    subscribers: []
});

AppDataSource.initialize().then(async () => {
    console.log("Initializing the database...");
}).catch((err) => console.log(err));
