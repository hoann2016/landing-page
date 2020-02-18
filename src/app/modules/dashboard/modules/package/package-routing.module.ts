import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackageListComponent } from './pages/package-list/package-list.component';


const routes: Routes = [
    {
        path: '',
        component: PackageListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [PackageListComponent]
})
export class PackageRoutingModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: PackageRoutingModule,
            providers: []
        }
    }
}
