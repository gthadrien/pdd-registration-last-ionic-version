import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-retreatant',
  templateUrl: './retreatant.page.html',
  styleUrls: ['./retreatant.page.scss'],
})
export class RetreatantPage implements OnInit {

  listRetraitant ;
  busy: boolean = false;
  data:any;
  user:string;
  admin:boolean=false;
  constructor(private http:HttpClient,private route:ActivatedRoute) 
  {}

  ngOnInit() 
  {
    this.getRetraitantList();

    this.route.queryParams.subscribe(params=>{
      console.log('params:',params);
      if(params && params.user)
      {
        this.data = params;
        this.user=this.data['user'];
        console.log('user:',this.user);
        if(this.user.includes('admin'))
        {
          this.admin=true;
        }
      }
    });
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

}
