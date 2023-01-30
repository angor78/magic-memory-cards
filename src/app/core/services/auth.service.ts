import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface ResponseSignInType {
  _id: string
  email: string
  rememberMe: boolean
  isAdmin: boolean
  name: string
  verified: boolean
  publicCardPacksCount: number
  created: string
  updated: string
  __v: number
  token: string
  tokenDeathTime: number
  avatar: string
}

export interface SignInParamsType {
  email: string
  password: string
  rememberMe: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  isAuth = false

  // autMe() {
  //   return this.http
  //     .post<ResponseSignInType>(`${environment.baseUrl}auth/me`).subscribe(res=>{
  //       //if(res.resultCode===0)this.isAuth=true
  //     })
  // }
}
