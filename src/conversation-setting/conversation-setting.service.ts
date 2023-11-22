import { Injectable } from '@nestjs/common';
import { CreateConversationSettingDto } from './dto/create-conversation-setting.dto';
import { UpdateConversationSettingDto } from './dto/update-conversation-setting.dto';

@Injectable()
export class ConversationSettingService {
  create(createConversationSettingDto: CreateConversationSettingDto) {
    return 'This action adds a new conversationSetting';
  }

  findAll() {
    return `This action returns all conversationSetting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conversationSetting`;
  }

  update(id: number, updateConversationSettingDto: UpdateConversationSettingDto) {
    return `This action updates a #${id} conversationSetting`;
  }

  remove(id: number) {
    return `This action removes a #${id} conversationSetting`;
  }
}
