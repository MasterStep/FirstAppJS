"use strict";
let numberOfFilm;

function start(){
    numberOfFilm = prompt('Сколько фильмов вы посмотрели?', '');

    while (numberOfFilm  == '' || numberOfFilm == null || isNaN(numberOfFilm)){
        numberOfFilm = prompt('Сколько фильмов вы посмотрели?', '');
    }
}
const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

function rememberFilms(){
    for(let i = 0; i < 2; ++i){
        const a = prompt('Один из последних просмотренных фильмов?', '');
        const b = prompt('На сколько оцените его?', '');
    
        if (a != null &&  b != null &&  a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
        }else {
            --i;
        }
    }
}
rememberFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log('Маловато смотрим -_-');
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Нормально так');
    }else if (personalMovieDB.count <= 30){
        console.log('Да у нас тут киноман!!!');
    }else{
        console.log('ОШИБКА');
    }
}
detectPersonalLevel();

function showDb(){
    if (!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}
showDb();

function writeYourGenres(){
    let i = 0;
    while(i < 3){
        const gener = prompt(`Ваш любимый жанр под номером ${++i}?`);
        personalMovieDB.geners[i - 1] = gener;
    }
}
writeYourGenres();

