import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { NotAuthorisedComponent } from './component/not-authorised/not-authorised.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageNotFoundComponent, NotAuthorisedComponent]
})
export class SharedModule { }
