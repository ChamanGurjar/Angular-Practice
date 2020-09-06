import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  //  name: String

  constructor() { }

  ngOnInit(): void {
  }

  printName(input) {
    const name = input.value
    if (name) {
      alert("Your name is => " + name)
    } else {
      alert("Please enter name first")
    }
  }

}
