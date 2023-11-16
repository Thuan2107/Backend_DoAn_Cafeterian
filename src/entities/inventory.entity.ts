import { Column, Double, Entity, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Employee } from "./employee.entity";
import { Customer } from "./customer.entity";
import { BaseModel } from "./base.entity";

@Entity('inventory')
export class Inventory extends BaseModel{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    item_name: String

    @Column({ type: 'float' })
    remain_quantity: number;
}