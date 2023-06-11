// let i = 0;

// while (i <= 3) {
//     alert (i);

//     i++;
// }

// let i = 3;

// while (i ) {
//     i--;

//     alert(i);
// }



// ЕСЛИ ТЕЛО СОСТОИТ ИЗ ОДНОЙ ИНСТРУКЦИИ
// let i = 3;

// while(i) alert(i--);



// let i = 0;

// do {
//     alert(i++);


// }while (i <= 3);




// for (let i = 0; i < 3; i++ ){         
//     alert(i);
// }

// for (let i = 0; i < 3; i++) alert(i)

// // Выполнить начало
// let i = 0;
// // Если условие == true → Выполнить тело, Выполнить шаг
// if (i < 3) { alert(i); i++ }
// // Если условие == true → Выполнить тело, Выполнить шаг
// if (i < 3) { alert(i); i++ }
// // Если условие == true → Выполнить тело, Выполнить шаг
// if (i < 3) { alert(i); i++ }
// // ...конец, потому что теперь i == 3



// let i = 0; 

// for ( ; i < 3;) {
// //     alert(i);
//         alert(i++);
// }


// let sum = 0;

// while(true) {
//     let value = +prompt("число");

//     if (!value) break;

//     sum += value;
// }alert('сумма' + sum);


// for (let i = 0; i <10 ; i++) {
//     if (i% 2 == 0 ) continue;

//     alert(i);
// }



// ВЫХОД ИЗ ЦИКЛА ПРИ ПОМОЩИ МЕТКИ(out)
// out: for(let i=0 ; i<3 ; i++) {
//     for (let j=0; j < 3 ; j++ ){
//         let input = prompt(`введите координаты ${i},${j}`);

//         if (!input) break out;
//     }
// }

// alert('complete');


// for (i = 2 ; i <=10; i++){
//     if (i % 2 ==0 ){
//         alert(i);
//     }
    
// }



// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// РЕШЕНИЕ 
// let i = 0;

// while(i<3){
//     alert(`number ${i++}!`)
// }


// Повторять цикл, пока ввод неверен


// while(true) {
//     let res = +prompt('Введите число больше 100');
//     if(res > 100 || res === null ) break;
// }


// Вывести простые числа

// let n = +prompt('введите число ');

// for ( let i = 2; i <=n; i++){
//     let sum = 0;
//     for (let j = 1; j<=i; j++) {
//         if (i % j == 0 ) ++sum
//     }

//     if (sum ==2 )
//     alert(i);
// }