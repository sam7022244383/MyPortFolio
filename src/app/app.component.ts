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
  routeTitleMap: { [key: string]: string } = {
    'about-site': 'About Site - Samiulla Mujawar',
    'about': 'About - Samiulla Mujawar',
    'experience': 'Experience - Samiulla Mujawar',
    'projects': 'Projects - Samiulla Mujawar',
    'personal': 'Personal Details - Samiulla Mujawar',
    'contact': 'Contact - Samiulla Mujawar',
  };

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
  const pageTitle = Object.entries(this.routeTitleMap).find(([key]) =>
    routePath.includes(key)
  )?.[1] || 'Samiulla Mujawar';

  this.titleService.setTitle(pageTitle);
}



  toggleMenu() {
    this.menuOpen  = !this.menuOpen;
  }
}
