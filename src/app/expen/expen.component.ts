import { Component, OnInit } from '@angular/core';
import { LABELS } from '../timelabel';

const expen: string = "expen";
const day: string = "day";
const month: string = "month";
const year: string = "year";
@Component({
  selector: 'app-expen',
  templateUrl: './expen.component.html',
  styleUrls: ['./expen.component.css']
})


export class ExpenComponent implements OnInit {

  private lab: string;
  private selLab: string;

  tlab = LABELS;

  constructor() { 
  }

  ngOnInit() {
    this.lab = expen;
    this.selLab = day;
  }

  selectedExpen(): void {
    this.lab = expen;
  }
  issLab(): boolean {
    if(this.lab == expen){
      return true;
    }
  }
  onSelect(slab: string): void {
    this.selLab = slab;
  }

}
