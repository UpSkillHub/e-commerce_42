let cart = document.querySelector(".cart");
let note1 = document.querySelector(".note1");
let note2 = document.querySelector(".note2");

cart.addEventListener("click", function() {

    if(num > 0 ){
        note2.style.display = "block"; 
        
    } else   if (note1.style.display === "none") {
        note1.style.display = "block";  
    } else{
        note1.style.display = "none";
        note2.style.display = "none"; 
    }
});

let decrease = document.querySelector(".decrease");
let number = document.querySelector(".number");
let numbers = document.querySelector(".numbers");
let increase = document.querySelector(".increase");
let total = document.querySelector(".total");
let price = document.querySelector("h2");

let num = 0;
number.textContent = num;
increase.addEventListener("click", function() {
    num++;
    number.textContent = num;
    numbers.textContent = number.textContent
    total.textContent = price.textContent * number.textContent
    selected.style.display = "none";
} 
)
decrease.addEventListener("click", function() {
    if (num > 0){
        num--;
        number.textContent = num;
        numbers.textContent = number.textContent
        total.textContent = price.textContent * number.textContent
        selected.style.display = "none";
    } 
})


let remove = document.querySelector(".img5");
remove.addEventListener("click", function(){
        note2.style.display = "none"; 
        note1.style.display= "block";
        number.textContent = 0;
        num = 0;
        selected.style.display = "none"
})

let add = document.querySelector(".add");
let container = document.querySelector(".container");
const selected = document.querySelector(".circle");
add.addEventListener("click", function(){
    if (selected.style.display === "none"){
        selected.style.display = "block";
       if(num > 0){
        selected.textContent = number.textContent;
         note1.style.display = "none"
       } else{
         selected.style.display = "none";
       }
    } else{
        selected.style.display = "none";
    }
})


let menu = document.querySelector(".img1");
let choices = document.querySelector(".choices");
 menu.addEventListener("click", function(){
   choices.style = "display:block;"
 })

 let closePage = document.querySelector(".close");

 closePage.addEventListener("click", function(){
    choices.style.display = "none";
 })

 
const pictures = document.querySelectorAll(".pict1, .pict2, .pict3, .pict4");
const images = document.querySelectorAll(".small1, .small2, .small3, .small4")

const back = document.querySelector(".img3");
const next = document.querySelector(".img4");

let index= 0
let val = 0
next.addEventListener("click", function () {
    
    pictures.forEach(pic => pic.style.display = "none");
    index = (index + 1) % pictures.length;
    pictures[index].style.display = "block";

    images.forEach(img => img.style.display="none");
    val =(val + 1) % images.length;
    images[val].style.display = "block";
    
  });

back.addEventListener("click", function () {
    
    pictures.forEach(pic => pic.style.display = "none");
    index = (index - 1 + pictures.length) % pictures.length;
    pictures[index].style.display = "block";

    images.forEach(img => img.style.display="none");
    val =(val - 1 + images.length) % images.length;
    images[val].style.display = "block";
    
    
  });

const mug1 = document.querySelector(".mug1");
const mug2 = document.querySelector(".mug2");
const mug3 = document.querySelector(".mug3");
const mug4 = document.querySelector(".mug4");
const mug5 = document.querySelector(".mug5");

const border1 = document.querySelector(".border1");
const border2 = document.querySelector(".border2");
const border3 = document.querySelector(".border3");
const border4 = document.querySelector(".border4");
const border5 = document.querySelector(".border5");

mug1.addEventListener("click", function(){
    if (border1.style.display == "none"){
   border1.style.display = "block"
    }else{
        border1.style.display ="none"
    }
})
mug2.addEventListener("click", function(){
    if (border2.style.display == "none"){
   border2.style.display = "block"
    }else{
        border2.style.display ="none"
    }
})
mug3.addEventListener("click", function(){
    if (border3.style.display == "none"){
   border3.style.display = "block"
    }else{
        border3.style.display ="none"
    }
})
mug4.addEventListener("click", function(){
    if (border4.style.display == "none"){
   border4.style.display = "block"
    }else{
        border4.style.display ="none"
    }
})
mug5.addEventListener("click", function(){
    if (border5.style.display == "none"){
   border5.style.display = "block"
    }else{
        border5.style.display ="none"
    }
})

const picture1 = document.querySelector(".pict1");
const small11 = document.querySelector(".small11")
const picture2 = document.querySelector(".pict2");
const small22 = document.querySelector(".small22")
const picture3 = document.querySelector(".pict3");
const small33 = document.querySelector(".small33")
const picture4 = document.querySelector(".pict4");
const small44 = document.querySelector(".small44")


small11.addEventListener("click",function(){
    small11.style = "border: 2px solid red; opacity: 0.5; border-radius: 10px"
    picture1.src = picture1.src
    small22.style = "border: 0px ; opacity: 90; border-radius:10px"
    small33.style = "border: 0px ; opacity: 90; border-radius:10px"
    small44.style = "border: 0px ; opacity: 90; border-radius:10px"
})

small22.addEventListener("click",function(){
    small22.style = "border: 2px solid red; opacity: 0.5; border-radius: 10px"
    picture1.src = picture2.src
    small11.style = "border: 0px ; opacity: 90; border-radius:10px"
    small33.style = "border: 0px ; opacity: 90; border-radius:10px"
    small44.style = "border: 0px ; opacity: 90;     border-radius:10px"
})

small33.addEventListener("click",function(){
    small33.style = "border: 2px solid red; opacity: 0.5; border-radius: 10px"
    picture1.src = picture3.src
    small11.style = "border: 0px ; opacity: 90; border-radius:10px"
    small22.style = "border: 0px ; opacity: 90; border-radius:10px"
    small44.style = "border: 0px ; opacity: 90; border-radius:10px"
})

small44.addEventListener("click",function(){
    small44.style = "border: 2px solid red; opacity: 0.5; border-radius: 10px"
    picture1.src = picture4.src
       small22.style = "border: 0px ; opacity: 90; border-radius:10px"
       small11.style = "border: 0px ; opacity: 90; border-radius:10px"
       small33.style = "border: 0px ; opacity: 90; border-radius:10px"

})

// container.addEventListener("click", function(){
//     note1.style.display = "none";
//     note2.style.display = "none";
//     choices.style.display = "none"
// })
