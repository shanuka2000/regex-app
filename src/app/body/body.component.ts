import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  options: any;
  toggleOption: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.options = "gm"
  }



  toggleFlags() {
    if (!this.toggleOption) {
      // @ts-ignore
      document.getElementById("toggleOpt").style.display = "initial";
    } else {
      // @ts-ignore
      document.getElementById("toggleOpt").style.display = "none";
    }

    this.toggleOption = !this.toggleOption;
  }
}
