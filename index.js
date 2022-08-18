
// admin mode switch (mainly for preview)

let btn = document.querySelector(".switch");

btn.addEventListener('click', () => {
    let wrapper = document.querySelector(".admin-buttons");
    wrapper.style.display = "flex";
    btn.style.display = "none";
})

// customize panel and addItem box

let customizeBtn = document.querySelector(".customize");
let box = document.querySelector(".customizeBox");
let statusCustomize = false;

customizeBtn.addEventListener('click', () => {
    statusCustomize = !statusCustomize;

    if(statusCustomize){
        box.style.display = "flex";
    }else {
        box.style.display = "none";
    }
})

let addItemBtn = document.querySelector(".addItem");
let statusAddItem = false;
let boxAddItem = document.querySelector(".addItemBox");

addItemBtn.addEventListener('click', () => {
    statusAddItem = !statusAddItem;

    if(statusAddItem){
        boxAddItem.style.display = "flex";

    }else {
        boxAddItem.style.display = "none";
    }
})


// buy panel
let bg = document.querySelector(".addon");

let buyPanel = document.querySelector(".buyPanel");
let refuseBtn = document.querySelector(".no");

let image = document.querySelectorAll(".homePageColumn");

image.forEach((div) => {
    div.addEventListener("click", () => {
        buyPanel.style.display = "flex";
        bg.style.display = "block";
    })
})

refuseBtn.addEventListener("click", () => {
    buyPanel.style.display = "none";
    bg.style.display = "none";
})