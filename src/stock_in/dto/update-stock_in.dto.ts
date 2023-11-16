import { PartialType } from '@nestjs/mapped-types';
import { CreateStockInDto } from './create-stock_in.dto';

export class UpdateStockInDto extends PartialType(CreateStockInDto) {}
