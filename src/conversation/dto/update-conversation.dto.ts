import { PartialType } from '@nestjs/mapped-types';
import { CreateConversationDto } from './create-conversation.dto';
import { Column } from 'typeorm';

export class UpdateConversationDto {
    @Column()
    name: string

    @Column()
    avatar: string

    @Column()
    id: number
}
