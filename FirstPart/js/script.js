"use strict";
const numberOfFilm = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

for(let i = 0; i < 2; ++i){
    const a = prompt('Один из последних просмотренных фильмов?', '');
    const b = prompt('На сколько оцените его?', '');

    if (a != null &&  b != null &&  a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
    }else {
        --i;
    }
}

if (personalMovieDB.count < 10){
    console.log('Маловато смотрим -_-');
}else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Нормально так');
}else if (personalMovieDB.count <= 30){
    console.log('Да у нас тут киноман!!!');
}else{
    console.log('ОШИБКА');
}

console.log(personalMovieDB);