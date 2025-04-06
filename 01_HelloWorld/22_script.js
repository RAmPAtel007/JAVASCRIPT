const colors =['red','green','blue','yellow', 'black']
//array destructing //sequence matter here but not in object 
const[a,b,c,d] = colors
const [ , ,color3] =colors 
//array is like object so you can use the object index
const{3: colourNo4} =colors //diect access if array is large


//object destructing 
const user ={
    name: 'Ram',
    age: 20,
    address :{
        city : 'indore',
        state : 'POhaPaglu',
    },
}
const {name,age} =user 

const {name : username, age: userage} =user //now you cannot access with name you can access with username mtlb ki tumne new variable cretw kr liya hai and usko tum purane variaable ki value assign kr paa rahe ho 
// const {address : {city}} =user //address ke ander jo city hai 

  const {city,state} =user.address //this is more easy 

//function + object 
function intro({age, name}){ //same for array use [ "a,b"] there
    console.log(`hy i am ${name} and i am ${age} yr old`)
}
intro(user) //pass object