import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre/sobre.component';
import { ServicosComponent } from './pages/servicos/servicos/servicos.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"sobre", component:SobreComponent},
    {path:"servicos",component:ServicosComponent}
];

