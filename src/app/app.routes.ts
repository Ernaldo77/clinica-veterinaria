import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre/sobre.component';
import { ServicosComponent } from './pages/servicos/servicos/servicos.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { DepoimentosComponent } from './pages/depoimentos/depoimentos.component';
import { EquipeComponent } from './pages/equipe/equipe.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"sobre", component:SobreComponent},
    {path:"servicos",component:ServicosComponent},
    {path:"formulario",component:FormularioComponent},
    {path:"depoimentos",component:DepoimentosComponent},
    {path:"equipe",component:EquipeComponent}
];

