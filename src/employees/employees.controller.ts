import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/createEmployee.dto';
import { SearchEmployeeDto } from './dto/searchEmployee.dto';
import { Employee } from './model/employees.model';
import { UpdateEmployeeDto } from './dto/updateEmploee.dto';
import { EmployeeTierValidationPipe } from '../pipe/employee-tier-validation.pipe';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeeService: EmployeesService) {}

  @Get()
  @UsePipes(ValidationPipe)
  searchEmployee(@Query() dto: SearchEmployeeDto): Employee[] {
    return this.employeeService.searchEmployee(dto);
  }
  @Get()
  getAllEmployees(): Employee[] {
    return this.employeeService.getAllEmployees();
  }

  @Post()
  @UsePipes(ValidationPipe)
  @UsePipes(new EmployeeTierValidationPipe())
  createEmployee(@Body() dto: CreateEmployeeDto): Employee {
    return this.employeeService.createEmployee(dto);
  }

  @Get(':id')
  getEmployeeById(@Param('id') id: string): Employee {
    return this.employeeService.getEmployeeById(id);
  }

  @Put(':id/city')
  updateEmployee(@Body() dto: UpdateEmployeeDto, @Param('id') id: string) {
    console.log(dto);

    dto.id = id;
    return this.employeeService.updateEmployee(dto);
  }

  @Delete(':id')
  deteleEmployee(@Param('id') id: string) {
    if (!this.employeeService.deteleEmployee(id)) {
      throw new NotFoundException();
    }
  }
}
