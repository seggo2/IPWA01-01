import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface EmissionRow {
  country: string;
  company: string;
  co2: number;
}

@Component({
  selector: 'app-co2-table',
  imports: [FormsModule,CommonModule],
  templateUrl: './co2-table.component.html',
  styles: ``
})
export class Co2TableComponent {
  filterText = '';
  sortColumn: keyof EmissionRow = 'country';
  sortAsc = true;

  data: EmissionRow[] = [
    { country: 'Deutschland', company: 'AutoTech AG', co2: 25.3 },
    { country: 'Deutschland', company: 'GreenEnergy GmbH', co2: 5.2 },
    { country: 'USA', company: 'EnergyCorp', co2: 180.1 },
    { country: 'USA', company: 'SkyLogistics Inc.', co2: 92.8 },
    { country: 'China', company: 'CoalGroup Ltd.', co2: 310.7 },
    { country: 'China', company: 'RedSteel Industries', co2: 255.4 },
    { country: 'Frankreich', company: 'AirClean SA', co2: 12.4 },
    { country: 'Frankreich', company: 'EcoFusion SAS', co2: 8.9 },
    { country: 'Indien', company: 'MegaPower Pvt.', co2: 89.5 },
    { country: 'Indien', company: 'AgroChem Ltd.', co2: 47.3 },
  ];
  

  sortBy(column: keyof EmissionRow) {
    if (this.sortColumn === column) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortColumn = column;
      this.sortAsc = true;
    }
  }

  filteredAndSortedData(): EmissionRow[] {
    return this.data
      .filter(row =>
        row.country.toLowerCase().includes(this.filterText.toLowerCase()) ||
        row.company.toLowerCase().includes(this.filterText.toLowerCase())
      )
      .sort((a, b) => {
        const dir = this.sortAsc ? 1 : -1;
        if (typeof a[this.sortColumn] === 'string') {
          return (a[this.sortColumn] as string).localeCompare(b[this.sortColumn] as string) * dir;
        } else {
          return ((a[this.sortColumn] as number) - (b[this.sortColumn] as number)) * dir;
        }
      });
  }
}
