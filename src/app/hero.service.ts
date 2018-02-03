import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';

// 1. 등록 : 앵귤러 컨테이너에 등록, 등록시점은 providers가 결정한다.
// 앵귤러는 클라이언트에서 구동되기 때문에 메모리 제약이 있음.
@Injectable()
export class HeroService {

  constructor() { }

  // method(): return Type {...}
  // Observable객체 타입이 Hero[]배열 타입이다.
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
