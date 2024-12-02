import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
declare const $: any;

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/profile', title: 'Profile', icon: 'user', class: '' },
  { path: '/dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: '' },
  { path: '/user', title: 'User Profile', icon: 'pe-7s-user', class: '' },
  { path: '/table', title: 'Table List', icon: 'pe-7s-note2', class: '' },
  {
    path: '/typography',
    title: 'Typography',
    icon: 'pe-7s-news-paper',
    class: '',
  },
  { path: '/icons', title: 'Icons', icon: 'pe-7s-science', class: '' },

  {
    path: '/notifications',
    title: 'Notifications',
    icon: 'pe-7s-bell',
    class: '',
  },
];

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  menuItems = [
    { title: 'John Doe', icon: 'user-circle', route: '#' },
    { title: 'My Download Templates', icon: 'download', route: '#' },
    { title: 'Employee Onboarding', icon: 'user', route: '#' },
    { title: 'Employee Performance', icon: 'user', route: '#' },
    { title: 'Policies & Agreements', icon: 'file-blank', route: '#' },
    { title: 'Recruitment & Hiring', icon: 'user', route: '#' },
    { title: 'Startup Setup & Compliance', icon: 'folder', route: '#' },
    { title: 'Training & Development', icon: 'folder', route: '#' },
    { title: 'Drafts', icon: 'file-blank', route: '#' },
    { title: 'Trash', icon: 'trash', route: '#' },
    { title: 'Support Ticket', icon: 'support', route: '#' },
  ];

  constructor() {}

  ngOnInit() {}
  @Input() isSidebarOpen = false;
  @Output() toggleSidebar: EventEmitter<void> = new EventEmitter();
  toggleSidebarAction() {
    this.toggleSidebar.emit();
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
