import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // es5,6 에선 var를 써야하지만 여기서는 안써도 된다. typeScript는 선언 안해도됨.
  // hero: string = 'Windstorm' 안해도 되는 이유는 싱클 마크가 있기 때문.
  hero = 'Windstorm';     // = public hero = 'Windstorm

  // literal객체 생성 방법
  hero2: Hero = {
    id: 1,
    name: 'Win Storm'
  };

  // new 생성 방법
  // 1. 타입만 선언 후
   hero3: Hero;
  // 2. 생성자에서 만듬 hero.ts에서 생성자 부분으로 가보자
  /*
  es5문법은 너무 길어지니까 아래처럼 한줄로 만들자.
  constructor() {
    this.hero3 = new Hero();
    this.hero3.id = 2;
    this.hero3.name = 'Win Storm';
  }*/

  hero4 = HEROES;   // =hero4: Hero[];
  selectedHero: Hero;

  hero5: Hero[];

  // 로컬변수니까 public을 써서 다른 기능에도 바로 쓸 수 있도록 한다.
  // 2. 주입 : 생성자로 서비스를 주입한다. (히어로즈를 생성할때 heroService를 바로 주입한다.)
  constructor(public heroService: HeroService) {
    this.hero3 = new Hero(2, 'Win Storm');
    this.hero4 = HEROES;
  }

  // 페이지 초기화될 때
  ngOnInit() {
    this.hero5 = this.heroService.getHeroes();
  }

  // method
  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }
}
