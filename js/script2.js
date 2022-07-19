"use strict";
// function sayHello(name) {
//   return "Hello," + name;
// }
// sayHello("Anton");
// console.log(sayHello("Anton"));

// function returnNeighboringNumbers(number) {
//   const arr = [number - 1, number, number + 1];
//   console.log(arr);
//   return arr;
// }
// returnNeighboringNumbers(5);

function getMathResult(num1, num2) {
  if (num2 > 1 && typeof num2 == "number") {
    let string = `${num1}`;
    for (let i = 2; i <= num2; i++) {
      string += `---${num1 * i}`;
    }
    console.log(string);
    return string;
  } else {
    console.log(num1);
    return num1;
  }
}

getMathResult(5, 3);

// let FilmDB = "My 3 favorite film its:";
// for (let i = 1; i <= 3; ++i) {
//   let Film = prompt(`enter your ${i} favorit film`);
//   FilmDB += `\n`;
//   FilmDB += Film;
// }
// alert(FilmDB);
// console.log(FilmDB);
// // getMathResult(5, 3);
// // console.log(getMathResult(5, 4));

// // returnNeighboringNumbers(5);

// function getMathResult(num, times) {
//   if (typeof times !== "number" || times <= 0) {
//     return num;
//   }

//   let str = "";

//   for (let i = 1; i <= times; i++) {
//     if (i === times) {
//       str += `${num * i}`;
//       // Тут без черточек в конце
//     } else {
//       str += `${num * i}---`;
//       // Это тоже самое, что и
//       // str = str + num * i + "---"
//     }
//   }
//   console.log(str);
//   return str;
// }

// getMathResult(10, ererw);

// const usd = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//   return curr * amount;
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// const res = convert(500, usd);
// promotion(res);

//                                           Lesson 28

const str = "te23";
const arr = [1, 3, 5, 6];

console.log(str.length);

let new1 = str.toUpperCase();
console.log(new1);

const logg = "Hello World";

console.log(logg.slice(6, 11));
console.log(logg.substring(5, 11));

console.log(logg);

//                                              LESSON 29

let numberofFilms;

function start() {
  numberofFilms = +prompt("How many film have you alredy watched ?", "");
  while (numberofFilms == "" || numberofFilms == null || isNaN(numberofFilms)) {
    numberofFilms = +prompt("How many film have you alredy watched ?", "");
  }
}

start();

const personalMovieDB = {
  count: numberofFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};
