// const username= {
//     firstname : ' Ram' ,
//     lastname : 'Patel' ,
//     age : 20 , 
//     education : 'Btech', 
//     city : 'Indore'
// }

let user = 'Raj'
const myName = 'Raju'

const userName1 = ''
const userName2 = ''

const user1 ={
    firstname :'RAM', 
    lastName : 'patel',
    Raju : 'Developer'
}
const user2 ={
    'firstname' : 'Akash',
    'Last - Name' : 'singh' // you can use the string also 

}
//access by dot notation and square bracket
console.log(user1.firstname)
console.log(user2['Last - Name']) //accessing of key as string  
console.log(user1[myName]) // the power of square bracket it can access the varible which is out of scope i.e; line 9
console.log(user2['first' + 'name']) // firstname of user2 

const user3 = {
    firstname :'SAM', 
    lastName : 'pal',
    address : { //object inside object
        city : 'dhar',
        languagae : 'hindi' , 
        state : 'MP',
        moreDetils : {
            population : '1 lakh',
            area : '500m2'
        }

    }

}
user3.age = 20 // addition of variable in object
user3.address.moreDetils.weather = 'Sunny'

console.log(user3.address)
console.log(user3.address.state)
console.log(user3.address.moreDetils.weather)


//note there is 3 objects of different adresses in memory of named user3 , address and moredetails 

// deletion 
delete user2.firstname
console.log(user2)

Object.seal(user2) // no addition no deletion can be done on object user 2
//but we can change the existing properties 
// user2['Last - Name']= "palsahab" //changed 

Object.freeze(user2) // no add no deletion no modify 

//findind the key in object 
console.log('mobilenumber' in user3 ) //give false 