import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-app';
  dados=[{id:1,link:'',resumo:''},]

  constructor(private api:ApiService,private router:Router){
    this.gettexto();
    

  }

  gettexto = () => {
    this.api.gettexto().subscribe(
      data=> {
        this.dados = data
      },
      error => {
        console.log("lascou fi")
      }
    )
  }

  novolink(){
    this.router.navigate(['novo-link'])

  }
  
}

