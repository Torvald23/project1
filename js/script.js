"use strict";

// // // console.log(numberofFilms);
// // // numberofFilms = numberofFilms + 3;
// // // console.log(numberofFilms);

// // // const answer = [];

// // // answer[0] = prompt("How are you ", "");
// // // answer[1] = prompt("How old are you", "");
// // // answer[2] = prompt("When you 1-st visited Europe", "");
// // // document.write(answer);

// // // let iner = 10,
// // //   decr = 10;

// // // ++iner;
// // // --decr;

// // // console.log(++iner);
// // // console.log(iner--);
// // // console.log(iner);

// // // console.log(5 % 3);

// // // console.log(2 + 2 * 2 = 6);

// // // const isChecked = false,
// // //   isclose = false;
// // // console.log(isChecked || !isclose);

// // // (1-st stady program)

// const numberofFilms = +prompt("How many film have you alredy watched");
// const personalMovieDB = {
//   count: numberofFilms,
//   movies: {
//     //   call: {},
//     // },
//     actors: {},
//     genres: [],
//     private: false,
//   },
// };

// const a = prompt("Tell me one of the last movies you saw"),
//   b = prompt("what grade will you give him", ""),
//   c = prompt("Tell me one of the last movies you saw", ""),
//   d = prompt("what grade will you give him", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

// if ("rtrtr") {
//   console.log("ok");
// } else {
//   console.log("eror");
// }

// // const num = "good";
// // switch (num) {
// //   case 49:
// //     console.loge("Ni");
// //   case "googd":
// //     console.log("No again");
// //   case "googd":
// //     console.log("Excelent");
// //     break;
// //   case "gogod":
// //     console.log(" previos, No brake");
// //   default:
// //     console.log("no one detected");
// //     break;
// // }

// // console.log((5 === 5 && 3 > 1) || 5);

// // const bigmac = 3;
// // const fries = 3;
// // const cola = 0;
// // const nuggets = 1;

// // if ((bigmac === 3 && cola) || (fries === 3 && nuggets)) {
// //   console.log("done");
// // } else {
// //   console.log("we are leave");
// // }

// // let hamburger;
// // // hamburger = 30;
// // const fries = NaN;
// // const cola = 0;
// // const nuggets = null;

// // if (hamburger || cola || fries === 3 || nuggets) {
// //   console.log("Done!");
// // } else {
// //   console.log("fucing sheet");
// // }

// // let hamburger;
// // const fries = NaN;
// // const cola = 0;
// // const nuggets = 2;

// // if ((hamburger && cola) || (fries === 3 && nuggets)) {
// //   console.log("Done!");
// // }

// // let num = 50;

// // while (num <= 55) {
// //   console.log(num);
// //   num++;
// // }

// // let num = 50;
// // do {
// //   console.log(num);
// //   num++;
// // } while (num < 55);

// // let num = 50;
// // for (let i = 1; i < 8; i++) {
// //   if (i === 6) {
// //     break;
// //   }

// //   console.log(i);
// //   num++;
// // }

// // for (let i = 0; 1 < 3; 1++) {
// //   console.log(i);
// //   for (let j = 0; j < 3; j++) {
// //     console.log(j);
// //   }

// // }

// // let i;
// // let result = "";

// // const leght = 7;
// // for (let i = 1; i < leght; i++) {
// //   for (let j = 1; j < i; j++) {
// //      result += i;
// //   }
// //   result += "\n ";
// //   console.log(result,);
// //   i = i;
// // }

// // console.log( i );

// // // let i, j;

// // loop1:
// // for (i = 0; i < 3; i++) {      //Первый цикл, обозначенный меткой "loop1"
// //    loop2:
// //    for (j = 0; j < 3; j++) {   //Второй цикл, обозначенный меткой "loop2"
// //       if (i === 1 && j === 1) {
// //          continue loop1;
// //       }
// //      console.log('i = ', i,  i+j , ', j=  ' + j);
// //    }
// // }

//                                                                           // EXERCISE 3

// // let num = 5;

// // while (num <= 10) {
// //   console.log(num);
// //   num++;
// // }

// // let i;
// // for (i = 2; i < 11; i++) {
// //   console.log(i);
// // }

// for (let i = 20; i >= 10; --i) {
//   console.log(i);
//   if (i === 13)
//     break;

//   }

//     for (let i = 20; i >= 10; i--) {
//         if (i === 13) break;
//         console.log(i)
//     }

// for (let i = 0; i < 10; i++) {
//   if (i % 2) {
//     console.log(i + 1);
//   }
// }

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// let i = 2;
// while (i <= 16) {
//   if (i % 2) {
//     console.log(i);
//   }
//   i++;
// }

// const arr1 = [5, 6, 7, 8, 9, 10];
// console.log(arr1);

// let arr2 = [];
// arr2 {

// }

