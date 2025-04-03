const fruits = ['banana', 'watermelon','apple', 'papaya','grapes']                                     
// fruits.map((fruit) => {console.log(fruit)})
const storeReturnType = fruits.map((fruit, index, array) => {
    console.log(index,fruit,array); 
    return fruit.toUpperCase()
})
console.log(storeReturnType) 

//map second arrgument is index and 3rd is array

// retrun value is the whole conclusion of the function...it replace the function with return value after execution 

const months= [ 'january', 'feb', 'March','april', 'May']

const filterMonths = months.filter((month ,index,array) => {
     console.log(month.toLocaleLowerCase().includes('m'))
    // return month.length < 5
    // return index>=3
    return month.toLocaleLowerCase().includes('m')
    
})
console.log(filterMonths) //this is returned value of the function 

const students = [
    {
        name: 'Akash',
        age: 21,
    },
    {
        name: 'Adarsh',
        age: 17,
    },
    {
        name: 'Amir',
        age: 18,
    },
    {
        name: 'RaMan',
        age: 23,
    },
    {
        name: 'Nidhi',
        age: 16,
    },
]

const adultAge = students.filter((student) => {
    return student.age>=18
}).map((stu) => { //adultAge mein unka naam store hoga jo ki age 18 above hai and then we mapped it for array and print the name of student whose age is >=18
    return stu.name
}).filter((student) => {
    return student.toLocaleLowerCase().includes('m')
    //tilowercase is used to cover all cases of m and M 
})
console.log(adultAge)

// const adultName = adultAge.map((stu) => {
//     return stu.name
// })
// console.log(adultName)

