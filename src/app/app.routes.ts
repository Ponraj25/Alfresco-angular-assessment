import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';

export const routes: Routes = [
    { path: 'dashboard', component: ContentComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
