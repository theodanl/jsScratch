// function sayHi() {
//     alert('Привет');
// }

// let func = sayHi;

// sayHi();




// ФУНКЦИИ КОЛБЭКИ



// function ask (questions, yes, no) {
//     if (confirm(questions)) yes()
//     else no();
// }

// function showOk() {
//     alert('Вы согласны.')
// }

//  function showCancel() {
//     alert('Вы отменили соглашение.')
//  }

//  ask('Вы согласны?', showOk, showCancel);


 
// function ask ( questions, yes, no ) {
//     if (confirm(questions)) yes() 
//     else no();
// }

// ask(
//     "Вы согласны?",
//     function() {alert('Вы согласились');} ,
//     function() {alert('Вы отменили соглашение');}
// )


// sayHi('Вася');

// function sayHi(name) {
//     alert(` Привет ${name}`);
// }



// let age = +prompt('Сколько вам лет?');

// let welcome;

//     if (age < 18 ) {
//         welcome = function( ) {
//             alert ('Привет школьник');
//         }
//     }else {
//         welcome = function () {
//             alert('Привет дядя');
//         }
//     }
// welcome();


// let age = +prompt('Сколько вам лет?');

// let welcome = (  age < 18  ) ? 
// function() {alert('Привет');} : function() {alert('Привет дядя');};

// welcome();


