import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.sass']
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate: Date = new Date();

    constructor() {}

    ngOnInit() {
      
    }

    saveUser(){
      this.user.birthDate = this.birthDate.getTime(); //sorgt dafür das das datum in eine zahl geändert wird. diese 1970
      console.log('current user', this.user);
    }
}
