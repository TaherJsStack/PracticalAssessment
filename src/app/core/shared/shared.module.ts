import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

import { MatModule } from './mat.module';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../components/nav/nav.component';
import { FooterComponent } from '../components/footer/footer.component';
import { OrderUserNamePipe } from '../pipes/order-user-name.pipe';
import { CountOrderTotalDirective } from '../directives';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    OrderUserNamePipe,
    CountOrderTotalDirective
  ],
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatModule,
    NgIf,
    NgFor,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NavComponent,
    FooterComponent,
    NgIf,
    NgFor,
    OrderUserNamePipe,
    CountOrderTotalDirective
  ],
  providers: [],
})
export class SharedModule {}
