"use strict";
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    geners: [],
    privat: false,
    start: function () {
        personalMovieDB.count = prompt('Сколько фильмов вы посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы посмотрели?', '');
        }
    },
    rememberFilms: function () {
        for (let i = 0; i < 2; ++i) {
            const a = prompt('Один из последних просмотренных фильмов?', '');
            const b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                --i;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Маловато смотрим -_-');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Нормально так');
        } else if (personalMovieDB.count <= 30) {
            console.log('Да у нас тут киноман!!!');
        } else {
            console.log('ОШИБКА');
        }
    },
    showDb: function (hidden) {
        if (!hidden) {
            if (!personalMovieDB.privat) {
                console.log(personalMovieDB);
            }
        }
    },
    writeYourGenres: () => {
        let i = 0;
        while (i < 3) {
            let gener = prompt(`Ваш любимый жанр под номером ${++i}?`).toLocaleLowerCase();
            if (gener === '' || gener == null){
                console.log('Вы ввели не правильные данные');
                --i;
            }else{
                personalMovieDB.geners[i] = gener;
            }
        }
        personalMovieDB.geners.forEach((item, i) => {
            console.log(`Любимый жанр ${i} - это ${item}`);
        });
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    }
};