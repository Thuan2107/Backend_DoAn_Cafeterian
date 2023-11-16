import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentInvoiceDto } from './create-payment_invoice.dto';

export class UpdatePaymentInvoiceDto extends PartialType(CreatePaymentInvoiceDto) {}
