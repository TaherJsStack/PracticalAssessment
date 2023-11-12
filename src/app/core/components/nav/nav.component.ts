import { Component } from '@angular/core';
import { NavItemsListModel } from '../../models/nav-items-list';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  // standalone: true,
  // imports: [],
})
export class NavComponent {

  navListItems: NavItemsListModel[] =  [
    {title: 'Products', path: '/'},
    {title: 'Orders', path: '/orders'},
  ]

}
