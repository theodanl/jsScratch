function a1(){
    //console.log('work a1');
    f2();
}

function f2(){
   // console.log('f2 working');
    console.trace();
}

a1();

const c = {
    one : 1,
    two : 2,
    3: 'hello'
}

console.log(c);
console.table(c);

console.group('test 1')
console.warn('f2 working');
console.log('work a1');
console.groupEnd();

let p = document.querySelector('p');
let div = document.querySelector('div');
console.log(div);
console.log(p);
console.dir(p);
console.dir(div);

console.log(document.myForm);
console.dir(document.myForm);
console.dir(window.myForm);