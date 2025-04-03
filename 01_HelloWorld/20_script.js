const num1 = [1,2,3,4]
const num2 = [5,6,7,8,9,10]
// const myname='RAMPATEL'
//way 1

// const joinedArray= num1.concat(num2)
// console.log(joinedArray)

//way 2

const joinedArray = [...num1,...num2,11] 
console.log(joinedArray) 

function add(){
    console.log(arguments)
    let sum=0
    for(let i=0; i<arguments.length;i++){
         sum=sum+ arguments[i]
        
    }
    return sum;
}
console.log(add(...joinedArray))
