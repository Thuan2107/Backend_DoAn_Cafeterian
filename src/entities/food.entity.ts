import { Column, CreateDateColumn, Double, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { BaseModel } from "./base.entity";
import { Category } from "./category.entity";

@Entity('food')
export class Food extends BaseModel{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    category_id: number

    @Column()
    name: string

    @Column({ type: 'float' })
    price_in: number;

    @Column({ type: 'float' })
    price_out: number;

    @Column()
    type: number

}