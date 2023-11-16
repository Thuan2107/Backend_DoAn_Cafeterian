import { Injectable } from '@nestjs/common';
import { CreatePaymentInvoiceDto } from './dto/create-payment_invoice.dto';
import { UpdatePaymentInvoiceDto } from './dto/update-payment_invoice.dto';

@Injectable()
export class PaymentInvoiceService {
  create(createPaymentInvoiceDto: CreatePaymentInvoiceDto) {
    return 'This action adds a new paymentInvoice';
  }

  findAll() {
    return `This action returns all paymentInvoice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentInvoice`;
  }

  update(id: number, updatePaymentInvoiceDto: UpdatePaymentInvoiceDto) {
    return `This action updates a #${id} paymentInvoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentInvoice`;
  }
}
