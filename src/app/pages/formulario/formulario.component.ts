import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-formulario',
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

}
