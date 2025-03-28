function a(b) { //a is a higher order fxn 
    console.log('hiii')
    console.dir(b) //display the function when you use the log and when you use dir it will disply as object 
    b() //display the o/p of the function
}
// a({username : 'Ram' ,userAge : 20})

function sayHello(){
    console.log('helloooooo')
    
}

a(sayHello)

const varibaleFxn = sayHello

varibaleFxn()
varibaleFxn.age=15
console.log(varibaleFxn.age)


//anonymous fxn 
function ano(b){ //ano is a higher order fxn 
    console.dir(b)
    b()
}

ano(function(){ //this is a call back fxn which is passed 
    //jab kese fxn ko call krete time fxn ko pass krte hai toh jis fxn ko call kiya jaata hai usko bolte hai callback 
    console.log('it is an ana')
})