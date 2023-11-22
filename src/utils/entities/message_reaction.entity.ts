import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "./_common.entity";

@Entity('message_reaction')
export class MessageReaction extends CommonEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: number

    @Column()
    user_id: number

    @Column()
    message_id: number
}