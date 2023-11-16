import { Test, TestingModule } from '@nestjs/testing';
import { StockInController } from './stock_in.controller';
import { StockInService } from './stock_in.service';

describe('StockInController', () => {
  let controller: StockInController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockInController],
      providers: [StockInService],
    }).compile();

    controller = module.get<StockInController>(StockInController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
