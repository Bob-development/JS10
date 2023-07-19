'use strict'

let arr = ["John" , "Bob" , "Mike" , "Don"];
console.log('[standart massive]', arr);

arr.push("Ruslan");
console.log('[massive with Rus]', arr);

arr.pop()
console.log('[massive without Rus]', arr);

showElements(arr);

function showElements(arr) {
    for (let i = 0; i < arr.length; i++){
        console.log('[index]', i);
        console.log('[arr elem]', arr[i]);
        console.log('------------------');
    }   
}

//FIND MISHA
let txt = 'HelloworldMishaDimaNeRuslanDota2';
console.log(txt, "\n-------------");
let misha = 'Misha';
let mishaFirstI = txt.indexOf(misha);
let mishaLastI = mishaFirstI + misha.length - 1;
console.log('[Misha is here]\n',`\nfrom ${mishaFirstI}s index to ${mishaLastI} index\n--------------`);

//SLICE DIMA
let dima = 'Dima';
let dimaFirstI = txt.indexOf(dima);
let dimaLastI = dimaFirstI + dima.length;
let newTxtSlicedFirstPart = txt.slice(0, dimaFirstI);
let newTxtSlicedSecondPart = txt.slice(dimaLastI);

let newTxt = newTxtSlicedFirstPart + newTxtSlicedSecondPart;
console.log('[txt wihout Dima]', newTxt, "\n----------------------------");

//FUNCTIONS

//ARROW
const greeting = (gig) => {
    return console.log("Hey", gig, '\n--------------------');
}

greeting("Bob");

//EXPRESSION
let username = "John";

const findName = function (str) {
    if (str.indexOf(username)){
        console.log("He is here bro");
    }
}

findName("halk,John,Misha")