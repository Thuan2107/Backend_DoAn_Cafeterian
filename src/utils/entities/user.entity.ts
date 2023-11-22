import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "./_common.entity";

@Entity('user')
export class User extends CommonEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    avatar: string

    @Column()
    full_name: string

    @Column()
    address: string

    @Column()
    phone: string

    @Column()
    gender: number
    
    @Column()
    status: number

    @Column()
    birthday: string

    @Column()
    no_of_friend: string

    @Column()
    email: string

}