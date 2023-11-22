
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "./_common.entity";

@Entity('conversation_member_waiting_confirm')
export class ConversationMemberWaitingConfirm extends CommonEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    permission: number

    @Column()
    conversation_id: number

    @Column()
    user_id: number

}