import { Component, HostListener } from "@angular/core";
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
  scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 100; // si scrolleas más de 50px
  }

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
