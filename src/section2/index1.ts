// boolean
let isVal: boolean = true;

// number
let cnt: number = 10;
let float: number = 3.14;

// string
let single: string = 'test';

// 型推論 : 基本これつかう
let double = "string型"

// 型注釈 : 関数
function func(val: string): string {
  return val + val;
}

// オブジェクトの型（型注釈）
const person: {
  name: string,
  age: number,
} = {
  name: 'Jack',
  age: 21
};

// 配列（型注釈）
const fruits: string[] = ["apple", "banana"];

// Tuple型（明示的に型注釈する必要あり）
const book: [string, number, boolean] = ["business", 1500, false];

// Enum 列挙型
enum CoffeeSize {
  S,T,
}

const coffee = {
  hot: true,
  size: CoffeeSize.T
}

// any型 なるべく使わない（）
let anything: any = [1, "h"];

// Union型 (A or B => A | B)
let unionType: number | string = "test";
let unionTypes: (number | string)[] = [1, "second"]

// Literal型
const apple = "apple";
let clothSize: 'small' | 'large' = 'small';

// type alias
type ClothSize2 = 'small' | 'large';
let cSize: ClothSize2 = 'small';

// 関数
function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(1, 2);

function hello1(): void{
  console.log('hello');
}

// 関数の型
const anotherAdd: (n1: number, n2: number) => number = add;
const anotherAdd2 = function (n1: number, n2: number): number {
  return n1 + n2;
}

// callback
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNumber = cb(num*2)
  console.log(doubleNumber * 2);
}

doubleAndHandle(21, doubleNum => doubleNum);

// unknown（anyより少し厳しい型）
let unknownInput: unknown;
unknownInput = 21
let text: number // text = unknownInput; ←これはエラー
if (typeof unknownInput === "number") {
  text = unknownInput;
}

// never(何も返さない)
function error(msg: string): never {
  throw new Error(msg);
}
