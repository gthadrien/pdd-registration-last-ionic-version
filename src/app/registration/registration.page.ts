import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  username:string = ""
  password: string = ""
  cpassword: string = ""

  constructor(public afAuth: AngularFireAuth,
    private route:Router,
    public alert:AlertController,
    public afstore: AngularFirestore,
    public user: UserService
    ) { }

  ngOnInit() {
  }


  async register(){
    const { username, password, cpassword } = this
    if(password !== cpassword ){
      this.showAlert("Erreur !","Les 2 mots de passe ne sont pas égaux");
      return console.error("Passwords don't match");
    }
    if(password.length <= 5 ){
      this.showAlert("Erreur !","le mot de passe doit contenir au moins 6 caractères");
      return console.error("The password is to short");
    }
    try{
      const res = await this.afAuth.createUserWithEmailAndPassword(username+"@user.pdd",password);
      this.route.navigate(['home']);

      this.afstore.doc(`users/${res.user.uid}`).set({
        username
      })

      this.user.setUser({
        username,
        uid: res.user.uid
      });

      this.showAlert("Succès !","Bien enregistré! ");

      console.log(res);
    }catch(err){
      this.showAlert("Erreur !",err.message);
      console.dir(err);
    }
  }

  async showAlert(header: string,message: string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["ok"]
    });

    (await alert).present();
  }

}
