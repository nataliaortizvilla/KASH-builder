import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-conoce-kash',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './conoce-kash.component.html',
  styleUrl: './conoce-kash.component.scss'
})
export class ConoceKashComponent {
  gameModalities = Array.from({ length: 10 }, (_, i) => `Kash ${i + 1}`);
}
