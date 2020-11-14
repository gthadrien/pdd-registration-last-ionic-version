import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-retreatant-checkin-info',
  templateUrl: './retreatant-checkin-info.page.html',
  styleUrls: ['./retreatant-checkin-info.page.scss'],
})
export class RetreatantCheckinInfoPage implements OnInit {

  busy: boolean = false;
  listRetraitant ;
  constructor(private http:HttpClient) { 
    this.getRetraitantList();
  }

  ngOnInit() {
    this.getRetraitantList();
  }


  FilterJSONData(ev)
  {
    const val = ev.target.value;
    if(val && val.trim() != '')
    {
      this.listRetraitant = this.listRetraitant.filter((item)=>{
        return (item.Nom.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }else{
      this.getRetraitantList();
    }
  }

  getRetraitantList(){
    this.busy=true;
    this.http
    .get('https://us-central1-project-pdd-registration.cloudfunctions.net/getRetraitants')
    .subscribe((data: any)=>{
      console.log(data);
      this.listRetraitant = data;
      this.busy=false;
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.getRetraitantList();
      event.target.complete();
    }, 2000);
  }

}
