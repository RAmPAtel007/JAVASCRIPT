const fruits = ['banana', 'watermelon','apple', 'papaya','grapes']
//for of loop u can do the same thing with for looop but it is the shoter way 
for(const fruit of fruits){
    console.log(fruit)
}
//for of loop is for itrables for object use for in 

console.log("*******************")

const person =  {
    name: 'ram' , 
    city :'inodre' , 
    age: 20,
    eyecolour: 'blue',
}

for(Key in person ){
    console.log(Key ,':' , person[Key])
}
//or you can use this is faster 
console.log('*************')
const personKey= Object.keys(person)//for keys 
const personValue= Object.values(person)//for values
const personEntries= Object.entries(person)//for array of key values in an array 
for(const key of personKey){
    console.log(person[key])
}

console.log('******************')
//for each method 
fruits.forEach(function(fruittt){
    console.log(fruittt)
})
console.log('*********************')
fruits.forEach((fruitss)=>console.log(fruitss.toUpperCase())) //the passed fxn is anonoymus fxn , arrrow fxxn and higher order fxn 

