import { Routes } from '@angular/router';
import { AboutComponent } from './common/details/about/about.component';
import { ExperienceComponent } from './common/details/experience/experience.component';
import { ProjectsComponent } from './common/details/projects/projects.component';
import { PersonalComponent } from './common/details/personal/personal.component';
import { ContactComponent } from './common/details/contact/contact.component';
import { AboutSiteComponent } from './common/about-site/about-site.component';

export const routes: Routes = [

    { path: 'about', component: AboutComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'personal', component: PersonalComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about-site', component: AboutSiteComponent },
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: '**', redirectTo: '/about' }
];
