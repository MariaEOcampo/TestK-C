import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { iUser } from '../../interfaces/users';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  
  @Input() tableData:Array<iUser>=[];
  @Input() status:boolean=false;
  @Input() tableAccepted:Array<iUser>=[];
  @Input() tableDeclined:Array<iUser>=[];

  
  public displayedColumns: string[] = ['name','lastName', 'email', 'status', 'button'];
  public dataSource!:iUser[];

  
  constructor() { }

  ngOnInit(): void {
      this.dataSource = this.tableData;
  }

  ngOnChanges(changes: SimpleChanges): void {
    
for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'tableAccepted': 
           this.dataSource=this.tableAccepted
          break;
            case 'tableDeclined': 
           this.dataSource=this.tableDeclined
          break;
             case 'tableData':
               this.dataSource=this.tableData
          break     
        }
      }
    }


}

}



