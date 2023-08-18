import { EmployeeStatus } from '../enum/employees.enum';
import { IsIn } from 'class-validator';

export class SearchEmployeeDto {
  @IsIn(Object.values(EmployeeStatus))
  status: EmployeeStatus;
  name: string;
}
