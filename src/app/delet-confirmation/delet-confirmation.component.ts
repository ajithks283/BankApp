import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
//import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-delet-confirmation',
  templateUrl: './delet-confirmation.component.html',
  styleUrls: ['./delet-confirmation.component.css']
})
export class DeletConfirmationComponent implements OnInit {
  // @Input() item!: string | symbol;
  @Input() 
  item! :string | symbol;
  @Output() onDelete = new EventEmitter();
  @Output() onCancel = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  delete(){
    this.onDelete.emit(this.item);
    alert("Deleting......");
  }

  cancel(){
    this.onCancel.emit();
    alert("cancelling......")
  }
  

}
