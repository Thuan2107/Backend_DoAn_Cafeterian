import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Food } from "./food.entity";
import { BaseModel } from "./base.entity";

@Entity('category')
export class Category extends BaseModel{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Food, (food) => food.category_id)
    // @Column()
    category_id: number

}