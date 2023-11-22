import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "./_common.entity";

@Entity('conversation')
export class Conversation extends CommonEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    avatar: string

    @Column()
    last_activity: Date

    @Column()
    type: number

    @Column({
        type: 'int',
        array: true
    })
    members: number[]

    @Column()
    no_of_member: number

    @Column()
    no_of_image: number

    @Column()
    no_of_video: number

    @Column()
    is_user_remove: number

    @Column()
    is_update_profile: number

    @Column()
    is_confirm_new_member: number

    @Column()
    is_view_old_message_with_new_member: number

    @Column()
    status: number

    @Column()
    last_message_id: number


}