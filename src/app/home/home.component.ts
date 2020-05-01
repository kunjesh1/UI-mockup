import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageUrlArray = ['https://picsum.photos/id/237/200/300', 'https://picsum.photos/id/237/200/300'];
  constructor() { }

  ngOnInit() {
  }

}
