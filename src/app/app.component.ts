import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponet implements OnInit, OnDestroy {
  title = 'JR Games';
  mostrarMenu: boolean = true;

  constructor(private _loginService: LoginService) { }

  ngOnInit(): void  {

    this._loginService.getMostraMenu().subscribe(
    res => {this.mostrarMenu = res; }
  )
  }
  ngOnDestroy() {
    localStorage.clear();


  }
}



function ngOnDestroy() {
  throw new Error('Function not implemented.');
}

