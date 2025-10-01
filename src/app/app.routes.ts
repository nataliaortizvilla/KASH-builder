import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ConoceKashComponent } from "./pages/conoce-kash/conoce-kash.component";
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { PremiosComponent } from './pages/premios/premios.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "conoce-kash", component: ConoceKashComponent },
    { path: "resultados", component: ResultadosComponent },
    { path: "premios", component: PremiosComponent }
];
