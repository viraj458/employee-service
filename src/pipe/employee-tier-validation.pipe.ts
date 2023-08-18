import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { EmployeeTier } from '../employees/model/employees.model';

@Injectable()
export class EmployeeTierValidationPipe implements PipeTransform {
  transform(value: any) {
    if (!(value.tier in EmployeeTier)) {
      throw new BadRequestException();
    }
    return value;
  }
}
