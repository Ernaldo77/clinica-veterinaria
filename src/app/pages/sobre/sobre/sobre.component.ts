import { Component } from '@angular/core';
import { NavbarComponent } from '../../../component/navbar/navbar.component';
import { FooterComponent } from "../../../component/footer/footer.component";


@Component({
  selector: 'app-sobre',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {

}
