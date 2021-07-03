"use strict";
var _a, _b, _c;
const keke = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
};
// 2.Type Guard 
// - 2-1 typeof
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
// - 2-2 in
function describeProfile(eb) {
    if ('role' in eb) {
        console.log(eb.role);
    }
}
// - 2-3 instanceof (クラスの場合)
// if(pet instanceof Bird){ ... }　// 下記参照
// 3. タグ付きUnion型（デザインパターン）
class Dog {
    constructor() {
        this.kind = 'dog'; // タグ (kind部分はなんでもよい)
    }
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    constructor() {
        this.kind = 'bird'; // タグ
    }
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('fly');
    }
}
function havePet(pet) {
    pet.speak();
    // タグ付きUnion型
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
    // instanceof
    if (pet instanceof Bird) {
        pet.fly();
    }
}
// 4. 型アサーションで手動で型を上書き（２つの方法がある）
const input1 = document.getElementById('input');
const input2 = document.getElementById('input'); // jsxを使用する場合こちら、それ以外の場合はどちらでもOK
input1.value = 'input initial value';
input2.value = 'input initial value';
// 5. !(Non-null assertion operator)
// !をつけるとnullを除外することができる
const input3_1 = document.getElementById('input'); // HTMLElement | null (HTMLElement or null)
const input3_2 = document.getElementById('input'); // HTMLElement 
const designer = {
    name: 'Quill',
    role: 'web' // string型ならなんでも追加できる。
};
function to_UpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
console.log(to_UpperCase('string'));
const downloadedData = {
    id: 1,
    date: {
        time: 2,
    }
};
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
// 9. Nullish Coalescing (??)
//    「a ?? 'b'」a が undefined, nullのときは'b'
//    ※ 「||」は空文字や0のときも右側が反映される。
const userData = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : 'no-user';
const tmpFunc = function (x) { return 0; };
// 12. レストパラメータ
// readonlyも付けられる
function advanceFn(...args) {
    // ...
}
advanceFn(1, "hello", true, 1, 2, 3); // true がないとそのあとの配列引数は渡せない
advanceFn(1, "hello");
//13. constアサーション（配列やオブジェクトを定数化するのに便利）
const array = [10, 20]; // 型推論：const array: readonly [10, 20]
const peter = {
    name: 'Peter',
    age: 29
}; // 型推論；const peter: {readonly name: "Peter"; readonly age: 29; }
