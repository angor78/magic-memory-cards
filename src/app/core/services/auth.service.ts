import {Injectable} from '@angular/core'
import {environment} from '../../../environments/environment'
import {CommonResponse} from '../models/core.models'
import {ResultCodeEnum} from '../enums/resultCode.enum'
import {Router} from '@angular/router'
import {MeResponse, ResponseSignIn} from '../models/auth.models'
import {BehaviorSubject, catchError, EMPTY} from 'rxjs'
import {NotificationService} from "./notification.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ModalService} from "../../shared/services/modal.service";
import {PreloaderService} from "../../shared/services/preloader.service";


@Injectable({providedIn: 'root'})
export class AuthService {

  isAuth = false
  profileData$ = new BehaviorSubject<ResponseSignIn>({
    _id: '',
    email: '',
    rememberMe: false,
    isAdmin: false,
    name: '',
    verified: false,
    publicCardPacksCount: 0,
    created: '',
    updated: '',
    __v: 0,
    token: '',
    tokenDeathTime: 0,
    avatar: '',
  })

  resolveAuthRequest: Function = () => {
  }
  authRequest = new Promise(resolve => {
    this.resolveAuthRequest = resolve
  })

  constructor(
    private http: HttpClient,
    private router: Router,
    private notificationService: NotificationService,
    private modalService: ModalService,
    private preloaderService: PreloaderService
  ) {
  }

  login(data: Partial<any>) {
    this.preloaderService.setPreloader(true)
    this.http
      .post<ResponseSignIn>(`${environment.baseUrl}/auth/login`, data)
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe((res) => {
        if (res) {
          this.preloaderService.setPreloader(false)
          this.profileData$.next(res)
          this.modalService.close('login')
          this.modalService.open('profile')
        } else {
          // this.notificationService.handleError(res.messages[0])
        }
      })

  }

  logout() {
    this.preloaderService.setPreloader(true)
    this.http
      .delete<CommonResponse>(`${environment.baseUrl}/auth/me`, {})
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe(res => {
        if (res) {
          this.preloaderService.setPreloader(false)
          this.modalService.close('profile')
          this.modalService.open('login')
        }
      })
  }

  me() {
    this.http
      .post<CommonResponse<MeResponse>>(`${environment.baseUrl}/auth/me`, {})
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe(res => {
        if (res.resultCode == ResultCodeEnum.success) {
          this.isAuth = true
        }
        this.resolveAuthRequest()
      })
  }

  private errorHandler(err: HttpErrorResponse) {
    this.notificationService.handleError(err.message)
    return EMPTY
  }
}

function providedIn(providedIn: any, arg1: string) {
  throw new Error('Function not implemented.')
}

