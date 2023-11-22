import { Test, TestingModule } from '@nestjs/testing';
import { ConversationGroupController } from './conversation-group.controller';
import { ConversationGroupService } from './conversation-group.service';

describe('ConversationGroupController', () => {
  let controller: ConversationGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConversationGroupController],
      providers: [ConversationGroupService],
    }).compile();

    controller = module.get<ConversationGroupController>(ConversationGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
