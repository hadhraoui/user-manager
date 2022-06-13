import { Pipe, PipeTransform } from '@angular/core';
import { Moment } from 'moment';

@Pipe({
  name: 'dateCh'
})
export class DateChPipe implements PipeTransform {

  transform(moment: Moment): string {
    return moment.format("DD.MM.yyyy"); 
  }

}
