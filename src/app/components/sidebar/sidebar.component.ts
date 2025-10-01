import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  menuItems = [
    { label: "Inicio", path: "/" },
    { label: "Conoce Kash", path: "/conoce-kash" },
    { label: "Resultados", path: "/resultados" },
    { label: "Premios", path: "/premios" },
  ];

  onBackdropClick() {
    this.close.emit();
  }

  onSidebarClick(event: Event) {
    event.stopPropagation();
  }

  onMenuItemClick() {
    this.close.emit();
  }
}
