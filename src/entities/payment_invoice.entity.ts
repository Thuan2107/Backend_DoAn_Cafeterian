import { Column, CreateDateColumn, Double, Entity, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Employee } from "./employee.entity";
import { Inventory } from "./inventory.entity";
import { Order } from "./order.entity";
import { BaseModel } from "./base.entity";

@Entity('payment_invoice')
export class PaymentInvoice extends BaseModel{
    @PrimaryGeneratedColumn()
    id: string

    @OneToOne(() => Order, (order) => order.id)
    order_id: string

    @Column({ type: 'float' })
    total_mount: number;

}