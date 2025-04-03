const evenNum = [0,2,21,4,6,1]

const returnedVAlue = evenNum.some((num , i,array)=> {
    // console.log(num)
    return num>5 //saaare wale main jha true mela wahi se return kr dega aage check bhi nahi krega 
})
console.log(returnedVAlue)

//every is opposite of some if every element is true then it is true else it is false 

const returnedVAluee = evenNum.every((num , i,array)=> {
    // console.log(num)
    return num%2 === 1
})
console.log(returnedVAluee) 
