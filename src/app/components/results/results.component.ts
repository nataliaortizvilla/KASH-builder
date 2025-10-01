import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NumberBallComponent } from "../number-ball/number-ball.component";

interface ResultCard {
  gameId: string;
  numbers: number[];
  date: string;
  time: string;
}

@Component({
  selector: "app-results",
  standalone: true,
  imports: [CommonModule, NumberBallComponent],
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"],
})
export class ResultsComponent {
  currentSlide = 0;

  results: ResultCard[] = [
    {
      gameId: "548200",
      numbers: [
        34, 56, 78, 90, 23, 45, 67, 89, 12, 99, 11, 44, 33, 22, 55, 66, 77, 11,
        88, 30,
      ],
      date: "29-07-2025",
      time: "13:05",
    },
    {
      gameId: "548200",
      numbers: [
        34, 56, 78, 90, 23, 45, 67, 89, 12, 99, 11, 44, 33, 22, 55, 66, 77, 11,
        88, 30,
      ],
      date: "29-07-2025",
      time: "13:05",
    },
    {
      gameId: "548200",
      numbers: [
        34, 56, 78, 90, 23, 45, 67, 89, 12, 99, 11, 44, 33, 22, 55, 66, 77, 11,
        88, 30,
      ],
      date: "29-07-2025",
      time: "13:05",
    },
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.results.length;
  }

  prevSlide() {
    this.currentSlide =
      this.currentSlide === 0 ? this.results.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
