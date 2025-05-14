import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { CarrosselComponent } from '../../component/carrossel/carrossel.component';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent,CarrosselComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
