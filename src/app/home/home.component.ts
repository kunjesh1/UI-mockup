import { Component, OnInit, Inject, AfterViewChecked } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {

  imageUrlArray = ['https://picsum.photos/id/237/200/300', 'https://picsum.photos/id/237/200/300'];
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    scrollFunction();
  }

}

function scrollFunction() {
  console.log(window.pageYOffset)
  // if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  //   document.getElementById("navbar").style.padding = "30px 10px";
  //   document.getElementById("logo").style.fontSize = "25px";
  // } else {
  //   document.getElementById("navbar").style.padding = "80px 10px";
  //   document.getElementById("logo").style.fontSize = "35px";
  // }
}
