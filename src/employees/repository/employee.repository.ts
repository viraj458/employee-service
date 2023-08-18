import { Injectable } from '@nestjs/common';
import { Employee, EmployeeDocument } from '../schema/employee.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from '../dto/createEmployee.dto';

@Injectable()
export class EmployeeRepository {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  async create(dto: CreateEmployeeDto): Promise<Employee> {
    const newEmployee = new this.employeeModel(dto);
    return await newEmployee.save();
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeeModel.find();
  }
}
