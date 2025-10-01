import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-number-ball",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./number-ball.component.html",
  styleUrls: ["./number-ball.component.scss"],
})
export class NumberBallComponent {
  @Input() number: number = 0;
}
