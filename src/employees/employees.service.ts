import { Injectable } from '@nestjs/common';
import { Employee } from './model/employees.model';
import { v4 as uuid } from 'uuid';
import { CreateEmployeeDto } from './dto/createEmployee.dto';
import { SearchEmployeeDto } from './dto/searchEmployee.dto';

@Injectable()
export class EmployeesService {
  private employees: Employee[] = [];

  getAllEmployees() {
    return this.employees;
  }

  createEmployee(dto: CreateEmployeeDto) {
    const employee = {
      id: uuid(),
      firstName: dto.firstName,
      lastName: dto.lastName,
      designation: dto.designation,
      nearestCity: dto.nearestCity,
      tier: dto.tier,
      status: dto.status,
    };

    this.employees.push(employee);
    return employee;
  }

  searchEmployee(dto: SearchEmployeeDto) {
    const { status, name } = dto;
    let employees = this.getAllEmployees();

    if (status) {
      employees = employees.filter((employee) => employee.status === status);
    }
    if (name) {
      employees = employees.filter(
        (employee) =>
          employee.firstName.includes(name) || employee.lastName.includes(name),
      );
    }

    return employees;
  }

  getEmployeeById(id: string) {
    const employees = this.getAllEmployees();
    const employee = employees.filter((employee) => employee.id === id);

    return employee;
  }
}
