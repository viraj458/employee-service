import { EmployeeStatus } from '../model/employees.model';

export class SearchEmployeeDto {
  status: EmployeeStatus;
  name: string;
}
