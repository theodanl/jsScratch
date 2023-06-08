
// let hour = +prompt ('Введите время');

// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//     alert( 'Офис закрыт.' ); // это выходной
//   }


// ПЕРВОЕ ИСТИННОЕ ЗНАЧЕНИЕ

// let currentUser = null;
// let testUser = undefined;
// let test2User = +0;
// let defaultUser = 'Jhon';

// let name = currentUser || testUser || test2User || defaultUser || "unnamed";

// alert(name);


// СОКРАЩЕННОЕ ВЫЧИСЛЕНИЕ


// let x;

// true || (x = 1);

// alert(x);


// ОПЕРАТОР &&

// возвращает оба истинных аргумента

// alert( true && true );   // true
// alert( false && true );  // false

// let hour = 12;
// let minute = 30;

// (hour == 12 && minute == 30) ?  alert ('The time is 12:30')  :  alert('not current time');


// Проверка значения из диапазона

// let age1 = prompt('Введите диапазон a');
// let age2 = prompt('Введите диапазон B');

// result = (age1 <= 14 && age2 <=90) ? alert('Проверка пройденна') : alert('Проверка не пройдена');


// Проверка значения вне диапазона


// let age1 = prompt('Введите диапазон a');
// let age2 = prompt('Введите диапазон B');

// result = (age1 < 14 || age2 > 90) ? alert('Проверка пройденна') : alert('Проверка не пройдена');
    // result = (!(age1 >=14 && age2 <=90) ? alert('Проверка пройденна') : alert('Проверка не пройдена'));




// ПРОВЕРКА ЛОГИНА

// let authUser = prompt('Кто там?');

// if (authUser == "Админ") {
//     let password = prompt('Введите пароль:');

//     if (password == 'Я главный') {
//         alert('Здраствуйте')
//     }else  {
//         alert('Не верный пароль')
//     }
// }else if (authUser === '' || authUser === null ) {
//     alert('Отменено')
// }else {
//     alert('Я вас не знаю')
// }