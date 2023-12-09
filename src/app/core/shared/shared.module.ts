import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';

import { MatModule } from './mat.module';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../components/nav/nav.component';
import { FooterComponent } from '../components/footer/footer.component';
import { OrderUserNamePipe, DataTimePipe } from '../pipes';
import { CountOrderTotalDirective } from '../directives';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    DataTimePipe,
    OrderUserNamePipe,
    CountOrderTotalDirective,
  ],
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    MatModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    MatModule,
    FormsModule,
    NavComponent,
    DataTimePipe,
    FooterComponent,
    HttpClientModule,
    OrderUserNamePipe,
    ReactiveFormsModule,
    CountOrderTotalDirective,
  ],
  providers: [],
})
export class SharedModule {}
