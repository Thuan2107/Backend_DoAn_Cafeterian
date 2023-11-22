import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';

@Controller('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Post()
  async create(@Body() conversation: CreateConversationDto) {
    return this.conversationService.create(conversation);
  }

  @Get()
  async findAll(){
    return this.conversationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conversationService.findOne(+id);
  }

  @Post('/update')
  async update (@Body() updateConversationDto: UpdateConversationDto){
    return this.conversationService.update(updateConversationDto);
  }

  @Post('/delete/:id')
  
  async delete(@Param('id') id: string) {
    await this.conversationService.remove(+id)
    return {
      message: "Delete success",
      status: 200
    }
  }
}
