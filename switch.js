// const color='purple';
// if (color === 'green'){
//     console.log('you r a green ');

// }
// else if(color   === 'blue'){
//     console.log('best my');

// }
// else if(color==='black'){
//     console.log('dont try ');
// }
// else if(color === 'red') 
// {
//     console.log('danger zone');

// }
// else{
//     console.log('you are my friend');
// }
// switch Syntex
// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }

let day = new Date().getDay(); 
// Get the current day as a number (0 = Sunday, 1 = Monday, etc.)

switch (day) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  default:
    console.log("Invalid day");
}



