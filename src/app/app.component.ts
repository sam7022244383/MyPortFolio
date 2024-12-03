import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { ProfileDetailsComponent } from './common/profile/profile-details/profile-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ProfileDetailsComponent , RouterModule ,FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  faBars = faBars;
  faXmark = faXmark;
  faCopyright = faCopyright;
  menuOpen = false;

constructor(private titleService: Title, private router : Router , private viewportScroller: ViewportScroller )
{
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      this.viewportScroller.scrollToPosition([0, 0]);
    }
  });
}

ngOnInit(): void {
  this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd)
    )
    .subscribe((event) => {
      const navigationEndEvent = event as NavigationEnd;
      this.updateTitleBasedOnRoute();

      // Track the page view in Google Analytics (ensure gtag is defined)
      if (typeof gtag === 'function') {
        gtag('config', 'YOUR_TRACKING_ID', {
          page_path: navigationEndEvent.urlAfterRedirects,
        });
      } else {
        console.error('Google Analytics gtag is not available');
      }
    });
}

updateTitleBasedOnRoute(): void {
  const routePath = this.router.url;
  let pageTitle = 'Samiulla Mujawar';

  if (routePath.includes('about-site')) {
    pageTitle = 'About Site - Samiulla Mujawar';
  } 
  else if (routePath.includes('about')) {
    pageTitle = 'About - Samiulla Mujawar';
  } 
  else if (routePath.includes('experience')) {
    pageTitle = 'Experience - Samiulla Mujawar';
  } 
  else if (routePath.includes('projects')) {
    pageTitle = 'Projects - Samiulla Mujawar';
  }
  else if (routePath.includes('personal')) {
    pageTitle = 'Personal Details - Samiulla Mujawar';
  }
  else if (routePath.includes('contact')) {
    pageTitle = 'Contact - Samiulla Mujawar';
  }

  this.titleService.setTitle(pageTitle);
}


  toggleMenu() {
    this.menuOpen  = !this.menuOpen;
  }
}
