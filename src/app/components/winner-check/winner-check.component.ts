import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-winner-check",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./winner-check.component.html",
  styleUrls: ["./winner-check.component.scss"],
})
export class WinnerCheckComponent {
  idKash: string = "";
  gna: string = "";

  checkWinner() {
    console.log("Checking winner:", this.idKash, this.gna);
  }
}
