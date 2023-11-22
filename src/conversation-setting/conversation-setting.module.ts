import { Module } from '@nestjs/common';
import { ConversationSettingService } from './conversation-setting.service';
import { ConversationSettingController } from './conversation-setting.controller';

@Module({
  controllers: [ConversationSettingController],
  providers: [ConversationSettingService]
})
export class ConversationSettingModule {}
