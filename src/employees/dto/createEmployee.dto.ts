import { EmployeeStatus, EmployeeTier } from '../model/employees.model';

export interface CreateEmployeeDto {
  firstName: string;
  lastName: string;
  designation: string;
  nearestCity: string;
  tier: EmployeeTier;
  status: EmployeeStatus;
}
