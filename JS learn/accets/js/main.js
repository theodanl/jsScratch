//             ВЫВОД ИНФОРМАЦИИ В КОНСОЛЬ
// // var DrawCats = function(howManyTimes) {
// //     for (var i=0; i<howManyTimes; i++) {
// //         console.log(i+"🐱"); // в консоль
// //     }
// // };
// // DrawCats(6);
// //Вывод переменной
// let myName = 'Alex';
// let myAge = 18;
// console.log(`Моё имя: ${myName}`);
// console.log('Мой возраст: ' + myAge + ' лет');
// console.log(`${myName} ${myAge}`);



//             ПОЛУЧАЕМ ТЕКСТ ИЗ ИНПУТ
// document.querySelector('button').onclick = myClick;
document.querySelector('button').addEventListener('click', myClick);

function myClick(){
    //get input
    //get input - value
    document.querySelector('.i-1')
    let a = document.querySelector('.i-1').value;
    console.log(a);
    document.querySelector('.out').innerHTML = a;
}
// value – получить текст из input
// innerHTML – записать, получить текст в div, p, h1-h6
