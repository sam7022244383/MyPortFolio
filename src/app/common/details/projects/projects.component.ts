import { Component, inject } from '@angular/core';
import { StylingService } from '../../../services/styling.service';
import { ProjectTemplateComponent } from '../../project-template/project-template.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectTemplateComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  stylingService = inject(StylingService);

  currentColor: string = '';

  changeColor() {
    this.currentColor = this.stylingService.getRandomBgColor();
  }
}
