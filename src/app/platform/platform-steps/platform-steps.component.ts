import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-platform-steps',
  templateUrl: './platform-steps.component.html',
  styleUrls: ['./platform-steps.component.scss']
})
export class PlatformStepsComponent implements OnChanges {


  @Input() pageOffset;

  taskStep = [
    'Pick the NLU task',
    'Upload dataset in specific task-oriented format',
    'Click the train button',
    'Our ML workflows trigger the most optimized  ML pipeline for the dataset (in terms of scalability, portability, cost. Training ,Deployment and Serving is all abstracted under the hood ) for the finetuning task',
    'Generate predictions with an improved REST API'
  ]

  taskFlow = [
    'NLU Task',
    'Upload Dataset',
    'Train',
    'Trigger Pipeline',
    'REST API'
  ]

  icon = [
    'g_translate',
    'bar_chart',
    'memory',
    'backup',
    'code'
  ]

  stickyStyle = [{
    offSetMin: 500,
    offSetMax: 600,
    index: 0
  },
  {
    offSetMin: 700,
    offSetMax: 800,
    index: 1
  },
  {
    offSetMin: 800,
    offSetMax: 900,
    index: 2
  },
  {
    offSetMin: 900,
    offSetMax: 1000,
    index: 3
  },
  {
    offSetMin: 1000,
    offSetMax: 1100,
    index: 4
  }
  ];
  boldTextIndex = [
    {
      index: 0
    }
  ];
  textToBold = 0;
  constructor() { }

  ngOnChanges() {

    console.log("sdsd", this.pageOffset)
    this.boldTextIndex = this.stickyStyle.filter(item => {
      if (this.pageOffset >= item.offSetMin && this.pageOffset <= item.offSetMax) {
        return item;
      }
    }
    );
    if (this.boldTextIndex.length != 0)
      console.log("sdsd", this.boldTextIndex);
  }



}
