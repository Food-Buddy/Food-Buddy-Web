import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { MatButtonModule } from '@angular/material';
import { AppConfigService } from './app-config.service';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    LayoutHeaderComponent,
    LayoutFooterComponent
  ],
  declarations: [
    LayoutHeaderComponent,
    LayoutFooterComponent
  ],
  providers: [
    AppConfigService
  ]
})
export class CoreModule { }
