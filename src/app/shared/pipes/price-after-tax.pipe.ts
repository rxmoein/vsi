import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'priceAfterTax'
})
export class PriceAfterTaxPipe implements PipeTransform {

  transform(value: number | null, arg: Observable<number>): number {
    if (!value) {
      return 0;
    }

    let p = 0;
    arg.subscribe(v => p = v).unsubscribe();
    const tax = (p / 100) * value;
    return tax + value;
  }
}
