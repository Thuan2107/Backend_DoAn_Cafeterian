import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConversationSettingService } from './conversation-setting.service';
import { CreateConversationSettingDto } from './dto/create-conversation-setting.dto';
import { UpdateConversationSettingDto } from './dto/update-conversation-setting.dto';

@Controller('conversation-setting')
export class ConversationSettingController {
  constructor(private readonly conversationSettingService: ConversationSettingService) {}

  @Post()
  create(@Body() createConversationSettingDto: CreateConversationSettingDto) {
    return this.conversationSettingService.create(createConversationSettingDto);
  }

  @Get()
  findAll() {
    return this.conversationSettingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conversationSettingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConversationSettingDto: UpdateConversationSettingDto) {
    return this.conversationSettingService.update(+id, updateConversationSettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conversationSettingService.remove(+id);
  }
}
