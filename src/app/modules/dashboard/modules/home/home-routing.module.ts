import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepPageComponent } from './pages/homep-page/homep-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomepPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [HomepPageComponent]
})
export class HomeRoutingModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: HomeRoutingModule,
            providers: []
        }
    }
}
