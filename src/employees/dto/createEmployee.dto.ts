import { EmployeeStatus, EmployeeTier } from '../enum/employees.enum';
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
