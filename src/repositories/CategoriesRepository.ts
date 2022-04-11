import { Repository } from "typeorm";
import { AppDataSource } from "../database/data-source";
import { Category } from "../database/entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {

    private repository: Repository<Category>
    constructor() {
        this.repository = AppDataSource.getRepository(Category);
    }
    
    async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
        const category = this.repository.create({
            name,
            description
        })
        await this.repository.save(category);
        return category;
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }
    
    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOneBy({name})
        return category;
    }

    async delete(id: string): Promise<void>
    {
        await this.repository.delete(id);
    }
    
    async findById(id: string): Promise<Category>
    {
        const category = await this.repository.findOneBy({id});
        return category;
    }

    async update(id: string, name: string, description: string): Promise<Category> {
        const category = await this.repository.findOneBy({id});
        category.name = name ? name : category.name;
        category.description = description ? description : category.description;
        await this.repository.update(id, category);
        return category;
    }

}

export { CategoriesRepository };