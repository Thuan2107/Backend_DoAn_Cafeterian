import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RelationshipModule } from './relationship/relationship.module';
import { ConversationModule } from './conversation/conversation.module';
import { ConversationGroupModule } from './conversation-group/conversation-group.module';
import { ConversationSettingModule } from './conversation-setting/conversation-setting.module';
import { GatewayModule } from './gateway/gateway.module';
import { MessageModule } from './message/message.module';
import { MessageReactionModule } from './message-reaction/message-reaction.module';
import { User } from './utils/entities/user.entity';
import { Message } from './utils/entities/message.entity';
import Relationship from './utils/entities/relationship.entity';
import { MessageReaction } from './utils/entities/message_reaction.entity';
import { Conversation } from './utils/entities/conversation.entity';
import { ConversationUserPinned } from './utils/entities/conversation_user_pinned.entity';
import { ConversationUserMessage } from './utils/entities/conversation_user_message.entity';
import { ConversationMember } from './utils/entities/conversation_member.entity';
import { ConversationMemberWaitingConfirm } from './utils/entities/conversation_member_waiting_confirm.entity';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'postgres',
    entities:[User, Relationship, Message, MessageReaction, Conversation, ConversationUserPinned, ConversationUserMessage, ConversationMember, ConversationMemberWaitingConfirm], 
    autoLoadEntities: true,
    synchronize: true,
  }), UserModule, AuthModule, RelationshipModule, ConversationModule, ConversationGroupModule, ConversationSettingModule, GatewayModule, MessageModule, MessageReactionModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
