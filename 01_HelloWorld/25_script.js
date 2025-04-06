 const allImg =document.getElementsByTagName('img')
 const allimg2 = document.images 
 const cssImage =document.getElementsByClassName('css-image')
 const cssid=document.getElementById('unique') 
 // above all provide html collection 

 //best way //query provide node list 
 const cssQuery = document.querySelectorAll('.css-image') // . for class 
 const cssimg3Query = document.querySelectorAll('.css-image3') 
 //or by attribute selector 
 const jsimg =document.querySelector('[alt="javascript roadmap"]')


 // image updation 

 const allimage=document.querySelectorAll('img')

 const imagesUrl = [
    'https://tse2.mm.bing.net/th?id=OIP.7cRYFyLoDEDh4sRtM73vvwHaDg&pid=Api&P=0&h=180','https://tse2.mm.bing.net/th?id=OIP.Y2C49ZpFqa1h8RDBoM0MKQHaE8&pid=Api&P=0&h=180','https://tse1.mm.bing.net/th?id=OIP.vpUUrAb6H7eMCIM4TRzpcAHaFj&pid=Api&P=0&h=180'
 ]

//  allimage[0].src = imagesUrl[0]
//  allimage[1].src = imagesUrl[1]
//  allimage[2].src = imagesUrl[2]
 
//for loop

// for(let i=0 ; i<allimage.length; i++){
//     allimage[i].src = imagesUrl[i]

// }

//for each loop 
 
allimage.forEach((image,i)=>{
    image.src =imagesUrl[i]
})

const ul =document.querySelector('ul')

const ulselector = ul.querySelector('.css-image') //it will search inside ul paragraph only not whole document 



 
 
 

