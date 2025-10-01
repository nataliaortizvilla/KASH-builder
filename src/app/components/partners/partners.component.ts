import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-partners",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./partners.component.html",
  styleUrls: ["./partners.component.scss"],
})
export class PartnersComponent {
  currentSlide = 0;

  partners = [
    "https://api.builder.io/api/v1/image/assets/TEMP/fa6cec19ed2b8503b21fe35d5051d32412594b5e?width=266",
    "https://api.builder.io/api/v1/image/assets/TEMP/bf479315f414bded98e648b333c745c5a137a456?width=274",
    "https://api.builder.io/api/v1/image/assets/TEMP/89dd71e9036873fe6effbd4ee1fe77baebf42163?width=344",
    "https://api.builder.io/api/v1/image/assets/TEMP/c67a8c3639b0a74f6bd13df597c20c8ba63c5c7d?width=276",
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.partners.length;
  }

  prevSlide() {
    this.currentSlide =
      this.currentSlide === 0
        ? this.partners.length - 1
        : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
