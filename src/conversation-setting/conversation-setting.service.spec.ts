import { Test, TestingModule } from '@nestjs/testing';
import { ConversationSettingService } from './conversation-setting.service';

describe('ConversationSettingService', () => {
  let service: ConversationSettingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConversationSettingService],
    }).compile();

    service = module.get<ConversationSettingService>(ConversationSettingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
