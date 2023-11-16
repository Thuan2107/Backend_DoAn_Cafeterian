import { Column, CreateDateColumn, Double, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { BaseModel } from "./base.entity";

@Entity('customer')
export class Customer extends BaseModel{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    gender: number

    @Column()
    phone: String

    @Column()
    token: String

    @Column({ type: 'float' })
    account_balance: number;

    

}