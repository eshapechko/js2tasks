// Задание 1
// Перепишите код с использованием тернарного оператора

// let country = 'Sweden';
// let access;
// if (country == 'Sweden') {
// access = true;
// } else{
// access = false;
// }
// task solution
let country = "Sweden";
let access = country == "Sweden" ? true : false;

// Задание 2

// Создать переменную и записать в нее число, например 10.

// 10 раз увеличить значение этой переменной на 1. Результат (1 шт.) вывести в консоль.
// task solution
let number1 = 10;
for (let i = 0; i < 10; i = i + 1) {
  result = number1 + i;
}
console.log(result);

// Задание 3

// Увеличивая счетчик цикла на 2, нужно 5 раз:

// - запрашивать у пользователя ввод числа

// - проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"

// task solution

for (let i = 0; i < 10; i = i + 2) {
  let getNumber = +prompt("Введите число");
  console.log((getNumber = getNumber == 10 ? "Равно 10" : "Не равно 10"));
}
7;
// Задание 4

// Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
// * Задавать количество чисел, которые нужно вывести, при помощи функции prompt.

// const count = +prompt("Количество чисел, которые нужно вывести?");
// for (let i = 0; i < count; i++) {
//   console.log(i ** 2);
// }

// Задание 5

// Напишите программу, которая выводит в консоль числа от 1 до 100.
// При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»

// task solution

for (let i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

// Задание 6

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }

// task solution

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// Задание 7
// Переписать задание 4 в виде функции. Т.е. описать функцию, которая выводит квадраты чисел из заданного диапазона (диапазон будет попадать в функцию как аргументы).

// const getSquare = (min, max) => {
//     for(let i = min; i < max; i++){
//         console.log(i ** 2);
//     }
// }

// Задание 8

// Написать функцию, котрая возвращает строку - случайный цвет в формате rgb. Это будет строка вида "rgb(10,55,250)"

// Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):
// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }
// Подсказка:
// Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255.
// Одна функция может вызывать другую функцию

// task solution
// const getRandomRGB = (n1, n2, n3) => "rgb(" + n1 + "," + n2 + "," + n3 + ")";

// const getRandomRGB = (n1, n2, n3) => `rgb(${n1},${n2},${n3})`;

let n1 = getRandomInteger(0, 255);
let n3 = getRandomInteger(0, 255);
let n2 = getRandomInteger(0, 255);
const getRandomRGB = (n1, n2, n3) =>
  `случайный цвет в формате rgb(${n1},${n2},${n3})`;

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomRGB(n1, n2, n3));

// console.log(`случайный цвет в формате
//   ${getRandomRGB(
//     getRandomInteger(0, 255),
//     getRandomInteger(0, 255),
//     getRandomInteger(0, 255)
//   )}`);

// Задание 9

// Написать функцию, которая принимает целое число n.
// Внутри функции запустить цикл от 1 до n с шагом 0.5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.
// Такая функция не будет ничего возвращать, она просто выводит информацию в консоль.
// Пример, при запуске функции с параметром 3:

// "1 integer"
// "1.5 decimal"
// "2 integer"
// "2.5 decimal"

// task solution
function getNum(n) {
  for (let i = 1; i < n; i = i + 0.5) {
    if (i % 1 == 0) {
      console.log(i + " integer");
    } else {
      console.log(i + " decimal");
    }
  }
}
getNum(5);
