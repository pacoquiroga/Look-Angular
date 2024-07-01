import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterModule } from '@angular/router';

export type menuItem = {
  icon: string;
  label: string;
  route?: string;
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterLink,
    RouterModule
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.css']
})
export class CustomSidenavComponent {

  sidenavCollapsed = signal(false);
  @Input() set collapsed(value: boolean){
    this.sidenavCollapsed.set(value);
  }

  menuItems = signal<menuItem[]>([
    { icon: 'leaderboard', label: 'Dashboard', route: 'dashboard' },
    { icon: 'paid', label: 'Ventas', route: 'ventas' },
    { icon: 'inventory', label: 'Inventario', route: 'inventario' },
  ]);

  profilePicSize = computed(() => this.sidenavCollapsed()? '32': '100');

}
