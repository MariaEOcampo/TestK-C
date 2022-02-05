import { Component, Input, OnInit } from '@angular/core';
import { iQuestionsContent } from '../../interfaces/questions';

@Component({
  selector: 'app-expansion-container',
  templateUrl: './expansion-container.component.html',
  styleUrls: ['./expansion-container.component.scss']
})
export class ExpansionContainerComponent implements OnInit {
   panelOpenState = false;

   @Input() labelTabs!:Array<string>;
   @Input() contentTab!:Array<iQuestionsContent>;
   @Input() titleTab:string=''

  constructor() { }

  ngOnInit(): void {
    
  }

}
