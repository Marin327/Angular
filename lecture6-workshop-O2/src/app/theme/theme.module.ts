import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemesComponent } from './themes/themes.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { AsideComponent } from './aside/aside.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeComponent } from './theme/theme.component';


@NgModule({
  declarations: [
    NewThemeComponent,
    ThemesComponent,
    AsideComponent,
    ThemeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemeRoutingModule
  ]
})
export class ThemeModule { }
