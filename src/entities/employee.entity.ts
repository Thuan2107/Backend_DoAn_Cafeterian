import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { BaseModel } from "./base.entity";

@Entity('employee')
export class Employee extends BaseModel{
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
    address: String

    @Column()
    phone: String

    @Column()
    token: String

   
}