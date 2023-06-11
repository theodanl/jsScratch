// let a = 2+2;

// switch(a) {
//     case 1: 
//     alert('мало');
//     break;

//     case 2:
//     alert('еще чуть чуть');
//     break;

//     case 4:
//     alert('подходит');
//     break;

//     default:
//         alert('нет таких значений!') //Значение если в конструкции нет подходящих кейсов.
// }


// ОБЪЕДИНЕНИЕ КЕЙСОВ, ПРИМЕРНО ТАК МОЖНО ЭТО ИСПОЛЬЗОВАТЬ.

// let arg = +prompt('Введите число от 1 до 5 и узнаете какое из этих чисел правильное');

// switch(arg){
//     case 1:
//     case 2 :
//         alert('это число не подходИт');
//         break;
        
        
//     case 4:
//         alert('почти получилось');
//         break;

//     case 3:
//     case 5:
//         alert("ты угадал");
//         break;
// }


// Напишите "if", аналогичный "switch" TASK1

// let browser = prompt('Введите название браузера');

// if (browser == 'Edge') {
//     alert('Youve got the Edge!');
// } else if (browser =='Chrome' || 'FireFox' || 'Safari' || 'Opera'){
//     alert( 'Okay we support these browsers too');
// }else {
//     alert('We hope that this page looks ok!');
// }


// TASK2

// const number = +prompt('Введите число между 0 и 3', '');

// switch(number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;

//     case 1:
//         alert('Вы ввели число 1');
//         break;

//     case 2:
//     case 3: 
//     alert('Вы ввели число 2 а может и 3');
//     break;
// }