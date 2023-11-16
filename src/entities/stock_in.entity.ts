import { Column, CreateDateColumn, Double, Entity, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Employee } from "./employee.entity";
import { Inventory } from "./inventory.entity";
import { BaseModel } from "./base.entity";

@Entity('stock_in')
export class StockIn extends BaseModel{
    @PrimaryGeneratedColumn()
    receipt_id: string

    @Column()
    receipt_name: String

    @OneToOne(() => Employee, (employee) => employee.id)
    employee_id: Double

    @OneToOne(() => Inventory, (inventory) => inventory.id)
    item_id: String

    @Column({ type: 'float' })
    quantity: number;

    @Column({ type: 'float' })
    price_in: number;

}