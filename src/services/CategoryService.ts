import { Category } from "../database/entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../repositories/ICategoriesRepository";

export class CategoryService {
    constructor(private categoriesRepository: ICategoriesRepository){}
    
    async createCategory({name, description}:ICreateCategoryDTO):Promise<Category>{
        const existCategory = await this.categoriesRepository.findByName(name);
        if (existCategory) {
            throw new Error("Category already exist.")
        }
        await this.categoriesRepository.create({ name, description });
        return this.categoriesRepository.findByName(name);
    }

    async listCategories(): Promise<Category[]>{
        return this.categoriesRepository.list();
    }

}