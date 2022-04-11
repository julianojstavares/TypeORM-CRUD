import { Category } from "../database/entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../repositories/ICategoriesRepository";

export class CategoryService {
    constructor(private categoriesRepository : ICategoriesRepository) {}
    
    async createCategory({name, description} : ICreateCategoryDTO) :Promise<Category> {
        const existCategory = await this.categoriesRepository.findByName(name);
        if (existCategory) {
            throw new Error("Category already exist.")
        }
        return this.categoriesRepository.create({ name, description });
    }

    async listCategories() : Promise<Category[]> {
        return this.categoriesRepository.list();
    }

    async deleteCategory(id: string) : Promise<void> {
        const category = await this.categoriesRepository.findById(id);
        if (!category) {
            throw new Error("Category not found.")
        }
        await this.categoriesRepository.delete(id);
    }

    async updateCategory(id: string, name: string, description: string) : Promise<Category> {
        const category = await this.categoriesRepository.findById(id);
        if (!category) {
            throw new Error("Category not found.")
        }
        const existCategory = await this.categoriesRepository.findByName(name);
        if (existCategory) {
            throw new Error("Category already exist.")
        }
        return this.categoriesRepository.update(id, name, description);
    }

}