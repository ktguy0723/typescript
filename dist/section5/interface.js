"use strict";
// interface: オブジェクトのみの type alias(データ型に別名をつけることができる)
// type との違いは、interfaceはオブジェクトのみを扱うこと
// implements : interfaceを使用するクラス
class Developer {
    constructor(name, age, rank) {
        this.name = name;
        this.age = age;
        this.rank = rank;
    }
    greeting(message = "Hello") {
        console.log(message);
    }
}
const user = new Developer('Quill', 38, 3);
const user2 = new Developer('Quill', 38); // rankは?なのであってもなくてもよい
user.greeting("GoodMorning"); // => GoodMorning
user.greeting(); // => Hello
const human = {
    name: "Quill",
    age: 12,
    greeting(message) {
        console.log(message);
    }
};
