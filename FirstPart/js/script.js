"use strict";
const numberOfFilm = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);