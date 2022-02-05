import { Component, Input, OnInit } from '@angular/core';
import { iQuestionsContent } from '../../interfaces/questions';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() labelTabs: Array <string>=[];
  @Input() contentTab:Array <iQuestionsContent>=[];
  @Input() titleTab:string=''

  public content=[]

  constructor() { }

  ngOnInit(): void { 

  }

}
