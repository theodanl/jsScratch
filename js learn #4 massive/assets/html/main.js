const animals = ['luffy', 'stock', 'trafi'];

function showArr(arr, elem) {
    let out ='';
    for (let i=0; i< arr.length; i++) {
        out += `<div><img src="../img\\${arr[i]}.png"><span>${i}</span></div>`
    }
}

document.querySelector(elem).innerHTML = out;

showArr(animals, '.out-1-source-img');