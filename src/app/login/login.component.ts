import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg : string=""; 
  usuario : Usuario = new Usuario();
  usuarios : Usuario []=[];

  constructor (private service : UsuarioService) { 
  }

  ngOnInit() {
    this.listar();
  }

  public cadastrar(){
    this.service.register(this.usuario).subscribe(res =>{
      if( res==null){
        console.log("Erro na Gravacao")
      }
      console.log("Gravou");
      this.msg= "Dados Gravados" + res;
      this.usuario = new Usuario();
      this.listar();
    },error=>{
      console.log("Não Gravou", error);
      this.msg= "Erro na Gravacao" + error;
    });
  }

  public listar(){
    this.service.listAll().subscribe(res =>{
      this.usuarios = res;
    });
  }
}