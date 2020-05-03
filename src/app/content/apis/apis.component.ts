import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss']
})
export class ApisComponent implements OnInit {

  currentContent;
  toggle = false;
  selected = 0;
  content = [{
    title:"Customer support bot",
    img:"../../../assets/images/chatbotillustration.jpg",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"

  },
  {
    title:"Email Routing Service",
    img:"../../../assets/images/mail.svg",
   
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"

  }
,
{
  title:"Auto- Reply service",
  img:"../../../assets/images/email-routing.svg",
  content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"

},
{
  title:"Sentiment Analysis",
  img:"../../../assets/images/dashboard.svg",
  content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"

}]
  constructor() { }

  ngOnInit() {
    this.currentContent = this.content[0];
    this.selected = 0;
  }

  showRespectiveContent(index)
  {
    this.currentContent = this.content[index];
    this.selected = index;
  }

  toggleAPI(){
   this.toggle = !this.toggle;
  }

}
