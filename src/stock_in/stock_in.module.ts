import { Module } from '@nestjs/common';
import { StockInService } from './stock_in.service';
import { StockInController } from './stock_in.controller';

@Module({
  controllers: [StockInController],
  providers: [StockInService]
})
export class StockInModule {}
