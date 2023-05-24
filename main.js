let number = document.querySelector(".number")
let addOne = document.querySelector(".add-one")
let removeOne = document.querySelector(".remove-one")
let imgContainer = document.querySelector(".images-container")

addOne.addEventListener("click", (e) => {
    number.innerHTML = Number(number.innerHTML) + 1
    let img = document.createElement("img")
    img.src = "./Star.svg"
    imgContainer.appendChild(img);
})

removeOne.addEventListener("click", (e) => {
    if (Number(number.innerHTML) > 0) {
        number.innerHTML = Number(number.innerHTML) - 1
        imgContainer.removeChild(imgContainer.lastChild);
    }
})