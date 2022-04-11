import { Request, Response } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CategoryService } from "../services/CategoryService";

const categoriesRepository = new CategoriesRepository();

const categoryService = new CategoryService(categoriesRepository);

class CategoryController {

    async createCategory(request:Request, response: Response) : Promise<Response> {

        const { name, description } = request.body;

        try{

            const category = await categoryService.createCategory({name, description});

            return response.status(201).send(category);

        }catch(err){

            return response.status(400).json(err.message)
        }

    }

    async listCategories(request:Request, response: Response) : Promise<Response> {

        try{

            const categories = await categoryService.listCategories();

            return response.status(200).send(categories);

        }catch(err){

            return response.status(500).json(err.message)

        }
        
    }

    async deleteCategory(request:Request, response: Response) : Promise<Response> {
            
        const { id } = request.params;

        try {

            await categoryService.deleteCategory(id);

            return response.status(200).send();

        } catch(err) {

            return response.status(500).json(err.message)

        }
    
    }

    async updateCategory(request:Request, response: Response) : Promise<Response> {
            
        const { id } = request.params;
        const { name, description } = request.body;

        try {

            const category = await categoryService.updateCategory(id, name, description);

            return response.status(200).send(category);

        } catch(err) {

            return response.status(500).json(err.message)

        }
    
    }
    
}

export { CategoryController };