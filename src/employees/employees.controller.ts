import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/createEmployee.dto';
import { SearchEmployeeDto } from './dto/searchEmployee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeeService: EmployeesService) {}

  @Get()
  searchEmployee(@Query() dto: SearchEmployeeDto) {
    return this.employeeService.searchEmployee(dto);
  }
  @Get()
  getAllEmployees() {
    return this.employeeService.getAllEmployees();
  }

  @Post()
  createEmployee(@Body() dto: CreateEmployeeDto) {
    return this.employeeService.createEmployee(dto);
  }

  @Get(':id')
  getEmployeeById(@Param('id') id: string) {
    return this.employeeService.getEmployeeById(id);
  }
}