//    const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);

// // arrayOfNumbers[0] = 5;
// // arrayOfNumbers[1] = 6;
// // arrayOfNumbers[2] = 7;
// // arrayOfNumbers[3] = 8;
// // arrayOfNumbers[4] = 9;
// // arrayOfNumbers[5] = 10;

// const arrayOfNumbers = [];
// let i = 5;
// while (i !== 11 ) {
//   arrayOfNumbers[i-5] = i;
//   i++;
//  }
// console.log(arrayOfNumbers);

//                                                           // EXERCISE 4

//                                      First                   //
//  const arr = [3, 5, 8, 16, 20, 23, 50];
//  const result = [];
// let j = arr.length;
// let i = 0;
// while (i < j) {
//   result[i] = arr[i];
//   i++;
// }
// console.log(arr);

// // Second
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// let i = 0;
// // console.log(typeof (data[i]))

// while (i <= data.length) {
//   if (typeof (data[i]) === 'number') {

//     data[i] = data[i] * 2;
//   }
//   else if (typeof (data[i]) === 'string') {
//     data[i] = data[i] + ' - done';
//   }
//     i++;

// }
//   console.log(data);

//                                             third

//  const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

// let j = data.length -1;
// for ( let i = 0; j >= 0; i++) {
//   result[j] = data[i];
//   --j;
// }
// console.log(result);

//  const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result);
//     return result;
// }

// condition ? val1 : val2
//    val1 и val2 обязательно должны что-то возвращать, поэтому в этой конструкции нельзя использовать continue или break

// Если condition(условие) - истина, то оператор принимает значение val1.В противном случае оператор принимает значение val2.
//  Вы можете использовать условный оператор во всех случаях, где может быть использован стандартный оператор.

// let age = 2;
// let status1 = (age >= 18) ? "adult" : "minor";
//  console.log(status1 );

//                                                                      Christmas Tree

// const lines = 6;
// let result = "";
// let star = "*";

// for (let j = lines; j >= 0; j--) {
//   for (let i = 0; j > i; i++) {
//     result += " ";
//   }

//   result = result + star;

//   for (let i = 0; 2 > i; i++) {
//     star += "*";
//   }
//   result += "\n";
// }

// console.log(result);

// first work

// let numberofFilms;

// // let i = 0;
// // while (i < 2) {
// //   const a = prompt("Tell me one of the last movies you saw", ""),
// //     b = prompt("what grade will you give him", "");

// //   if (
// //     a != null &&
// //     b != null &&
// //     a != "" &&
// //     b != "" &&
// //     a.length < 50 &&
// //     b.length < 50
// //   ) {
// //     personalMovieDB.movies[a] = b;
// //     console.log("done");
// //   } else {
// //     console.log("error");
// //     i--;
// //   }
// //   i++;
// // }

// // let i = 0;
// // do {
// //   const a = prompt("Tell me one of the last movies you saw", ""),
// //     b = prompt("what grade will you give him", "");

// //   if (
// //     a != null &&
// //     b != null &&
// //     a != "" &&
// //     b != "" &&
// //     a.length < 50 &&
// //     b.length < 50
// //   ) {
// //     personalMovieDB.movies[a] = b;
// //     console.log("done");
// //   } else {
// //     console.log("error");
// //     i--;
// //   }
// //   i++;
// // } while (i < 2);

// // function convert(curency) {
// //   alert(28 * curency);
// }
// convert(prompt("Enter how many dolars you want to change?", ""));

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

function remembermyfilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Tell me one of the last movies you saw", ""),
      b = prompt("what grade will you give him", "");

    if (
      a != null &&
      b != null &&
      a != "" &&
      b != "" &&
      a.length < 50 &&
      b.length < 50
    ) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}
// remembermyfilms();

function detectpersonallevel() {
  if (personalMovieDB.count < 10) {
    console.log("You watched too less film");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are good watcher");
  } else if (personalMovieDB.count >= 30) {
    console.log("you are cinephile");
  } else {
    console.log("error");
  }
}
// detectpersonallevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.private);

function writeYouGenres() {
  for (let i = 1; i < 4; i++) {
    personalMovieDB.genres[i - 1] = prompt(`You favorit genres #${i} `, "");
  }
}
writeYouGenres();
console.log(genres);

const options = {
  name: "test",
  width: 4,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  // makeTest: function () {
  //   console.log("Test");
  // },
};

// options.makeTest();

const { name, height, width } = options;

console.log(name);
// console.log(Object.keys(options.colors).length);

// console.log(options.colors.border);

// перебор свойств внутри об'екта

for (let k in options) {
  if (typeof options[k] === "object") {
    for (let i in options[k]) {
      console.log(`Властивість ${i} має значення ${options[k][i]} `);
    }
  } else {
    console.log(`Свойство ${k} имеет значение ${options[k]}`);
  }
}
