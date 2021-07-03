class Person {
  // fields
  static species = 'Homo sapiens';  // static
  name: string;                     // = public name: string;
  protected readonly age: number;   // protected このクラス＋継承先のクラスのみアクセス可能
  // private readonly age: number;  // private field, readonly(単一クラス内でも書換禁止)
  
  // constructor
  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }

  // 上の初期化は以下のように省略できる
  // constructor(protected readonly name: string, private age: number) {}

  //methods
  public greeting(this: Person) {
    console.log(`I'm ${this.name}. ${this.age} years old.`);
  }
}

// 継承
class Teacher extends Person {
  constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }

  // getter es5以上
  get subject() {
    if (!this._subject) {
      throw new Error();
    }
    return this._subject;
  }
  // setter es5以上
  set subject(value) {
    this._subject = value;
  }

  public greeting(this: Teacher) {
    console.log(`I'm ${this.name}. ${this.age} years old. I teach ${this.subject}.`)
  }
}

// インスタンスの生成 + メソッドの実行
const quill = new Person('Quill', 38);
quill.greeting();

console.log(Person.species);

const teacher = new Teacher('Quill', 38, 'Math');
teacher.subject = 'Music';
teacher.greeting();

/********************************************************************* 
 * abstract class
 * インスタンスを作れない
 **********************************************************************/
abstract class A {
  abstract a():void;
}
class B extends A {
  // abstract を必ず実装する
  a() {
    console.log('hoge');
  }
}

const b = new B();
b.a();

/**************************************************************************
 * singleton
 **************************************************************************/
class Singleton {
  private static instance: Singleton;
  private constructor(private value: number) {}
  static getInstance(val:number) {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = new Singleton(val)
    return Singleton.instance;
  }
  public echoVal() {
    return console.log(this.value);
  }
}
const singleton1 = Singleton.getInstance(1);
const singleton2 = Singleton.getInstance(1);
singleton1.echoVal();
singleton2.echoVal();