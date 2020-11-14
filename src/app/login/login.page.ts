import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  admin: boolean = false;
  data:any;
  user:string;

  constructor(private router:Router,private route:ActivatedRoute) { }



  ngOnInit() {
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


}
