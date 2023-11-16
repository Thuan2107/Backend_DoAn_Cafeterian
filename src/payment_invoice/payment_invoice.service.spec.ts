import { Test, TestingModule } from '@nestjs/testing';
import { PaymentInvoiceService } from './payment_invoice.service';

describe('PaymentInvoiceService', () => {
  let service: PaymentInvoiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentInvoiceService],
    }).compile();

    service = module.get<PaymentInvoiceService>(PaymentInvoiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
