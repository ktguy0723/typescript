// 1.インターセクション型（AかつB）
type Engineer = {
  name: string;
  role: string;
}
type Blogger = {
  name: string;
  follower: number;
}
type EngineerBlogger = Engineer & Blogger; // => {name: string, role: string, follower: number}
const keke: EngineerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 1000
}

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber; // => Mix: number

// 2.Type Guard 
// - 2-1 typeof
function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return x;
}
// - 2-2 in
function describeProfile(eb: EngineerBlogger) {
  if ('role' in eb) {
    console.log(eb.role);
  }
}
// - 2-3 instanceof (クラスの場合)
// if(pet instanceof Bird){ ... }　// 下記参照

// 3. タグ付きUnion型（デザインパターン）
class Dog {
  kind: 'dog' = 'dog' // タグ (kind部分はなんでもよい)
  speak() {
    console.log('bow-wow')
  }
}

class Bird {
  kind: 'bird' = 'bird' // タグ
  speak() {
    console.log('tweet-tweet')
  }
  fly() {
    console.log('fly');
  }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  // タグ付きUnion型
  switch (pet.kind) {
    case 'bird':
      pet.fly()
  }
  // instanceof
  if (pet instanceof Bird) {
    pet.fly()
  }
}

// 4. 型アサーションで手動で型を上書き（２つの方法がある）
const input1 = <HTMLInputElement>document.getElementById('input');    
const input2 = document.getElementById('input') as HTMLInputElement;  // jsxを使用する場合こちら、それ以外の場合はどちらでもOK

input1.value = 'input initial value';
input2.value = 'input initial value';

// 5. !(Non-null assertion operator)
// !をつけるとnullを除外することができる
const input3_1 = document.getElementById('input');  // HTMLElement | null (HTMLElement or null)
const input3_2 = document.getElementById('input')!; // HTMLElement 

// 6. インデックスシグネチャ
// ※ 使用する際、下記のような制約があるため、あまり使わないほうが良い
interface Designer {
  name: string;   // インデックスシグネチャの型に合わせる必要がある
  [index: string]: string;  // インデックスシグネチャ
}
const designer: Designer = {
  name: 'Quill',
  role: 'web' // string型ならなんでも追加できる。
}

// 7. 関数のオーバーロード
// ※ オーバーロードした際は最後の実装部分は呼ばれない。
function to_UpperCase(x: string): string;  // 関数のオーバーロード
function to_UpperCase(x: number): number;  // 関数のオーバーロード
function to_UpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return x;
}

console.log(to_UpperCase('string'));

// 8. Optional Chaining (?)
// a?.b: aがundefined, nullならundefined, そうでなければbを返す
interface DownloadedData {
  id: number;
  date: {
    time: number
  }
  user?: {
    name?: {
      first: string;
      last: string;
    }
  }
}
const downloadedData: DownloadedData = {
  id: 1,
  date: {
    time: 2,
  }
}
console.log(downloadedData.user?.name?.first);

// 9. Nullish Coalescing (??)
//    「a ?? 'b'」a が undefined, nullのときは'b'
//    ※ 「||」は空文字や0のときも右側が反映される。
const userData = downloadedData.user ?? 'no-user';

// 10. LookUp型
// メンバが持っている型にアクセスする
type id = DownloadedData["id"]              // number
type time = DownloadedData["date"]["time"]  // number

// 11. 関数型のオーバーロードはinterfaceで定義
interface TmpFunc {
  (x: string): number;
  (x: number): number;
}

const tmpFunc: TmpFunc = function (x: string | number) { return 0 };

// 12. レストパラメータ
// readonlyも付けられる
function advanceFn(...args: readonly[number, string, boolean?, ...number[]]) {
  // ...
}
advanceFn(1, "hello", true, 1,2,3); // true がないとそのあとの配列引数は渡せない
advanceFn(1, "hello");

//13. constアサーション（配列やオブジェクトを定数化するのに便利）
const array = [10, 20] as const // 型推論：const array: readonly [10, 20]
const peter = {
  name: 'Peter',
  age: 29
} as const // 型推論；const peter: {readonly name: "Peter"; readonly age: 29; }

// 14. 型のなかでtypeofを使う
type PeterType = typeof peter // 型；const peter: {readonly name: "Peter"; readonly age: 29; }

