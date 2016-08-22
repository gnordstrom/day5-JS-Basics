//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name) {
  if (name === 'Tyler') {
    return true;
  } else {
    return false;
  }
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
function getName() {
  var name = prompt("Enter name");
  return name;
}

  //Code Here


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome(name) {
  alert("Welcome, " + getName(name));
}

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

                              // Arguments are the inputs, and the parameters are given inside the function.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?//

  //Answer Here

                              //falsy: 0, '', null, undefined, NaN, false

//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
function myName() {
  return "Gustav Nordstrom";
}


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
function newMyName() {
  myName();
}

//Now alert the result of invoking newMyName



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
function outerFn() {
  return function () {
    return "Gustav Nordstrom";
  };
}

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();

//Now invoke innerFn.
