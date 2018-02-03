export class Hero {
  /**
   * id;
   * name;
   * 아래는 typeScript 문법
   */

  // es6문법. 생성자의 매개변수에 public을 선언해주어 인스턴스를 만들어주는 typescript문법이 되었기 때문에 전역변수 할당 필요없다.
  // id: number;
  // name: string;

  constructor(public id: number, public name: string) {
    this.id = id;
    this.name = name;
  }

}
