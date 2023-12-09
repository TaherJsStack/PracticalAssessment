import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { NavItemsListModel } from '../../models/nav-items-list';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  // standalone: true,
  // imports: [],
})
export class NavComponent implements OnInit, OnDestroy {

  value: number = 0;
  itemsCount$: Observable<number> = new Observable;

  private subscription: Subscription = new Subscription;

  navListItems: NavItemsListModel[] =  [
    {title: 'Products', path: '/'},
    {title: 'Orders', path: '/orders'},
  ]

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
      // this.subscription = this.cartService.getProductsCount().subscribe((res: number) => {
      //   this.value = res;
      // });
      this.itemsCount$ = this.cartService.getProductsCount();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

