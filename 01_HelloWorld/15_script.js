const maths = {
    add : function(a , b){
        return a+b
    },
    sub : function sub(x,y){
        return x-y

    },
    //new feacture 
    subtract (a,b){
        return a-b
    },
    cube (num){
        return num **3
    }
}
//maths object mein add function ko use kiya hai toh add function is now known as method 
//jisko . kr k access kre toh wooh method hoti hai 
console.log(maths.add(10,20))

console.log(maths.sub(20,10)) 
console.log(maths.subtract(200,10)) 
console.log(maths.cube(20,10)) 


