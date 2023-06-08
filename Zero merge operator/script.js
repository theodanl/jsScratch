// let user;

// alert(user ?? "anonim");


// let user = "ivan";

// alert(user ?? 'ivanka');




// let firstName = null;
// let lastName = null;
// let nickName = 'ivan';

// alert(firstName ?? lastName ?? nickName ?? 'Анон');



let width = null;
let height = null;


let area = (height || 100) * (width ?? 2);

alert(area);