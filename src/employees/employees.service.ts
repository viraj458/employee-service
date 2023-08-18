import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/createEmployee.dto';
import { SearchEmployeeDto } from './dto/searchEmployee.dto';
import { UpdateEmployeeDto } from './dto/updateEmploee.dto';
import { Employee } from './schema/employee.schema';
import { EmployeeRepository } from './repository/employee.repository';

@Injectable()
export class EmployeesService {
  constructor(private employeeRepository: EmployeeRepository) {}

  async getAllEmployees(): Promise<Employee[]> {
    return await this.employeeRepository.findAll();
  }

  async createEmployee(dto: CreateEmployeeDto): Promise<Employee> {
    return await this.employeeRepository.create(dto);
  }

  // searchEmployee(dto: SearchEmployeeDto) {
  //   const { status, name } = dto;
  //   let employees = this.getAllEmployees();

  //   if (status) {
  //     employees = employees.filter((employee) => employee.status === status);
  //   }
  //   if (name) {
  //     employees = employees.filter(
  //       (employee) =>
  //         employee.firstName.includes(name) || employee.lastName.includes(name),
  //     );
  //   }

  //   return employees;
  // }

  // getEmployeeById(id: string) {
  //   const employees = this.getAllEmployees();
  //   const employee = employees.find((employee) => employee.id === id);

  //   if (!employee) {
  //     throw new NotFoundException();
  //   }
  //   return employee;
  // }

  // updateEmployee(dto: UpdateEmployeeDto) {
  //   const { id, city } = dto;

  //   const employee = this.getEmployeeById(id);

  //   employee.nearestCity = city;
  //   return employee;
  // }

  // deteleEmployee(id: string) {
  //   const employees = this.getAllEmployees();
  //   this.employees = employees.filter((employee) => employee.id != id);
  //   return employees.length != this.employees.length;
  // }
}
