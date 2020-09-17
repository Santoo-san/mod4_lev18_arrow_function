//deel A bouw om naar arrow function
//oud
const ikRockArrowFunctions = function () {
  console.log("Joe, ik rock de arrow functions!");
};

ikRockArrowFunctions();

// verbetering

const ikRockArrowFunctions2 = () =>
  console.log("Joe, ik rock de arrow functions 2 !");

ikRockArrowFunctions2();
//Deel B  laat de {} braces weg
//oud
const fivePlusSeven = function () {
  return 5 + 7;
};

console.log(fivePlusSeven());

//verbetering

const fivePlusSeven2 = () => 5 + 7;

console.log(fivePlusSeven2());

//Deel C zo kort mogelijk 1+2 met arrow function

console.log(("test") => 1 + 2);

//deel D

const myFunction = (a, b) => a + b;
console.log(myFunction(1, 2));

//Deel E

const addFive = (a) => a + 5;
console.log(addFive(1));

//deel F
const createObject = () => ({ greeting: "hoi" });
console.log(createObject());
