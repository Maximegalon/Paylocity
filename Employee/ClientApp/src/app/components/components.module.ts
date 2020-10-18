import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';

import { EntryBarComponent } from './entry-bar/entry-bar.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TableModule, ButtonModule, ProgressSpinnerModule, InputTextModule, CheckboxModule, RadioButtonModule, RippleModule,
  ],
  declarations: [
    EntryBarComponent,
    NavMenuComponent,
  ],
  providers: [
  ],
  exports: [
    EntryBarComponent,
    NavMenuComponent,
  ]
})
export class ComponentsModule { }
