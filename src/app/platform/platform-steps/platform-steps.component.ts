import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platform-steps',
  templateUrl: './platform-steps.component.html',
  styleUrls: ['./platform-steps.component.scss']
})
export class PlatformStepsComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }



}
