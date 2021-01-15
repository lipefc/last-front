import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../model/usuario";
import { Observable } from "rxjs";

export const URLREGISTER="http://localhost:1237/api/register";
const URLLOGAR="http://localhost:1237/api/login";
const URLLISTAR="http://localhost:1237/api/listall";

@Injectable()
export class UsuarioService{

    constructor (private http: HttpClient){
    }

    public register (usuario: Usuario): Observable<any>{
        return this.http.post<any>(`${URLREGISTER}`, usuario);
    }

    public login (usuario: Usuario): Observable<any>{
        return this.http.post<any>(`${URLLOGAR}`, usuario);
    }

    public listAll():Observable<Usuario[]>{
        return this.http.get<Usuario[]>(`${URLLISTAR}`)
    }
}