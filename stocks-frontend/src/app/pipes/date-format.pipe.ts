import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = new Date(value);
    let day = date.getDate().toString();
    day = +day < 10 ? '0' + day : day;
    let month = (date.getMonth() + 1).toString();
    month = +month < 10 ? '0' + month : month;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

}
