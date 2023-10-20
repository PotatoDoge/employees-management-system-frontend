import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  changeSidenavState() {
    this.collapsed = !this.collapsed;
    this.emitToggleSideNav();
  }

  closeSidenav() {
    this.collapsed = false;
    this.emitToggleSideNav();
  }

  private emitToggleSideNav() {
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
}

export interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
