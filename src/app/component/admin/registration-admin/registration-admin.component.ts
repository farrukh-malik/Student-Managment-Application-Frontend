import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-registration-admin',
  templateUrl: './registration-admin.component.html',
  styleUrls: ['./registration-admin.component.scss']
})
export class RegistrationAdminComponent implements OnInit {
  title = 'Look jQuery Animation working in action!';

  constructor() { }

  ngOnInit() {
    // $(document).ready(function(){
    //     $("button").click(function(){
    //         var div = $("div");  
    //         div.animate({left: '100px'}, "slow");
    //         div.animate({fontSize: '5em'}, "slow");
    //     });
    // });
  }


  

}
