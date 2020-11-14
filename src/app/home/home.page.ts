import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router,NavigationExtras  } from '@angular/router';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string = ""
  password: string = ""

  constructor(public afAuth: AngularFireAuth, private router: Router,public user: UserService, private alert:AlertController) {}

  async login(){
    const{ username, password } = this;
    try{
      const res = await this.afAuth.signInWithEmailAndPassword(username+'@user.pdd',password);
      if(res.user){
        this.user.setUser({
          username,
          uid: res.user.uid
        });

        let navigationExtras: NavigationExtras = {
          queryParams: {
            user: username
          }
        };
        this.router.navigate(['login/retreatant'],navigationExtras);
      }
    }catch(err){
      console.dir(err);
      if(err.code === "auth/operation-not-allowed"){
        console.log("User not found");
      }
      if(err.code === "auth/wrong-password")
      {
        this.showAlert('Erreur','Mot de Passe Incorrect');
      }
      if(err.code === "auth/user-not-found")
      {
        this.showAlert('Erreur',"Cet utilisateur n'existe pas");
      }
      if(err.code === "auth/invalid-email")
      {
        this.showAlert('Erreur',"Veuillez saisir le nom d'utilisateur");
      }
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
