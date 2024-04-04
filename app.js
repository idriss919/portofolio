const hamburger = document.querySelector("#humberger")
const menu = document.querySelector("#menu")

hamburger.addEventListener("click", ()=>{
    menu .classList .toggle("hidden")
    hamburger.classList .toggle("bg-white")
})