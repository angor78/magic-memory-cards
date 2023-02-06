import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {__values} from "tslib";

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {
  isLoading$=new BehaviorSubject<boolean>(false)

  constructor() {
  }

  setPreloader(isLoading: boolean) {
    this.isLoading$.next(isLoading)
  }
}
