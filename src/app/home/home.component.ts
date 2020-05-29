import { Component, OnInit, Inject, AfterViewChecked, HostListener, Input, OnChanges, ViewChild, TemplateRef, AfterViewInit, ElementRef } from '@angular/core';
import { StateService } from '../services/state.service';
import { BehaviorSubject, Observable } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnChanges, OnInit {

  pageOffset = 0;
  imageUrlArray = ['https://picsum.photos/id/237/200/300', 'https://picsum.photos/id/237/200/300'];

  @ViewChild('about', { static: false }) public about: ElementRef<any>;
  @ViewChild('home', { static: false }) public home: ElementRef<any>;
  @ViewChild('product', { static: false }) public product: ElementRef<any>;

  timeFunction(element) {
    setTimeout(function () { this.scrollToElement(element); alert("After 5 seconds!"); }, 5000);
  }
  ngOnInit() {

  }
  subIndex: Observable<any> = this.stateService.getIndex();
  menuIndex = 1;



  ngOnChanges() {

    // this.stateService.menuIndex.subscribe(value => {
    //   this.menuIndex = value;
    //   this.subIndex = value;
    //   console.log("sdsd", value);



  }

  onScroll(event) {
    const verticalOffset = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;
    console.log(verticalOffset);
    console.log(event);


  }

  @HostListener('window:scroll', ['$event'])

  ngAfterViewInit(value = 0) {

    if (this.stateService.menuIndex.value === 1) {
      if (typeof this.home != "undefined") {
        // console.log(this.home.nativeElement);

        this.timeFunction(this.home.nativeElement);

      }
    } else if (this.stateService.menuIndex.value === 5) {
      console.log("about");
      if (typeof this.about != "undefined") {
        this.timeFunction(this.about.nativeElement);
      }
    }

    this.scrollFunction();

  }


  constructor(
    private stateService: StateService
  ) {


    this.stateService.getIndex().subscribe(
      value => {
        if (value === 1) {
          this.menuIndex = this.stateService.menuIndex.value;
          if (typeof this.home != "undefined") {
            console.log(this.home.nativeElement);
            this.scrollToElement(this.home.nativeElement);
          }
        } else if (value === 5) {
          console.log("about");
          this.menuIndex = this.stateService.menuIndex.value;
          if (typeof this.about != "undefined") {
            this.scrollToElement(this.about.nativeElement);
          }
        }
        console.log("hssdsd");
        // this.ngOnInit();
        // this.ngAfterViewInit(value);




      }
    );
  }
  scrollFunction() {
    console.log(window.pageYOffset);
    this.pageOffset = window.pageYOffset;

    // if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //   document.getElementById("navbar").style.padding = "30px 10px";
    //   document.getElementById("logo").style.fontSize = "25px";
    // } else {
    //   document.getElementById("navbar").style.padding = "80px 10px";
    //   document.getElementById("logo").style.fontSize = "35px";
    // }
  }


  scrollToElement($element): void {
    console.log($element);

    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }


}
