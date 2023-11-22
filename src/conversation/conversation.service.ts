import { Injectable } from '@nestjs/common';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { Conversation } from 'src/utils/entities/conversation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ConversationService {
  constructor(
    @InjectRepository(Conversation)
    private conversationRepository: Repository<Conversation>,
  ) {}
  async create(createConversationDto: CreateConversationDto) {

    const newuser = this.conversationRepository.create({name:createConversationDto.name, avatar:createConversationDto.avatar,members:createConversationDto.members});
    return this.conversationRepository.save(newuser);
  }

  findAll() {
    return this.conversationRepository.find({where: {status: 1}});
  }

  findOne(id: number) {
    return `This action returns a #${id} conversation`;
  }

  async update(updateConversationDto: UpdateConversationDto) {
    await this.conversationRepository.update({id: updateConversationDto.id}, {name: updateConversationDto.name, avatar: updateConversationDto.avatar});
    return this.conversationRepository.findOne({ where: { id: updateConversationDto.id } });
  }

  async remove(id: number) {
    await this.conversationRepository.update({id: id}, {status: 0});
  }
}
