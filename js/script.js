"use strict";

const numberofFilms = +prompt("How many film have you alredy watched", "");
// console.log(numberofFilms);
// numberofFilms = numberofFilms + 3;
// console.log(numberofFilms);

// const answer = [];

// answer[0] = prompt("How are you ", "");
// answer[1] = prompt("How old are you", "");
// answer[2] = prompt("When you 1-st visited Europe", "");
// document.write(answer);

const personalMovieDB = {
  count: numberofFilms,
  movies: {
    //   call: {},
    // },
    actors: {},
    genres: [],
    private: false,
  },
};
const a = prompt("Tell me one of the last movies you saw", ""),
  b = prompt("what grade will you give him", ""),
  c = prompt("Tell me one of the last movies you saw", ""),
  d = prompt("what grade will you give him", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

// let iner = 10,
//   decr = 10;

// ++iner;
// --decr;

// console.log(++iner);
// console.log(iner--);
// console.log(iner);

// console.log(5 % 3);

// console.log(2 + 2 * 2 = 6);

// const isChecked = false,
//   isclose = false;
// console.log(isChecked || !isclose);
