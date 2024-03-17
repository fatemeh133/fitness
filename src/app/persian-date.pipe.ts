import { Pipe, PipeTransform } from '@angular/core';
import moment from 'jalali-moment';

@Pipe({
  name: 'persianDate',
})
export class PersianDatePipe implements PipeTransform {
  transform(value: Date): string {
    const PersianDate = moment(value).locale('fa').format('YYYY/MM/DD');
    return PersianDate;
  }
}
