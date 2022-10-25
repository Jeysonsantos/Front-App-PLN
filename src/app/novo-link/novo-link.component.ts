import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-novo-link',
  templateUrl: './novo-link.component.html',
  styleUrls: ['./novo-link.component.css']
})
export class NovoLinkComponent implements OnInit {
  texto = {id:1,link:'',resumo:''};
  public myForm: FormGroup;
  resumo = ''
  

  constructor(private api:ApiService, 
    private router:Router, 
    private appcomponent:AppComponent,
    private formBuilder: FormBuilder
    ) {
      this.myForm = formBuilder.group({
        url: ['', [Validators.required, Validators.pattern('(http(s?)://)([\\da-z.-]+)\\.([(a-z).]{2,6})[/\\w .-]*/?')]]
      })
    }

  ngOnInit(): void {
  }
  
  salvar(){
    this.api.salvarlink(this.texto).subscribe(
      (data:any) => {
        console.log(data)
        this.resumo = data['resumo']
      },
      error => {
        alert("Link inválido")
      }
    )
  }
  voltar(){
    this.resumo=''
    this.router.navigate([''])
  }
  get m(){
    return this.myForm.controls;
  }
  onSubmit(){
    console.log(this.myForm.value);
  }

}