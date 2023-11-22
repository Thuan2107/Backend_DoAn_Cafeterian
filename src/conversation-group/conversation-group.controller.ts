import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConversationGroupService } from './conversation-group.service';
import { CreateConversationGroupDto } from './dto/create-conversation-group.dto';
import { UpdateConversationGroupDto } from './dto/update-conversation-group.dto';

@Controller('conversation-group')
export class ConversationGroupController {
  constructor(private readonly conversationGroupService: ConversationGroupService) {}

  @Post()
  create(@Body() createConversationGroupDto: CreateConversationGroupDto) {
    return this.conversationGroupService.create(createConversationGroupDto);
  }

  @Get()
  findAll() {
    return this.conversationGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conversationGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConversationGroupDto: UpdateConversationGroupDto) {
    return this.conversationGroupService.update(+id, updateConversationGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conversationGroupService.remove(+id);
  }
}
