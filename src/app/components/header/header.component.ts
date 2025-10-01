import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  menuItems = [
    { label: "Inicio", active: true },
    { label: "Conoce Kash", active: false },
    { label: "Resultados", active: false },
    { label: "Premios", active: false },
  ];
}
