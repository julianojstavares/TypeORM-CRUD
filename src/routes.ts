import { Router } from "express";
import { CategoryController } from "./controllers/CategoryController";

const routes = Router();

const categoryController = new CategoryController();
routes.get("/categories", categoryController.listCategories);
routes.post("/categories", categoryController.createCategory);
routes.delete("/categories/:id", categoryController.deleteCategory);
routes.put("/categories/:id", categoryController.updateCategory);

export { routes };