import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeName'
})
export class ChangeNamePipe implements PipeTransform {

  transform(value: string, quoteType: string): string {
    //value = Bayan => ayan slice(1)
    //value = Mohammad => ammad slice(3)
    //value = ahmad => A + hmad => Ahmad
    if(!value)
    {
      return value;
    }

    let captalizedValue = value.charAt(0).toUpperCase() + value.slice(1)
    if(quoteType === 'single')
    return `'${captalizedValue}'`;
  else 
  return `"${captalizedValue}"`;

  }

}
