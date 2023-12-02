import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp1',
  templateUrl: './exp1.component.html',
  styleUrls: ['./exp1.component.scss']
})
export class Exp1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
showSection1 = true;
 showSection2 = false;
 showSection3 = false;

 showSection(sectionId: string) {
    this.showSection1 = sectionId === 'section1';
    this.showSection2 = sectionId === 'section2';
    this.showSection3 = sectionId === 'section3';
 }

}

