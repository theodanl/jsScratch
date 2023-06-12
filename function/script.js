// function showMessage(){
//     alert('hello tilted');
// }

// showMessage();


// function showMessage(){
//     let box = 'Привет я изучаю JS';

//     alert(box);
// }

// showMessage();


// let userName = 'your Login';

// function showMessage() {
//     let message = `Привет, ${userName}`;
//     alert(message);
// }

// showMessage();


// // parametri

// let from = 'Рома';

// function showMessage(from, text) {
//     from = '*' + from + '*';
//     alert(from + ': ' + text);
// }

// showMessage(from, "Привет");


// function showMessage(text) {
//     if (text === undefined ) {
//         text = 'пустое сообщение'
//     }
//     alert(text);
// }

// showMessage();



// function sum(a,b){
//     return a+b;
// }

// let result = sum(1,2)

// alert(result);


function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      alert( i ); // простое
    }
  }

  showPrimes();