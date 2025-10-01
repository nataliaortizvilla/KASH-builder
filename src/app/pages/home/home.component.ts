import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../../components/header/header.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { ResultsComponent } from "../../components/results/results.component";
import { WinnerCheckComponent } from "../../components/winner-check/winner-check.component";
import { LiveGameComponent } from "../../components/live-game/live-game.component";
import { PartnersComponent } from "../../components/partners/partners.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ResultsComponent,
    WinnerCheckComponent,
    LiveGameComponent,
    PartnersComponent,
    FooterComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {}
