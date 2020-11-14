import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-retreatant-checkin-confirm',
  templateUrl: './retreatant-checkin-confirm.page.html',
  styleUrls: ['./retreatant-checkin-confirm.page.scss'],
  providers: [DatePipe]
})
export class RetreatantCheckinConfirmPage implements OnInit {
  viewNResp : boolean=false ;
  retirer:boolean=false;
  panelColor = new FormControl("le-retraitant");
  data:any;
  nomRetraitant:string;
  nomRespo:string;
  nomRetir:string;
  myDate = new Date();
  dateRe:string;


  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private http:HttpClient,
    private alert:AlertController,
    private datePipe:DatePipe
    )
  { 
  }

  ngOnInit() {
    //je recupere la date
    this.dateRe = this.datePipe.transform(this.myDate,'dd/MM/yyyy,h:mm a');
    //recuper les valeurs passer en param depuis 
    // la page précedente (conf)
    this.route.queryParams.subscribe(params=>{
      console.log('params:',params);
      if(params && params.retraitant)
      {
        this.data = JSON.parse(params.retraitant);
        this.nomRetraitant = this.data[0]['Prenom'] + " " + this.data[0]['Nom'];
        this.nomRetir = this.data[0]['badge_recepteur'];
        console.log('data:',this.data[0]);
        console.log('nom retraitant:',this.nomRetraitant);
      }
    });
  }

  afficherNResp()
  {
      this.viewNResp=true;
      console.log(this.viewNResp);
  }

  //pour afficher la zone de saisie en cas 
  // de retrait par le responsable
  onSelectChange(selectedValue: any)
  {
    this.viewNResp=false;
    this.nomRespo='';
    this.retirer=true;
    if(selectedValue.target.value==="responsable")
    {
      this.viewNResp=true;
    }
  }

  retirerBadge()
  {
    this.nomRetir=this.nomRetraitant;
    if(this.nomRespo!='')
    {
      this.nomRetir='Resp-'+this.nomRespo;
    }
    this.http
    .get('https://us-central1-project-pdd-registration.cloudfunctions.net/validationRetrait?id='+this.data[0]['retraitantID']+'&recepteur='+this.nomRetir+'&date='+this.dateRe)
    .subscribe(data=>{
      console.log("reponse:",data['succes']);
      this.showAlert("Succès","Vous pouvez remettre le Badge");
    });
    this.http
    .get('http://us-central1-project-pdd-registration.cloudfunctions.net/addRetraitBadge?nomR='+this.data[0]['Nom']+' '+this.data[0]['Prenom']+'&retirePar='+this.nomRetir+'&date='+this.dateRe+'&retraite='+this.data[0]['Retraite'])
    .subscribe(data=>{
      console.log("reponse:",data['message']);
    });

    this.router.navigate(['login/retreatant-checkin-info']);
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
