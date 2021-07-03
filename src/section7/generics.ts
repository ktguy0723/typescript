// generics = 型の引数
function copy<T>(value: T): T{
  return value
}
console.log(copy<string>("hello"));
console.log(copy({ name: 'Quill' })); // 型推論もできる！


// extends で代入できる型に制約をつける
function copy2<T extends { name: string }>(value: T): T {
  return value;
}
console.log(copy({ name: 'Ktguy' }));


// keyof オブジェクトの型をUnion型にする
// U extends keyof K の形でよく使われる
type K = keyof { name: string; age: number };


// Classでgenericsを使う場合
class LightDatabase<T extends string|number|boolean> {
  private data: T[] = []
}
const ins = new LightDatabase<string>();


// Interfaceでgenericsを使う場合
interface TmpDatabase<T> {
  data: T[];
}
const tmpDatabase: TmpDatabase<string> = {
  data: ["1", "hello"],
}