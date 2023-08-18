import { EmployeeStatus } from '../model/employees.model';
import { IsIn } from 'class-validator';

export class SearchEmployeeDto {
  @IsIn(Object.values(EmployeeStatus))
  status: EmployeeStatus;
  name: string;
}
