let a = document.querySelector("h5")

let addfrnd = document.querySelector("#add")

let removefrnd = document.querySelector("#remove")
addfrnd.addEventListener("click" , function(){
    a.innerHTML = "Friends"
    a.style.color = "green"
})
removefrnd.addEventListener("click" , function(){
    a.innerHTML = "Stranger"
    a.style.color = "red"
})
