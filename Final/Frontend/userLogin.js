// let login=document.getElementById("login");
// login.addEventListener("click",()=>{
//     document.querySelector(".LogIn").style.display="block";
//     document.querySelector("body").style.backgroundColor="black";
// })

// let cross=document.getElementById("cross");
// cross.addEventListener("click",()=>{
//     document.querySelector(".LogIn").style.display="none";
// })

let change= document.getElementById("change");

change.addEventListener("click",()=>{
    document.querySelector("#change").style.backgroundColor="rgb(255, 220, 220)";
    document.querySelector("#bike").style.backgroundColor="white";
    document.querySelector("#change2").style="none";
    document.querySelector("#bike2").style="none";
    document.querySelector("#change3").style="none";
    document.querySelector("#bike3").style="none";  
})
let change2= document.getElementById("change2");

change2.addEventListener("click",()=>{
    document.querySelector("#change2").style.backgroundColor="rgb(255, 220, 220)";
    document.querySelector("#bike2").style.backgroundColor="white";
    document.querySelector("#change").style="none";
    document.querySelector("#bike").style="none";
    document.querySelector("#change3").style="none";
    document.querySelector("#bike3").style="none";
})
let change3= document.getElementById("change3");

change3.addEventListener("click",()=>{
    document.querySelector("#change3").style.backgroundColor="rgb(255, 220, 220)";
    document.querySelector("#bike3").style.backgroundColor="white";
    document.querySelector("#change").style="none";
    document.querySelector("#bike").style="none";
    document.querySelector("#change2").style="none";
    document.querySelector("#bike2").style="none";
})
document.getElementById("openModal").onclick = function() {
    document.getElementById("loginModal").style.display = "flex";
}
document.querySelector(".close").onclick = function() {
    document.getElementById("loginModal").style.display = "none";
}
window.onclick = function(event) {
    if (event.target == document.getElementById("loginModal")) {
        document.getElementById("loginModal").style.display = "none";
    }
}
