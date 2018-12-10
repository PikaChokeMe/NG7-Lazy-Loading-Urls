import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LazyComponent } from './components/lazy.component';
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule,
  ],
  declarations: [
    LazyComponent
  ],
  providers: [
  ]
})
export class LazyModule {
}
