import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss']
})
export class DomainsComponent implements OnInit {

  constructor() { }
  tryItOutFlag = true;

  menuItems = [

    {
      title: "Customer Support",
      child: [{
        title: "Auto Reply api - NLP"
      },
      {
        title: "Email Routing api- NLP "
      },
      {
        title: "Product Tags with Sentiments api - NLP"
      },
      {
        title: "FAQ Bot/Question Answering Bot"
      }
      ]
    },
    {
      title: "Healthcare",
      child: [{
        title: "Medical ner api"
      },
      {
        title: "Symptom Check Bot"
      }
      ]
    },
    {
      title: "Education",
      child: [{
        title: "Paraphrase classification api"
      },
      {
        title: "Sentence Correction api"
      },
      {
        title: "Question Generation api"
      },
      {
        title: "Reprhase api"
      }
      ]
    },
    {
      title: "Media",
      child: [{
        title: "Abstractive summarisation api"
      }
      ]
    },

    {
      title: "Misc",
      child: [{
        title: "Knowledge graph api"
      }
      ]
    }
  ]



  ngOnInit() {
  }

  closeTryItOut() {
    this.tryItOutFlag = false;
  }




}
