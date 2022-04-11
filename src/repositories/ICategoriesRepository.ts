import { Category } from "../database/entities/Category";

interface ICreateCategoryDTO {
    name: string,
    description: string
}

interface ICategoriesRepository{
    findByName(name:string): Promise<Category>;
    list(): Promise<Category[]>,
    create({name, description}: ICreateCategoryDTO):Promise<Category>
    delete(id:string): Promise<void>;
    findById(id:string): Promise<Category>;
    update(id:string, name:string, description:string): Promise<Category>;
}

export { ICategoriesRepository, ICreateCategoryDTO };