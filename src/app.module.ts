import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Category } from './entities/category.entity';
import { EmployeeModule } from './employee/employee.module';
import { APP_PIPE } from '@nestjs/core';
import { CategoryModule } from './category/category.module';
import { FoodModule } from './food/food.module';
import { Food } from './entities/food.entity';
import { Customer } from './entities/customer.entity';
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './order/order.module';
import { InventoryModule } from './inventory/inventory.module';
import { StockInModule } from './stock_in/stock_in.module';
import { OrderDetailModule } from './order_detail/order_detail.module';
import { PaymentInvoiceModule } from './payment_invoice/payment_invoice.module';
import { Inventory } from './entities/inventory.entity';
import { Order } from './entities/order.entity';
import { OrderDetail } from './entities/order_detail.entity';
import { PaymentInvoice } from './entities/payment_invoice.entity';
import { StockIn } from './entities/stock_in.entity';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3308,
    username: 'root',
    password: '',
    database: 'cafe',
    entities: [Employee, Customer, Category, Food, Customer, Inventory, Order, PaymentInvoice, StockIn],
    synchronize: true,
  }), EmployeeModule, CategoryModule, FoodModule, CustomerModule, OrderModule, InventoryModule, StockInModule, OrderDetailModule, PaymentInvoiceModule,],
  controllers: [AppController],
  providers: [AppService, 
    
  ],
})
export class AppModule {}
