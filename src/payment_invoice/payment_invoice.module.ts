import { Module } from '@nestjs/common';
import { PaymentInvoiceService } from './payment_invoice.service';
import { PaymentInvoiceController } from './payment_invoice.controller';

@Module({
  controllers: [PaymentInvoiceController],
  providers: [PaymentInvoiceService]
})
export class PaymentInvoiceModule {}
