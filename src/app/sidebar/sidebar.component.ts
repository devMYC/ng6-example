import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private currentUrl: string;

  constructor(private router: Router) {
    router.events.subscribe((nav: NavigationEnd) => nav.url && ( this.currentUrl = nav.url ));
  }

  ngOnInit() {
  }

}
