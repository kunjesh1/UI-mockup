import { Component, OnInit, HostListener } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnInit {

  pageOffset = 0;
  constructor(private stateService: StateService) { }

  ngOnInit() {

    this.stateService.getIndex().subscribe(
      value => {
        console.log("fdf", value);
      }
    )
  }


  @HostListener('window:scroll', ['$event'])

  ngAfterViewChecked() {
    this.scrollFunction();
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
