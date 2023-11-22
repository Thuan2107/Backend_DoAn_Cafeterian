import { Column } from "typeorm";

export class CreateConversationDto {
    @Column()
    name: string

    @Column()
    avatar: string

    @Column()
    members: number[]

}
