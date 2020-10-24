"use strict";
/*let number = 4.6;
console.log(4/0);

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};
console.log(obj["name"]);
document.write(answers); */
const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?' , '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a=prompt('Один из последних просмотренных фильмов?', ''),
      b=prompt('На сколько оцените его?', ''),
      c=prompt('Один из последних просмотренных фильмов?', ''),
      d=prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
