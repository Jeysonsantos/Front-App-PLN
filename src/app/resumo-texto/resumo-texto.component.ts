import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-resumo-texto',
  templateUrl: './resumo-texto.component.html',
  styleUrls: ['./resumo-texto.component.css']
})
export class ResumoTextoComponent implements OnInit {
  texto_selecionado={id:0,link:'',resumo:''}
  dados=[{id:1,link:'',resumo:'',resumo1:''},]
  constructor(private route:ActivatedRoute,private api:ApiService,private router:Router,private appcomponent:AppComponent) { }
  id_selecionado=0;
  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id')!);
      this.gettexto();
    })
  }
  voltar(){
    this.router.navigate(['novo-link'])
  }
  gettexto = () => {
    this.api.gettexto().subscribe(
      data=> {
        this.dados = data
      },
      error => {
        console.log("lascou fi2")
      }
    )
  }
}
