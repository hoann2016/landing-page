import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { PrivatePageComponent } from './pages/private-page/private-page.component';
import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';
import { LayoutSidebarComponent } from './components/layout-sidebar/layout-sidebar.component';


@NgModule({
    declarations: [PrivatePageComponent, LayoutHeaderComponent, LayoutSidebarComponent],
    imports: [
        CommonModule,
        CoreRoutingModule.forRoot()
    ]
})
export class CoreModule { }
