import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylingService {

  bgColors: string[] = ['bg-yellow-400', 'bg-sky-400', 'bg-red-400','bg-green-400','bg-cyan-400','bg-blue-400','bg-purple-400','bg-fuchsia-400','bg-orange-400'];
  borderColors: string[] = ['border-yellow-400', 'border-sky-400', 'border-red-400', 'border-green-400', 
    'border-cyan-400', 'border-blue-400', 'border-purple-400', 'border-fuchsia-400', 
    'border-orange-400'
  ];
  

  getRandomBgColor(): string {
    const i = Math.floor(Math.random() * this.bgColors.length);
    return this.bgColors[i];
  }

  getRandomBorderColor(): string {
    const i = Math.floor(Math.random() * this.borderColors.length);
    return this.borderColors[i];
  }
}
