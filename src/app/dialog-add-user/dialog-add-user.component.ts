import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.sass']
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate: Date = new Date();
  loading = false;

    constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: AngularFirestore) {}

    ngOnInit() {
      
    }

    saveUser(){
      this.loading = true;
      this.user.birthDate = this.birthDate.getTime(); //sorgt dafür das das datum in eine zahl geändert wird. diese 1970
      console.log('current user', this.user);

      this.firestore
        .collection('users')
        .add(this.user.toJSON())
        .then((result: any) =>{
          console.log('adding user finished', result);
          this.loading = false;
          this.dialogRef.close()
        });
    }
}
