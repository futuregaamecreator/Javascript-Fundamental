///Lecture: boolean logic and switch
/*
var age = 25;
if (age < 20){
  .console.log('john is a teenager');
} else if (age > 20 && < 30) {
  .console.log('John is a young man');
}
else {
  .log('John is a man.')
}

var job = 'teacher';

job = prompt('What does John do?');

switch (job) {
  case 'teacher':
    console.log('John teaches kis.');
        break;
    case 'driver':
    console.log('JOhn drives people');
    break;
    case 'cop':
    console.log('JOhn helps fight crime ');
      break;

  default:
console.log('John does something else');
}
*/
///////////////////////////////////////
/////Lecture Function
/*
function calculateAge(yearofBirth){

  var age = 2017 - yearofBirth;
  return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1987);
var ageMary = calculateAge(1965);


function yearsUntilRetirement(name, year){
  var age = calculateAge(year)
  var retirement = 65 - age;

  if (retirement >= 0){

  console.log(name + ' retires in ' + retirement + ' years');
}else{
  console.log(name + ' is already retired');
}
}

yearsUntilRetirement('George', 1987);
yearsUntilRetirement('Mary', 1923);
*/
///////////////////////////////////////////////
////////Lecture: Statements and Expressions
/*
//Statements
function someFun(par) {
  //code
}

//Expressions
var someFun = function(par){

  //code
}


//.Ecpression
3 + 4;
var x = 3;

////Statements

if (x == 5 ){
  //do something
}
*/



/////////////////////////////////
////Arrays

var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);

names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'talker', false];


john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

alert(john.indexOf('Smith'));

if ( john.indexOf('teacher') === -1)
{
  console.log('John is not a teacher');
}
