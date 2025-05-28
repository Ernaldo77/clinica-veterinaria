import { Component } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
  selector: 'app-depoimentos',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.css'
})
export class DepoimentosComponent {

}
