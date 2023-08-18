import { EmployeeStatus, EmployeeTier } from '../model/employees.model';
import { IsNotEmpty } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  designation: string;
  nearestCity: string;
  tier: EmployeeTier;
  status: EmployeeStatus;
}
