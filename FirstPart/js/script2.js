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