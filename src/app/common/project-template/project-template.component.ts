import { Component } from '@angular/core';
import { RolsandResponsibilities, Skill } from '../details/about/about.component';
import { Observable, interval, map, take } from 'rxjs';
import { CommonModule } from '@angular/common';
interface Project{
  projectName : string;
  description : string;
  skills : Skill[];
  RolesAndResponsibilities? : RolsandResponsibilities[];
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
      projectName: 'BOOTCAMP',
      description: 'The Project Gives Feasibility For IMRIEL TECHNOLOGY Employees To Undergo The Specific Training Which Will Be Assigned By Their Respective Mentor. Similar To Udemy.',
      skills: [
        { skillname: 'C#', img: 'assets/skills/c-sharp.png' },
        { skillname: '.Net Core Web API', img: 'assets/skills/visual-studio.png' },
        { skillname: 'Angular', img: 'assets/skills/Angular.png' },
        { skillname: 'TypeScript', img: 'assets/skills/typescript.png' },
        { skillname: 'Entity Framework', img: 'assets/skills/EF.png' },
        { skillname: 'LinQ', img: 'assets/skills/linq.png' },
        { skillname: 'MS SQL', img: 'assets/skills/database.png' },
        { skillname: 'Microsoft Azure', img: 'assets/skills/azure.png' },
        { skillname: 'Azure DevOps', img: 'assets/tools/Azure Devops.png' }
      ],
      RolesAndResponsibilities :[
        {Roles : "Participating In The Requirements Analysis."},
        {Roles : "Writing Clean, Scalable Code. and Doing Full stack developemtn end to end"},
        {Roles : "Reviewing the PR of fellow developers."},
        {Roles : "Interacting with QA Team."}
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
      ],
      RolesAndResponsibilities :[
        {Roles : "Participating In The Requirements Analysis."},
        {Roles : "Writing Clean, Scalable Code. and Doing Full stack developemtn end to end"},
        {Roles : "Interacting with the Clients."},
        {Roles : "Providing feasibile Solutions to the Clients."},
        {Roles : "Handling The Build And Deployments in Different Regions."},
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
      ],
      RolesAndResponsibilities :[
        {Roles : "Participating In The Requirements Analysis."},
        {Roles : "Writing Clean, Scalable Code."},
        {Roles : "Interacting with the Clients."},
        {Roles : "Providing feasibile Solutions to the Clients."},
        {Roles : "Handling The Build And Deployments in Different Regions."},
      ]
    },
    {
      projectName: 'OAO Online Account Opening ',
      description: 'This Application Gives The Feasibility To Open Brokerage , Retirement , Plan Business Accounts For The Customers Who Want To Do Investment And The Data Which Customer Has Provided Will Be Verified By National Financial Service’s Through Web Services. Maintaining The Project Code Base Manually Through Git Command Line Interface (Git Bash) Without Jenkins.',
      skills: [
        { skillname: 'ASP.NET', img: 'assets/skills/Visual Studio.png' },
        { skillname: 'C#', img: 'assets/skills/c-sharp.png' },
        { skillname: 'MS SQL', img: 'assets/skills/database.png' },
        { skillname: 'HTML', img: 'assets/skills/html.png' },
        { skillname: 'CSS', img: 'assets/skills/css.png' },
        { skillname: 'JavaScript', img: 'assets/skills/js-file.png' },
      ],
      RolesAndResponsibilities :[
        {Roles : "Single Resource To The Project Doing Full Stack Development Independently Without Team Lead And Technical Lead."},
        {Roles : "Participating In The Requirements Analysis."},
        {Roles : "Writing Clean, Scalable Code Using C# Programming Language."},
        {Roles : "Interacting With Client’s and Handling The Build And Deployments in Different Regions."},
        {Roles : "Handling The Releases Independently, Co-Ordinating With QA Team And Business Analyst."},
        {Roles : "if Any Issue Comes In Any Of The Environment, I Am The First Point Of Contact As I Am Single Developer In The Project So Need To Be Available At Every Point Of Time If Any Issues Comes In Any Of The Environment."},
      ]
    },
    {
      projectName: ' Wing Stop',
      description: 'Developed an Investment Calculator that analyzes the feasibility of market indices and individual stocks over time, integrating real-time data from Alpha Vantage and Twelve Data APIs. Visualized investment trends and performance using Highcharts for dynamic, interactive charts, enabling insightful decision-making through historical and comparative data analysis.',
      skills: [
        { skillname: 'HTML', img: 'assets/skills/html.png' },
        { skillname: 'CSS', img: 'assets/skills/css.png' },
        { skillname: 'JavaScript', img: 'assets/skills/js-file.png' }
      ],
      RolesAndResponsibilities :[
        {Roles : "Participating In The Requirements Analysis."},
        {Roles : "Writing Clean, Scalable Code."},
        {Roles : "Interacting with the Clients."},
        {Roles : "Providing feasibile Solutions to the Clients."},
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
    },
    {
      projectName: 'Azure Functions (Practice)',
      description: 'Demo Project to get knowledge of Azure Functions in real time scenario',
      skills: [
        { skillname: 'C#', img: 'assets/skills/c-sharp.png' },
        { skillname: 'Git', img: 'assets/skills/git.png' },
        {skillname : 'Azure Functions' , img: 'assets/skills/Azure Function.png'}
      ]
    },
    {
      projectName : 'JWT Token Implementation (Practice)',
      description : 'Demo Project where I implemented JWT Token, Global Exception handling, API Versioning ,Custom Validators.',
      skills :  [
        {skillname : 'C#' ,img: 'assets/skills/c-sharp.png' },
        {skillname : 'JWT Token' , img : 'assets/skills/jwttoken.png'}
      ]
    },
    {
      projectName : 'RailTracManager Frontend (Practice)',
      description : 'Demo Project where I implemented JWT Token, Global Exception handling, API Versioning ,Custom Validators.',
      skills :  [
        {skillname : 'Angular' ,img: 'assets/skills/Angular.png' },
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
