const arr = [ 'apple', 'banana', 'grapes', 'mango', 23, {name : 'ram'}, null , ]
arr[2]= 'water melon'
arr[10]='heloo'
arr.push("sitafal") //added in last 
arr.pop() //remove last 

console.log(arr[2])

//array inside array is multi deminsional array 
const mulArray = [['ram' , 99 ], ['sam', 98]]
console.log(mulArray[1])
console.log(mulArray[1][0])
console.log(mulArray[1][1])

const tiktoc = [['cross', null , null] , [ null , null, 'circle'],['circle', null , 'cross']]
console.log(tiktoc)