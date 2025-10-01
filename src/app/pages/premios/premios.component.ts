import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-premios',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './premios.component.html',
  styleUrl: './premios.component.scss'
})
export class PremiosComponent {

}
