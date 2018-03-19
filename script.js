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
/*
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

*/

///////////////////////////////////////////
///Lecture: Objects
/*
var john = {
  name: 'John',
  lastName:'Smith',
  yearofBirth: 1990,
  job: 'teacher',
  isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName ='Miller';
john['job'] = 'hacker';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearofBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/

////////////////////////////////////////////////
///Lecture: Objects and Methonds
/*
ver 1.0
var john = {
  name: 'John',
  lastName:'Smith',
  yearofBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function () {
    return 2017 - this.yearofBirth;
  }
};

console.log(john.calculateAge());

var age = john.calculateAge();

john.age = age;
console.log(john);

*/
/*
var john = {
  name: 'John',
  lastName:'Smith',
  yearofBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function () {
    this.age = 2017 - this.yearofBirth;
  }
};


john.calculateAge();
console.log(john);
*/
//////////////////////////////////////////////////
///// lecture: Loops
/*
for (var i = 0; i < 10; i++ ){
  console.log(i);
}

var names = ['John', 'Jane', 'Mary','Mark', 'Bob'];

// for loops
for (var i = 0; i < names.length; i++){
  console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}

var i = 0;
while(i < names.length){
  console.log(names[i]);
  i++;
}

for (var i = 1; i <= 5; i++){
  if(i === 3){
    continue;
  }
  console.log(i);
}
*/

/////////////////////////////
///Quiz

 var yearsBorn = [1987, 1926, 1968, 1948, 2000, 2010];

 function printFullAge(yearsBorn) {

   var ages = [];
   var fullAges =  [];
   for ( var i = 0; i < yearsBorn.length; i++){
     ages[i] = 2017 - yearsBorn[i];
     console.log(ages[i]);
   }

   for(i = 0; i < ages.length; i++){
     if (ages[i] >= 18) {
       console.log('Person is ' + ages[i] + ' years old, and is of full age.');
       fullAges.push(true);
     }
     else {  console.log('Person is ' + ages[i] +' years old, and is NOT of full age.');
     fullAges.push(false);
     }
   }
   return fullAges;
 }

var yearsBorn = [1987, 1926, 1968, 1948, 2000, 2010];
var full_1 = printFullAge(yearsBorn);
var full_2 = printFullAge([1990, 1954, 1662]);
