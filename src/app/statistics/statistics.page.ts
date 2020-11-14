import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  listRetraitant;
  nbF:number;
  nbH:number;
  nbT:number;
  nbFI:number;
  nbHI:number;
  nbTI:number;
  busy:boolean=false;
  constructor(private http:HttpClient) { }

  ngOnInit() {
   this.getStats();
  }


  getRetraitantList()
  {
    this.busy=true;
    this.http
    .get('https://us-central1-project-pdd-registration.cloudfunctions.net/getRetraitants')
    .subscribe((data: any)=>{
      console.log(data);
      this.listRetraitant = data;
      this.nbT = this.listRetraitant.length;
      for(var i = 0;i<this.listRetraitant.length;i++)
      {
      if(this.listRetraitant[i]['Sexe']==='F' && this.listRetraitant[i]['badge_recepteur'])
      {
        this.nbF++;
        console.log('filles',this.nbH);
      }
      if(this.listRetraitant[i]['Sexe']==='M' && this.listRetraitant[i]['badge_recepteur'])
      {
        this.nbH++;
      }

      this.nbT = this.nbF+this.nbH;
      }

      for(var i = 0;i<this.listRetraitant.length;i++)
      {
      if(this.listRetraitant[i]['Sexe']==='F')
      {
        this.nbFI++;
        console.log('filles',this.nbH);
      }
      if(this.listRetraitant[i]['Sexe']==='M')
      {
        this.nbHI++;
      }

      this.nbTI = this.nbFI+this.nbHI;
      }
      console.log('listretr',this.listRetraitant.length);
      console.log('list par zone',this.listRetraitant.groupBy('zone'));
      this.busy=false;
    });
  }

  getStats()
  {
    this.getRetraitantList();
    this.nbF = 0;
    this.nbH = 0;
    this.nbT = 0;
    this.nbFI = 0;
    this.nbHI = 0;
    this.nbTI = 0;

    console.log('list retraitants',this.listRetraitant);
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.getStats();
      event.target.complete();
    }, 2000);
  }
}
