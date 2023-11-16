import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'src/entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
  private employeeRepository: Repository<Employee>,)
  {

  }


  async create(createEmployeeDto: CreateEmployeeDto) {
//username: truongvv, password

const user = await this.employeeRepository.findOneBy({username: createEmployeeDto.username})
console.log(user)
//user : truognvv

if(user) throw new HttpException('Da ton tai nhan vien nay r', 400);

    const newUser = this.employeeRepository.create({
      username: createEmployeeDto.username,
      password: createEmployeeDto.password
    })  

     await this.employeeRepository.save(newUser)

    return newUser;
  }

  async findAll() {
      const data = await this.employeeRepository.find()
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
