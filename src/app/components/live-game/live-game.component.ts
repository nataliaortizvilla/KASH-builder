import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-live-game",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./live-game.component.html",
  styleUrls: ["./live-game.component.scss"],
})
export class LiveGameComponent {
  stats = [
    {
      icon: "new",
      label: "Números que acaban de salir",
      color: "#F1C020",
    },
    {
      icon: "hot",
      label: "Números que más han salido",
      color: "#FF9200",
    },
    {
      icon: "cold",
      label: "Números que no salen tanto",
      color: "#5EB6E2",
    },
    {
      icon: "none",
      number: "46",
      label: "Números que no han salido",
      color: "#3D4FEE",
    },
  ];
}
