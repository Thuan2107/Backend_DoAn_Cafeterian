import { Column, Double, Entity, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Food } from "./food.entity";
import { Order } from "./order.entity";
import { BaseModel } from "./base.entity";

@Entity('order_detail')
export class OrderDetail extends BaseModel{
    @PrimaryGeneratedColumn()
    id: string

    @OneToOne(() => Order, (order) => order.id)
    order_id: string

    @OneToOne(() => Food, (food) => food.id)
    food_id: string

    @Column()
    quantity: number;

    @Column({ type: 'float' })
    price: number;

}