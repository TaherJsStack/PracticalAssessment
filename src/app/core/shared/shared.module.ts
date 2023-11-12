import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

import { MatModule } from './mat.module';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../components/nav/nav.component';
import { FooterComponent } from '../components/footer/footer.component';
import { OrderUserNamePipe } from '../pipes/order-user-name.pipe';
import { CountOrderTotalDirective } from '../directives';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    MatModule,
    NgIf,
    NgFor,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
