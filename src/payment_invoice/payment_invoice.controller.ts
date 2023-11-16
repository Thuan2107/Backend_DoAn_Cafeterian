import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentInvoiceService } from './payment_invoice.service';
import { CreatePaymentInvoiceDto } from './dto/create-payment_invoice.dto';
import { UpdatePaymentInvoiceDto } from './dto/update-payment_invoice.dto';

@Controller('payment-invoice')
export class PaymentInvoiceController {
  constructor(private readonly paymentInvoiceService: PaymentInvoiceService) {}

  @Post()
  create(@Body() createPaymentInvoiceDto: CreatePaymentInvoiceDto) {
    return this.paymentInvoiceService.create(createPaymentInvoiceDto);
  }

  @Get()
  findAll() {
    return this.paymentInvoiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentInvoiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentInvoiceDto: UpdatePaymentInvoiceDto) {
    return this.paymentInvoiceService.update(+id, updatePaymentInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentInvoiceService.remove(+id);
  }
}
