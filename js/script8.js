"use strict";

function getTimeFromMinutes(minute) {
  if (typeof minute !== "number" || minute < 0 || !Number.isInteger(minute)) {
    return "Ошибка, проверьте данные";
  }

  if (minute < 60) {
    return `Это 0 часов и ${minute} минут`;
  }
  if (minute < 120) {
    let hours = parseInt(minute / 60);
    return `Это ${hours} час и ${minute - hours * 60} минут`;
  }
  if (minute >= 120) {
    let hours = parseInt(minute / 60);
    if (hours < 5) {
      return `Это ${hours} часа и ${minute - hours * 60} минут `;
    }
    if (hours > 5) {
      return `Это ${hours} часов и ${minute - hours * 60} минут `;
    }
  }
}

getTimeFromMinutes(500);
console.log(getTimeFromMinutes(12));

function findMaxNumber(a, b, c, d) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof c !== "number" ||
    typeof d !== "number"
  ) {
    return 0;
  } else {
    return Math.max(a, b, c, d);
  }
}
findMaxNumber(2, 6, 12, 30);

console.log(findMaxNumber(11, 6, 12, 30));
