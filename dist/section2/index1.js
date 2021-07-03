"use strict";
// boolean
let isVal = true;
// number
let cnt = 10;
let float = 3.14;
// string
let single = 'test';
// 型推論 : 基本これつかう
let double = "string型";
// 型注釈 : 関数
function func(val) {
    return val + val;
}
// オブジェクトの型（型注釈）
const person = {
    name: 'Jack',
    age: 21
};
// 配列（型注釈）
const fruits = ["apple", "banana"];
// Tuple型（明示的に型注釈する必要あり）
const book = ["business", 1500, false];
// Enum 列挙型
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["S"] = 0] = "S";
    CoffeeSize[CoffeeSize["T"] = 1] = "T";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.T
};
// any型 なるべく使わない（）
let anything = [1, "h"];
// Union型 (A or B => A | B)
let unionType = "test";
let unionTypes = [1, "second"];
// Literal型
const apple = "apple";
let clothSize = 'small';
let cSize = 'small';
// 関数
function add(num1, num2) {
    return num1 + num2;
}
add(1, 2);
function hello1() {
    console.log('hello');
}
// 関数の型
const anotherAdd = add;
const anotherAdd2 = function (n1, n2) {
    return n1 + n2;
};
// callback
function doubleAndHandle(num, cb) {
    const doubleNumber = cb(num * 2);
    console.log(doubleNumber * 2);
}
doubleAndHandle(21, doubleNum => doubleNum);
// unknown（anyより少し厳しい型）
let unknownInput;
unknownInput = 21;
let text; // text = unknownInput; ←これはエラー
if (typeof unknownInput === "number") {
    text = unknownInput;
}
// never(何も返さない)
function error(msg) {
    throw new Error(msg);
}
