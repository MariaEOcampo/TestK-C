import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-btn',
  templateUrl: './share-btn.component.html',
  styleUrls: ['./share-btn.component.scss']
})
export class ShareBtnComponent implements OnInit {

  @Input()share:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
