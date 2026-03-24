function searchproducts(){

let input=document.getElementById("search").value.toLowerCase();
let cards=document.querySelectorAll(".card");

cards.forEach(function(card){

let title=card.querySelector(".item-title").innerText.toLowerCase();

if(title.includes(input) || input===""){
card.style.display="block";
}
else{
card.style.display="none";
}

});

}

/* CART */

let cart=[];

document.querySelectorAll(".item-button").forEach(function(button){

if(button.innerText==="Cart"){

button.addEventListener("click",function(){

let item=button.closest(".card").querySelector(".item-title").innerText;

cart.push(item);

alert(item+" added to cart");

});

}

});

/* WISHLIST */

let wishlist=[];

document.querySelectorAll(".wishlist").forEach(function(button){

button.addEventListener("click",function(){

let item=button.closest(".card").querySelector(".item-title").innerText;

wishlist.push(item);

alert(item+" added to wishlist ❤");

});

});