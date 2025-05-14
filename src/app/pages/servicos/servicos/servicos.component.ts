import { Component } from '@angular/core';
import { NavbarComponent } from '../../../component/navbar/navbar.component';
import { FooterComponent } from "../../../component/footer/footer.component";

@Component({
  selector: 'app-servicos',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {

}
