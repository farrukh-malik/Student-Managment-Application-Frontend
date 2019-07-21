import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  open :boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginPage(){
      this.router.navigate(['/dashboard']);
  }

  // let open = false;


 onMouseEnter() {
  document.querySelector(".login-wrapper").classList.add("login-page-wrapper");
}

 onMouseLeave() {
  document.querySelector(".login-wrapper").classList.remove("login-page-wrapper");
}

 onClick(event){
  event.stopPropagation();
  open ? this.onMouseLeave() : this.onMouseEnter();
  this.open=!open;
}

}
