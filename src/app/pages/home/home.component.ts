import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent,FooterComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}
  irParaForm() {
  this.router.navigate(['/formulario']);
}

}
