const username = prompt('Please Enter Your Name.')
const userAge = parseInt(prompt('Please Enter Your Age.'));

// debugger

// if (!username) { //or you can use || operator 
// //in prompt input if you do cancel then the value of username becomes null and null is a fasly value so !username i.e becomes true and update the default value to procodder  note you have to change the const to let  
//   username = 'Procodrr'
// }

if(username) { //username hoga toh he print karega..if you do cancel then it will not print i.e is username become null and it is a fasly value and not entered in the loop 
    console.log(`Name: ${username}`)
}

if(userAge) {
    console.log(`Age: ${userAge}`)
}

// console.log(`Name: ${username}`)
// console.log(`Age: ${userAge}`)




if (userAge >= 0 && userAge <= 4) {
    console.log(`${username} is a kid.`);
    console.log('And he/she is playing.');

} 
else if (userAge >= 5 && userAge <= 17) {
    console.log(`${username} is a school student.`);
    console.log('And he/she is learning science and maths.');
} 
else if (userAge >= 18 && userAge <= 24) {
    console.log(`${username} is a college student.`);
    console.log('And he/she is learning computer science.');
}
 else if (userAge >= 25 && userAge <= 45) {
    console.log(`${username} is a working professional.`);
    console.log('And he/she is a web developer.');
}
 else if (userAge > 45 && userAge < 121) {
    console.log(`${username} is retired.`);
    console.log('And he/she reads newspaper.');
}
 else if (userAge >= 121) {
    console.log(`${username} is immortal.`);
    console.log('And he/she reads newspaper.');
}
 else {
    console.log('Please Enter a Valid Age');
//if someone enter negative age 
}

console.log('Program Ended!!')