import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "./_common.entity";

@Entity('conversation_user_pinned')
export class ConversationUserPinned extends CommonEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: number

    @Column()
    user_id: number

    @Column()
    user_friend_id: number

}