//function defination 
function introMe(username='coder', work ){ // anurag is default Parameter or instend to deafult parameter we can use || operator 'coder' in line 3
    console.log(`hy i am ${username} from indore`)
    console.log(`learning js and i am a ${work} `)

    return 'AITR Indore'
}
                    //function call
// const returnValue = introMe() //saves the return value
introMe('SAM Pal', 'SE')
introMe('RAJ Pagare','BK')
// introMe('ROHAND')
// introMe()


//way 2 of fxn creation 
const sayHi = function(){
    console.log('Hiii')
} //this is function expression or anonymous function 
// but it acts as a variable in memory not as a function 