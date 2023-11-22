import { Test, TestingModule } from '@nestjs/testing';
import { ConversationSettingController } from './conversation-setting.controller';
import { ConversationSettingService } from './conversation-setting.service';

describe('ConversationSettingController', () => {
  let controller: ConversationSettingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConversationSettingController],
      providers: [ConversationSettingService],
    }).compile();

    controller = module.get<ConversationSettingController>(ConversationSettingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
