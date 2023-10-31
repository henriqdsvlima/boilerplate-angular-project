import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCurrency'
})
export class ToCurrencyPipe implements PipeTransform {
  transform(value: number, currencySign = '$', decimalPlaces = 2): string {
    return currencySign + value.toFixed(decimalPlaces);
  }
}
