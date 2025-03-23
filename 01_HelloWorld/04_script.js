const username = prompt('Enter your name') || ("procodder")
// const userage = +prompt('Enter your age ');
//if you do cancel in prompt then procodder is applied as default 
const userage = parseInt(prompt('Enter your age')) || 25
//parseint ignore the letter with digits eg- 24bjbf i/p  will be taken as 24 

console.log(`Name : ${username}`);

console.log(`Age : ${userage}`);

if(userage >=0 && userage<=17){
    console.log(`i am school student. Learning science and math `)
}
if(userage>=18 && userage<=45){
    console.log(`I am ${username} and i am working professional. `);

}
if(userage > 45){
    console.log(`Time to retired Mr. ${username}...just kidding`)
}
console.log('code ended');
