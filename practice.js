/* string
const what = "Nicolas";
*/

/*
boolean
const wat = true;
*/

/*
number
const wat = 666;
*/

/*
float
const wat = 55.1;
*/


// array

/* const nicoInfo = {

  name : "Nico",
  age : 33,
  gender : "Male",
  isHansome : true,
  favMovies : ["Along the gods", "LOTR", "Oldboy"],
  favFood : [
    {name : "Kimchi", fatty : false},
    {name:"Cheese burger", fatty: true}
  ]

}*/

/*function sayHello(name, age){
  return `Hello ${name} you are ${age} years old`;
}

const greetNicolas = sayHello("Nicolas", 14);*/

/*
const calculator = {
    plus : function (a, b){
      return a + b;
    },
    minus : function (a, b){
      return a - b;
    },
    divide : function (a, b){
      return a / b;
    },
    root : function (a, b){
      return a ** b;
    }
}

const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const divide = calculator.divide(5, 5);
const root = calculator.root(5, 5);

console.log(plus);
console.log(minus);
console.log(divide);
console.log(root);*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
  title.classList.toggle(CLICKED_CLASS);
}

function init(){
  title.addEventListener("click", handleClick);
}

init();

