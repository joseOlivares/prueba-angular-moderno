import { Component, inject } from '@angular/core';
import { MenuStore } from '../../services/menu-store';

@Component({
  selector: 'app-menu-summary',
  templateUrl: './menu-summary.html',
  styleUrl: './menu-summary.scss',
})
export class MenuSummary {
  protected readonly menu = inject(MenuStore);
}
