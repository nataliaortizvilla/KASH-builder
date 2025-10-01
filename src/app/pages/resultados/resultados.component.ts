import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface GameResult {
  gameNumber: string;
  numbers: number[];
  date: string;
  time: string;
}

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.scss'
})
export class ResultadosComponent {
  searchDate: string = '';
  searchGame: string = '';
  idKash: string = '';
  gna: string = '';

  currentPage: number = 1;
  totalPages: number = 5;
  resultsPerPage: number = 9;

  // Sample data - replace with actual API call
  allResults: GameResult[] = [
    {
      gameNumber: '548200',
      numbers: [34, 56, 78, 90, 23, 45, 67, 89, 12, 99, 11, 44, 33, 22, 55, 66, 77, 88, 30, 80],
      date: '29-07-2025',
      time: '13:45'
    },
    {
      gameNumber: '548200',
      numbers: [34, 56, 78, 90, 23, 45, 67, 89, 12, 99, 11, 44, 33, 22, 55, 66, 77, 88, 30, 80],
      date: '29-07-2025',
      time: '13:40'
    },
    {
      gameNumber: '548200',
      numbers: [34, 56, 78, 90, 23, 45, 67, 89, 12, 99, 11, 44, 33, 22, 55, 66, 77, 88, 30, 80],
      date: '29-07-2025',
      time: '13:35'
    },
    {
      gameNumber: '548200',
      numbers: [34, 56, 78, 90, 23, 45, 67, 89, 12, 99, 11, 44, 33, 22, 55, 66, 77, 88, 30, 80],
      date: '29-07-2025',
      time: '13:30'
    },
    {
      gameNumber: '548200',
      numbers: [34, 56, 78, 90, 23, 45, 67, 89, 12, 99, 11, 44, 33, 22, 55, 66, 77, 88, 30, 80],
      date: '29-07-2025',
      time: '13:25'
    },
    {
      gameNumber: '548200',
      numbers: [34, 56, 78, 90, 23, 45, 67, 89, 12, 99, 11, 44, 33, 22, 55, 66, 77, 88, 30, 80],
      date: '29-07-2025',
      time: '13:20'
    },
    {
      gameNumber: '548200',
      numbers: [34, 56, 78, 90, 23, 45, 67, 89, 12, 99, 11, 44, 33, 22, 55, 66, 77, 88, 30, 80],
      date: '29-07-2025',
      time: '13:15'
    },
    {
      gameNumber: '548200',
      numbers: [34, 56, 78, 90, 23, 45, 67, 89, 12, 99, 11, 44, 33, 22, 55, 66, 77, 88, 30, 80],
      date: '29-07-2025',
      time: '13:10'
    },
    {
      gameNumber: '548200',
      numbers: [34, 56, 78, 90, 23, 45, 67, 89, 12, 99, 11, 44, 33, 22, 55, 66, 77, 88, 30, 80],
      date: '29-07-2025',
      time: '13:05'
    }
  ];

  get displayedResults(): GameResult[] {
    const startIndex = (this.currentPage - 1) * this.resultsPerPage;
    const endIndex = startIndex + this.resultsPerPage;
    return this.allResults.slice(startIndex, endIndex);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
