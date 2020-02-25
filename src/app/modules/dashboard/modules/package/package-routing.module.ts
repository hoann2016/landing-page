import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackageListComponent } from './pages/package-list/package-list.component';
import { PackageItemComponent } from './components/package-item/package-item.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
    {
        path: '',
        component: PackageListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule],
    exports: [RouterModule],
    declarations: [PackageListComponent, PackageItemComponent]
})
export class PackageRoutingModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: PackageRoutingModule,
            providers: []
        }
    }
}
