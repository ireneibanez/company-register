import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatPhone'})
export class PhonePipe implements PipeTransform {
  transform(value: number): string {

    let phoneSplices = value.toString().match(/.{1,3}/g);

    return phoneSplices.join('-');  
  }
}