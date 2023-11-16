import { Test, TestingModule } from '@nestjs/testing';
import { PaymentInvoiceController } from './payment_invoice.controller';
import { PaymentInvoiceService } from './payment_invoice.service';

describe('PaymentInvoiceController', () => {
  let controller: PaymentInvoiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentInvoiceController],
      providers: [PaymentInvoiceService],
    }).compile();

    controller = module.get<PaymentInvoiceController>(PaymentInvoiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
