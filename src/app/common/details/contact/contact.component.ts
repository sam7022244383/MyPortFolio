import { Component, inject } from '@angular/core';
import { SocialIconsComponent } from '../../profile/social-icons/social-icons.component';
import { StylingService } from '../../../services/styling.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SocialIconsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  stylingService = inject(StylingService);

  currentColor: string = '';

  changeColor() {
    this.currentColor = this.stylingService.getRandomBgColor();
  }
}
