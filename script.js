let next=document.querySelector(".next");
let prev=document.querySelector(".prev");
let slide=document.querySelector(".slide");

next.addEventListener("click", ()=>{
    let item=document.querySelectorAll(".item");
    slide.appendChild(item[0]);
})

prev.addEventListener("click", ()=>{
    let item=document.querySelectorAll(".item");
    slide.prepend(item[item.length-1]);
})