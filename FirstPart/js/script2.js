"use strict";

//Создаем объект
const option = {
    name: 'test',
    width: 1024,
    hight: 1024,
    colors:{
        border: 'black',
        bg: 'red'
    }
};

// Пример callback функции - вызов функции после исполнения другого кода.
function learnLang(lang, callback){
    console.log(`я знаю ${lang}`);
    callback();
}

learnLang('Французкий', function(){
    console.log('и я его знаю!');
});

// копии(не глубокии) массивов и объектов
let obj = {
    a: 1,
    b: 2
}
let objNew = Object.assign({}, obj);
let {a, b} = obj;
console.log(a + ' ' + b);


let arr = [1, 2, 3, 4];
let arrNew = arr.slice();


const vidio = ['youtube', 'rutube', 'vimeo'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...vidio, ...blogs, 'INTER'];

console.log(internet);

function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
let num = [2, 4, 5, 7];
log(...num);


let test = 1;
let test2 = [] + 1 + 2;
console.log(test2);