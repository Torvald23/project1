// Метод Number.isInteger() определяет, является ли переданное значение целым числом.
// Возвращаемое значение
// Boolean сообщающий о том, является ли переданное значение целочисленным числом.
// function fits(x, y) {
//   if (Number.isInteger(y / x)) {
//     return 'Fits!';
//   }
//   return 'Does NOT fit!';
// }

// console.log(fits(5, 10));
// // expected output: "Fits!"

// console.log(fits(5, 11));
// // expected output: "Does NOT fit!"

function calculateVolumeAndArea(a) {
  if (typeof a !== "number" || a < 0 || !Number.isInteger(a)) {
    console.log(typeof a);
    return "При вычислении произошла ошибка";
  } else {
    let V = a * a * a;
    let S = 6 * a * a;

    return `Объем куба: ${V}, площадь всей поверхности: ${S}`;
  }
}

console.log(calculateVolumeAndArea("ruey"));

function getCoupeNumber(seat) {
  if (seat === 0 || seat > 36) {
    return "Таких мест в вагоне не существует";
  }
  if (seat < 0 || typeof seat !== "number" || !Number.isInteger(seat)) {
    return "Ошибка. Проверьте правильность введенного номера места";
  } else {
    return Math.ceil(seat / 4);
  }
  //  альтернативне рішення без використання методу Мath.ceil()
  // for (let i = 4; i <= 36; i = i + 4) {
  //     if (seat <= i) {
  //       return i / 4;
  //     }
  //   }
}

// getCoupeNumber(5);
console.log(getCoupeNumber(10 / 3));
