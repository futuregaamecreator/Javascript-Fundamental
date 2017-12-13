///Lecture: boolean logic and switch

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
