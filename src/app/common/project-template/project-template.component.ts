import { Component } from '@angular/core';
import { Skill } from '../details/about/about.component';
import { Observable, interval, map, take } from 'rxjs';
import { CommonModule } from '@angular/common';
interface Project{
  projectName : string;
  description : string;
  skills : Skill[]
}
@Component({
  selector: 'app-project-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-template.component.html',
  styleUrl: './project-template.component.css'
})
export class ProjectTemplateComponent {
  project: Project[] = [
    {
      projectName: ' Wing Stop',
      description: 'Developed an Investment Calculator that analyzes the feasibility of market indices and individual stocks over time, integrating real-time data from Alpha Vantage and Twelve Data APIs. Visualized investment trends and performance using Highcharts for dynamic, interactive charts, enabling insightful decision-making through historical and comparative data analysis.',
      skills: [
        { skillname: 'HTML', img: 'assets/skills/html.png' },
        { skillname: 'CSS', img: 'assets/skills/css.png' },
        { skillname: 'JavaScript', img: 'assets/skills/js-file.png' }
      ]
    },
    {
      projectName: 'BOOTCAMP',
      description: 'The Project Gives Feasibility For IMRIEL TECHNOLOGY Employees To Undergo The Specific Training Which Will Be Assigned By Their Respective Mentor. Similar To Udemy.',
      skills: [
        { skillname: 'C#', img: '../../../assets/skills/c-sharp.png' },
        { skillname: '.Net Core Web API', img: 'assets/skills/visual-studio.png' },
        { skillname: 'Angular', img: 'assets/skills/Angular.png' },
        { skillname: 'TypeScript', img: 'assets/skills/typescript.png' },
        { skillname: 'Entity Framework', img: 'assets/skills/EF.png' },
        { skillname: 'LinQ', img: 'assets/skills/linq.png' },
        { skillname: 'MS SQL', img: 'assets/skills/database.png' },
        { skillname: 'Microsoft Azure', img: 'assets/skills/azure.png' },
        { skillname: 'Azure DevOps', img: 'assets/tools/Azure Devops.png' }
      ]
    },
    {
      projectName: 'CBRE PIP Hotels ',
      description: 'The Project Is About Research And Analytics Of Previous And Future Trends In Hotel Industry In AMERICA,APAC,EMEA. It Is Similar To E-Commerce Domain Where Large Scale Business Hotels Buy These Research And Analytics Reports.',
      skills: [
        { skillname: '.Net MVC', img: 'assets/skills/Visual Studio.png' },
        { skillname: 'C#', img: 'assets/skills/c-sharp.png' },
        { skillname: 'Entity Framework', img: 'assets/skills/EF.png' },
        { skillname: 'LinQ', img: 'assets/skills/linq.png' },
        { skillname: 'HTML', img: 'assets/skills/html.png' },
        { skillname: 'CSS', img: 'assets/skills/css.png' },
        { skillname: 'JavaScript', img: 'assets/skills/js-file.png' },
        { skillname: 'Azure DevOps', img: 'assets/tools/Azure Devops.png' },
        { skillname: 'MS SQL', img: 'assets/skills/database.png' },
      ]
    },
    {
      projectName: 'CBRE Builder ',
      description: 'Designed and implemented a customizable report generation platform for a global real estate services provider, enabling users to filter and retrieve region-specific and sector-based data from the backend database. The interactive report builder supports dynamic filtering by geography, market sectors, and data points, allowing seamless generation of Excel reports. This solution empowers users to efficiently analyze and visualize market data, enhancing strategic decision-making across multiple regions and industries.',
      skills: [
        { skillname: 'Angular', img: 'assets/skills/Angular.png' },
        { skillname: 'TypeScript', img: 'assets/skills/typescript.png' },
        { skillname: 'MS SQL', img: 'assets/skills/database.png' },
        { skillname: 'Azure DevOps', img: 'assets/tools/Azure Devops.png' }
      ]
    },
    {
      projectName: 'Blog Management (Practice)',
      description: 'This practice project helps to understand How and Enterprise Lavel Application should look like with CQRS, Unit of work and Repository Pattern to make abstraction and decoupling.',
      skills: [
        { skillname: 'MS SQL', img: 'assets/skills/database.png' },
        { skillname: 'C#', img: 'assets/skills/c-sharp.png' },
        { skillname: '.Net Core Web API', img: 'assets/skills/visual-studio.png' },
        { skillname: 'Entity Framework Core', img: 'assets/skills/EF.png' },
        { skillname: 'LinQ', img: 'assets/skills/linq.png' },
        { skillname: 'Git', img: 'assets/skills/git.png' },
      ]
    }
  ]
  projects: Project[] = [];
  ngOnInit(): void {
    this.streamProjects().subscribe(p => {
      this.projects.push(p);
    });
  }

  streamProjects(): Observable<Project> {
    return interval(100).pipe(
      take(this.project.length),
      map(x => this.project[x])
    );
  }
}
