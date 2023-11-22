import { Module } from '@nestjs/common';
import { ConversationGroupService } from './conversation-group.service';
import { ConversationGroupController } from './conversation-group.controller';

@Module({
  controllers: [ConversationGroupController],
  providers: [ConversationGroupService]
})
export class ConversationGroupModule {}
