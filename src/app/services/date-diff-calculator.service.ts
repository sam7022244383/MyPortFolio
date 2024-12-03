import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateDiffCalculatorService {

  formatYearsAndMonths(startDate: Date): string {
    const currentDate = new Date();
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    let result = '';
    if (years > 0) {
        result += `${years} year${years > 1 ? 's' : ''}`;
    }
    if (months > 0) {
        if (result.length > 0) {
            result += " ";
        }
        result += `${months} month${months > 1 ? 's' : ''}`;
    }

    return result || "1 month";
  }
}
