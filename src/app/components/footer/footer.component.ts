import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  navigationLinks = ["Conoce Kash", "Premios", "Resultados", "Jugar"];

  aboutLinks = ["Política de tratamiento de datos", "Términos y condiciones"];
}
