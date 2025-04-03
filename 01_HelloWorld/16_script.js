// // function decalaration 

// function cube(num){
//     return num ** 3
// }

//function expression 

// const cubee = function(num){
//     return num ** 3
// }

// Arrow function expression 

//es mein function keyword ka use nahi karte hai => ka use krte hai 

const cubee = num =>{ // single parameter mein bracket ki need nahi hai 
    return num ** 3
}
console.log(cubee(7)) 

const add = (num1,num2) => num1+num2 //implict return..automatic return 

setTimeout(() => {
    console.log('hii')
}, 2000)




