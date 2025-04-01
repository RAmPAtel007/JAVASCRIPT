setTimeout(`console.log("hy")
    console.log('how are you?')`, 1) //millisec baad print 
setTimeout(a,3000)   //do not do this a() then it will become undefined if fxn do not return anything then undefined  and it is higher order fxn 

function a(){
    console.log("ram is here")
}

// setInterval(a,1000)  

setTimeout(function(){
    console.log('it is a ansyn. fxn')
},500)