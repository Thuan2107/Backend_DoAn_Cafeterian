import { Column, CreateDateColumn, Double, Entity, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Employee } from "./employee.entity";
import { Customer } from "./customer.entity";
import { BaseModel } from "./base.entity";

@Entity('order')
export class Order extends BaseModel{
    @PrimaryGeneratedColumn()
    id: string

    @OneToOne(() => Employee, (employee) => employee.id)
    employee_id: string

    @OneToOne(() => Customer, (customer) => customer.id)
    customer_id: string

    @Column({ type: 'float' })
    total_price: number;

    @Column()
    order_status: number

}