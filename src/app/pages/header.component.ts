import { Component, OnInit, Input, OnChanges, Inject, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { StateService } from '../services/state.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {

  @Input() scrollPosition;
  subIndex = 0;
  @Input()
  set scrollIndex(scrollIndex) {
    this.subIndex = scrollIndex;
    console.log(this.subIndex);
    if (this.stateService.menuIndex.value === 1) {
      this.headerEvent.emit();
    }

    if (this.stateService.menuIndex.value === 5) {
      this.headerEvent.emit();
    }


  }


  @Output() headerEvent = new EventEmitter<any>();
  @Input() index;
  constructor(@Inject(DOCUMENT) private document: Document,
    private router: Router,
    private stateService: StateService) {

  }
  ngOnInit() {

    console.log(this.scrollPosition);


  }

  ngOnChanges() {
    console.log(this.stateService.menuIndex);



    if (this.scrollPosition > 0 || this.index == 4) {
      this.document.documentElement.style.setProperty('--headerBackground', '#ffffff');
      this.document.documentElement.style.setProperty('--headerTextColor', '#033d83');
    }
    else {
      this.document.documentElement.style.setProperty('--headerBackground', '#033d83');
      this.document.documentElement.style.setProperty('--headerTextColor', '#ffffff');
    }






  }

  navigateToHome() {
    this.stateService.setIndex(1);
    this.router.navigate(['home']);
  }

  navigateToAbout() {


    console.log(this.stateService.menuIndex.value);
    this.stateService.setIndex(5);
    this.router.navigate(['about']);
   

  }
  navigateToPlatform() {
    this.stateService.setIndex(3);

    this.router.navigate(['platform']);
  }



  navigateToAPIs() {
    this.stateService.setIndex(4);
    sessionStorage.setItem('index', '4');
    this.router.navigate(['domain']);
  }

}
