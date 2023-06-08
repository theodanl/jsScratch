// let years = prompt('Сколько вам лет? 18+');
// if(years==18)  alert('вы прошли') ;


// with else

// let years = prompt('Сколько вам лет?');
// if (years >= 18) {
//     alert ('Вы прошли');
// }else alert ('вы еще ребёнок');



// let year = prompt('Сколько вам лет?');

// if (year < 18) {
//   alert( 'Это слишком рано...' );
// } else if (year >= 18) {
//     alert ('вы прошли');
// }


// let approveAge;

// let Age = prompt ('Сколько вам лет?');

// if (Age >=18) {
//     approveAge = 'Удачно';
// }else {
//     approveAge = 'Не удачно';
// }

// alert(approveAge);



// operator ?

// let year = prompt ('Сколько вам лет?');

// let approveAge = (year >=18) ? 'Удачно' : 'Не удачно';

// alert(approveAge);

// let age = prompt ('Сколько вам лет?');

// let approveAge = ( age < 5 ) ? 'Привет малыш' : 
//     ( age < 18 ) ? 'Привет подросток' :
//     (age < 100) ? 'Привет дядя' : ' А ты долгожитель! ';

//     alert(approveAge);


// operator ? заменяет if

// let commandName = prompt ('Введите название нашего дискорд канала:');

// (commandName == 'СКВЕРНА') ? alert('Верно') : alert('Неправильно');


// ЗАДАЧКИ

// Выведется ли alert?

// if ("0") {
//   alert( 'Привет' );
// }

// ДА, любая строка кроме пустой выведится.


// let officalName = prompt ('Какое "официальное" название js?');

// if (officalName == 'ECMAscript') {
//     alert ('Верно');
// } else {
//     alert('Не знаете? ECMAScript!');
// }



// let number = prompt ('Введите любое число');

// if (number > 0) {
//     alert ('1');
// }else if (number < 0 ) {
//     alert ('-1');
// }else if (number == 0 ) {
//         alert ('0');
// }



// Перепишите конструкцию if с использованием условного оператора '?':

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }


// let a = +prompt('Введите число A');
// let b = +prompt("Введите число B");


// result = (a+b <=4) ? 'Мало' : 'Много';

// alert(result);



// Перепишите 'if..else' в '?'
// важность: 5
// Перепишите if..else с использованием нескольких операторов '?'.

// Для читаемости рекомендуется разбить код на несколько строк.

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }


let message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';
