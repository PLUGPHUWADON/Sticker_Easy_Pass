let changeimg = document.querySelector(".changeimg");
let clicksmile_face = document.querySelector(".smile_face");
let boxsmilesun = document.querySelector(".boxsmilesun");
let smilesun = document.querySelector(".smilesun");
let size = document.querySelector(".size");
let x = document.querySelector(".x");
let y = document.querySelector(".y");
let c_sticter = document.querySelector(".c_sticter");
let stictercolor = document.querySelector(".stictercolor");
let textsun = document.querySelector(".textsun");
let c_letter = document.querySelector(".c_letter");
let inputtext = document.querySelector(".inputtext");
let rotate = document.querySelector(".rotate");

let checkclicksmileface = 0;
let checkfileimg = 0;
clicksmile_face.addEventListener("click",() => {
    if (checkclicksmileface == 1) {
        smilesun.src = "smailFace.png";
        smilesun.style.width = `${800}px`;
        smilesun.style.height = `${800}px`;
        smilesun.style.left = `${50}%`;
        smilesun.style.top = `${50}%`;
        smilesun.style.transform = `translate(-50%,-50%) rotate(0deg)`;
        smilesun.classList.remove("addsizesmilesun");
        checkclicksmileface = 0;
        checkfileimg = 0;
    }
    else {
        smilesun.src = "";
        checkclicksmileface = 1;
        checkfileimg = 0;
    }
});

changeimg.addEventListener("change",(event) => {
    var file = event.target.files[0];
    var imageUrl = URL.createObjectURL(file);
    smilesun.src = imageUrl;
    smilesun.classList.add("addsizesmilesun");
    checkclicksmileface = 1;
    checkfileimg = 1;
    changeimg.value = "";
});

size.addEventListener("input",() => {
    if (checkfileimg == 1) {
        smilesun.style.width = `${size.value + 10}px`;
        smilesun.style.height = `${size.value + 10}px`;
    }
});

x.addEventListener("input",() => {
    if (checkfileimg == 1) {
        smilesun.style.left = `${x.value + 5}px`;
    }
});

y.addEventListener("input",() => {
    if (checkfileimg == 1) {
        smilesun.style.top = `${y.value + 5}px`;
    }
});

rotate.addEventListener("input",() => {
    if (checkfileimg == 1) {
        smilesun.style.transform = `translate(-50%,-50%) rotate(${rotate.value * 3.6}deg)`;
    }
});

c_sticter.addEventListener("input",() => {
    stictercolor.style.fill = `${c_sticter.value}`
});

c_letter.addEventListener("input",() => {
    textsun.style.color = `${c_letter.value}`;
});

inputtext.addEventListener("input",() => {
    textsun.innerHTML = inputtext.value;
    if(inputtext.value == ""){
        textsun.innerHTML = "๕";
    }
});