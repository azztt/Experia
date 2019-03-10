import { Component, OnInit } from '@angular/core';
import { LABELS } from '../timelabel';

const graph: string = "graph";
const day: string = "day";
const month: string = "month";
const year: string = "year";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  private lab: string;
  private selLab: string;

  tlab = LABELS;

  constructor() { }

  ngOnInit() {
    this.lab = "";
    this.selLab = "";
  }

  selectedGraph(): void {
    this.lab = graph;
  }
  issLab(): boolean {
    if(this.lab == graph){
      return true;
    }
  }
  onSelect(slab: string): void {
    this.selLab = slab;
  }

}
