import internal from "stream";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "./_common.entity";

@Entity('message')
export class Message extends CommonEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    user_target: number

    @Column()
    type: number

    @Column()
    message: string

    @Column()
    media: string

    @Column()
    no_of_reaction: number

    @Column()
    status: number

    @Column()
    no_of_like: number

    @Column()
    no_of_love: number

    @Column()
    no_of_wow: number

    @Column()
    no_of_sad: number

    @Column()
    no_of_haha: number

    @Column()
    no_of_angry: number

    @Column()
    conversation_id: number

    @Column()
    user_id: number

    @Column()
    message_reply_id: number




}