import { PartialType } from '@nestjs/mapped-types';
import { CreateConversationSettingDto } from './create-conversation-setting.dto';

export class UpdateConversationSettingDto extends PartialType(CreateConversationSettingDto) {}
