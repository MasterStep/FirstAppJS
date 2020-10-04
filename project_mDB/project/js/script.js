/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ]
    };

    const promoAdv = document.querySelectorAll('.promo__adv img'),
        promoBg = document.querySelector('.promo__bg'),
        promoGenre = promoBg.querySelector('.promo__genre'),
        promoInteractiveList = document.querySelector('.promo__interactive-list'),
        formAddFilms = document.querySelector('form.add'),
        formInputName = formAddFilms.querySelector('.adding__input'),
        formInputCheckbox = formAddFilms.querySelector('[type="checkbox"]');

    const deletePromoAdv = (arg) => {
        arg.forEach(e => {
            e.remove();
        });
    };

    function changeWindow() {
        promoGenre.textContent = 'драма';

        promoBg.style.backgroundImage = 'url("img/bg.jpg")';
    }

    function sortArray(array) {
        array.sort();
    }

    function createMoviesList(films, parent) {
        parent.innerHTML = '';

        sortArray(movieDB.movies);

        films.forEach((item, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} - ${item}
                <div class="delete"></div>
            </li>
        `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMoviesList(films, parent);
            });
        });
    }

    function eventAddMovie(eventFroms) {
        eventFroms.preventDefault();

        let newFilm = formInputName.value;
        const favorite = formInputCheckbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if(favorite){
                console.log('Любимка!');
            }
            movieDB.movies.push(newFilm);

            sortArray(movieDB.movies);
            createMoviesList(movieDB.movies, promoInteractiveList);

            eventFroms.target.reset();
        }
    }

    deletePromoAdv(promoAdv);
    changeWindow();
    createMoviesList(movieDB.movies, promoInteractiveList);
    formAddFilms.addEventListener('submit', (eventFroms) => eventAddMovie(eventFroms), false);

});