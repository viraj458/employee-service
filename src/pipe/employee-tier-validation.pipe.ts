import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { EmployeeTier } from '../employees/enum/employees.enum';

@Injectable()
export class EmployeeTierValidationPipe implements PipeTransform {
  transform(value: any) {
    if (!(value.tier in EmployeeTier)) {
      throw new BadRequestException();
    }
    return value;
  }
}
