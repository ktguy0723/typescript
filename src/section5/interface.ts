// interface: オブジェクトのみの type alias(データ型に別名をつけることができる)
// type との違いは、interfaceはオブジェクトのみを扱うこと

interface Nameable {
  name: string;
  nickname?: string; // プロパティやパラメータに？をつけると、使用する際にあってもなくてもよい
}

// interfaceの継承
interface Human extends Nameable {
  age: number;
  
  //  関数の型注釈
  greeting(message?: string): void;
}

// implements : interfaceを使用するクラス
class Developer implements Human{
  constructor(public name: string, public age: number, public rank?: number) { }
  greeting(message: string = "Hello") { // messageでなにも渡されない場合 "Hello"が初期値となる
    console.log(message);
  }
}

const user: Human = new Developer('Quill', 38, 3);
const user2: Human = new Developer('Quill', 38); // rankは?なのであってもなくてもよい
user.greeting("GoodMorning"); // => GoodMorning
user.greeting();              // => Hello

const human: Human = {
  name: "Quill",
  age: 12,
  greeting(message: string) {
    console.log(message);
  }
}
