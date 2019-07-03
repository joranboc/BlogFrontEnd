import { Component, OnInit } from '@angular/core';
import { Author } from '../author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors: Author[] = [{
    id: 1,
    name: "Jorge bocanegra",
    age: 23,
    nationality: "Colombiano"
  },
    {
      id: 2,
      name: "Luisa Cajamarca",
      age: 20,
      nationality: "Colombiana"
    },
    {
      id: 3,
      name: "Pepito Perez",
      age: 30,
      nationality: "Mexicano"
    }
]

  constructor() { }

  ngOnInit() {
  }

}
