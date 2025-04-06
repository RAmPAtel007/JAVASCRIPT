const num1 = [1,2,3,4]

function add(a,b,...nums){ // rest parameter - collect all elements and made an array 

    // way 1 

    // console.log(a,b)
    // console.log(nums)
    // let sum=0
    // for(let i=0; i<nums.length;i++){
    //      sum=sum+ nums[i]
        
    // }
    // return sum;

    //way 2 
    // return nums.reduce((acc ,curr) => acc +curr)

    //way 3 through arguments // argument do not work in reduce but we can change the argument in array by spread operator //this is eaasy method 
    return [...arguments].reduce((acc ,curr) => acc +curr)

    
}

const result =add(...num1) //spread operator collect all the num1 elements

console.log(result) 