import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMotorcycle, faTableTennisPaddleBall, faGamepad, faDumbbell, faRunning, faBicycle, faVolleyball, faMusic,faHeadphones, faEarthAsia, faMicrochip, faBaseballBall  } from '@fortawesome/free-solid-svg-icons';
import { StylingService } from '../../../services/styling.service';


@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {
  stylingService = inject(StylingService);

  faMotorcycle = faMotorcycle;
  faGamepad = faGamepad;
  faTableTenis = faTableTennisPaddleBall;
  faDumbbell = faDumbbell;
  faRunning = faRunning;
  faBicycle = faBicycle;
  faVolleyball = faVolleyball;
  faMusic = faMusic;
  faHeadphones = faHeadphones;
  faEarthAsia = faEarthAsia;
  faMicrochip = faMicrochip;
  faCricket = faBaseballBall;

  currentColor: string = '';

  changeColor() {
    this.currentColor = this.stylingService.getRandomBgColor();
  }
}

