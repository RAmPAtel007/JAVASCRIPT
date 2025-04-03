const nums = [1,2,3]
nums.reduce((accumulator,current, i)=>{
    console.log(accumulator, current)
    //debugger 
    return current +accumulator // the return value become next value of accumulator //loop likha nahi per reduce k bg m loop likha hai 
},0) 
// if inital value i.e is 0 takes as accumulator value but it is not passsed then the accumulator takes the first value of the array 

//o/p 0 1 here 0+1 = 1
//    1 2 , 1+2 =3
//    3 3 , 3+3 = 6 // 6 is not shown made this code run in console so ir will return 6
