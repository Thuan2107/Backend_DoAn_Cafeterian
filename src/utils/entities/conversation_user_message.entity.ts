import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "./_common.entity";

@Entity('conversation_user_message')
export class ConversationUserMessage extends CommonEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    message_pre_id: number

    @Column()
    message_last_id: number

    @Column()
    conversation_id: number

    @Column()
    user_id: number

}