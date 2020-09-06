import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  @ViewChild('enteredName', { static: true }) name: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  printName() {
    const name = this.name.nativeElement.value
    if (name) {
      alert("Your name is => " + name)
    } else {
      alert("Please enter name first")
    }
  }

}
