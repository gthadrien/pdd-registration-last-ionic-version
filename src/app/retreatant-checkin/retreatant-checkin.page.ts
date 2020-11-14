import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { HttpClient } from "@angular/common/http";
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-retreatant-checkin',
  templateUrl: './retreatant-checkin.page.html',
  styleUrls: ['./retreatant-checkin.page.scss'],
})
export class RetreatantCheckinPage implements OnInit {
code : string;
prenom: string;
nom:string;
niveau:string;
categorie:string;
dortoire:string;
hall:string;
refectoire:string;
gpartage:string;
groupe:string;
ville:string;
szone:string;
recepteur:string;
id:string;

data1:any;

busy: boolean = false;
valider: boolean = false;

infoRetraitant ;
  constructor(public afd:AngularFireDatabase, private http:HttpClient,private alert:AlertController,private router:Router) {
    this.emptyTheForm();
  }

  ngOnInit() {
    this.getDataFromFB();
    this.emptyTheForm();
  }

  search(){
    this.busy = true;
    var {code,nom,niveau,categorie,dortoire,hall,refectoire,gpartage,prenom}=this
    this.http
    .get('https://us-central1-project-pdd-registration.cloudfunctions.net/verifCode?code='+code)
    .subscribe((data: any)=>{
      this.data1=data;
      this.infoRetraitant = data[0];
      this.nom = data[0]['Nom'];
      this.prenom = data[0]['Prenom'];
      this.niveau = data[0]['Niveau'];
      this.categorie = data[0]['Categorie'];
      this.hall = data[0]['Hall'];
      this.dortoire = data[0]['Dortoir'];
      this.refectoire = data[0]['Refectoire'];
      this.gpartage = data[0]['Groupe de Partage'];
      this.groupe = data[0]['Groupe'];
      this.ville = data[0]['Ville'];
      this.szone = data[0]['Sous Zone'];
      this.id = data[0]['retraitantID'];
      this.recepteur = data[0]['badge_recepteur'];
      console.log(data[0]);
      console.log(data[0]['Nom']);
      console.log(this.id);
      this.busy = false;
      if(data[0]['badge_recepteur']!=null)
      {
        this.showAlert('Attention','Son Badge a déjà été retiré !');
        this.valider = false;
      }
      else
      {
        this.valider = true;
      }
    },
    (err:any) => {
      this.emptyTheForm();
      this.showAlert("Erreur !","Aucun retraitant ne possède le code "+this.code);
      this.busy = false;
      this.valider = false;
    });
  }

  getDataFromFB(){
    this.afd.list('retraitants/').valueChanges().subscribe(
      data =>{
        console.log(data);
      }
    )
  }

  validerRetraitant()
  {
    //on se deplace vers la page de validation 
    //en envoyant les infos du retraitant
    let navigationExtras: NavigationExtras = {
      queryParams: {
        retraitant: JSON.stringify(this.data1)
      }
    };
    this.router.navigate(['retreatant-checkin-confirm'],navigationExtras);
    this.valider = false;
  }

  emptyTheForm()
  {
    this.nom = '';
      this.prenom = '';
      this.niveau = '';
      this.categorie = '';
      this.hall = '';
      this.dortoire = '';
      this.refectoire = '';
      this.gpartage = '';
      this.id = '';
      this.groupe='';
      this.ville='';
      this.szone='';
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
