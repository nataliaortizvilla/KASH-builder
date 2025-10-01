import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Router } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  menuItems = [
    { label: "Inicio", path: "/", active: true },
    { label: "Conoce Kash", path: "/conoce-kash", active: false },
    { label: "Resultados", path: "/resultados", active: false },
    { label: "Premios", path: "/premios", active: false },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.menuItems.forEach(item => {
        item.active = this.router.url === item.path;
      });
    });
  }
}
