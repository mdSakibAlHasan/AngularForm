import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableViewComponent } from './table-view/table-view.component';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: "userList",
        component: TableViewComponent
    },
    {
        path: "user/:id",
        component: FormComponent
    },
    { 
        path: '',   redirectTo: '/userList', pathMatch: 'full' 
    },
    {
        path: "newUser",
        component: FormComponent
    }
];
