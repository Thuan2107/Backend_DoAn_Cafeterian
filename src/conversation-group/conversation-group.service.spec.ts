import { Test, TestingModule } from '@nestjs/testing';
import { ConversationGroupService } from './conversation-group.service';

describe('ConversationGroupService', () => {
  let service: ConversationGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConversationGroupService],
    }).compile();

    service = module.get<ConversationGroupService>(ConversationGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
