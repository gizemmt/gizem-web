





//**** product detail page****//

//const bigImage = document.querySelector(".image");
//const smallimggroup = document.querySelectorAll(".smallimggroup img");
//const rightArrow = document.querySelector(".rightarrow");
//const leftArrow = document.querySelector(".leftarrow");//
const sizesdisplay = document.querySelector(".sizesdisplay p");
const sizes = document.querySelectorAll(".sizessection p");
const quantitydisplay = document.querySelector(".quantitydisplay p");
const quantity = document.querySelector(".quantity input");
const progressbar = document.querySelectorAll(".progress div");//
const sepetbutton = document.querySelector("button");
let index = 0;
sizes.forEach(item => {
    item.addEventListener("click", () => {
        sizesdisplay.textContent = item.textContent;
        if (item.classList.contains("notavailable")) {
            sepetbutton.textContent = "GELİNCE HABER VER";
            sepetbutton.style.background = "red";
            sepetbutton.style.pointerEvents = "none";
        }
        else {
            sepetbutton.textContent = "Sepet Ekle";
            sepetbutton.style.background = "black";
            sepetbutton.style.pointerEvents = "all";
        }
    });
});
quantity.addEventListener("click", () => {
    quantitydisplay.textContent = quantity.value;
});

//smallimggroup.forEach((item) => {
    //item.classList.add("passive");
    //smallimggroup[index].classList.remove("passive");
    //smallimggroup[index].style.border = "1px solid black";
//});
progressbar.forEach((item) => {
    item.classList.add("passive");
    progressbar[index].classList.remove("passive");
    progressbar[index].classList.add("active")
});
//**rightArrow.addEventListener("click", () => {
    let nextimage = document.createElement(img);
    nextimage.classList.add(".image>img");
    if (index === smallimggroup.length - 1) return;
    index++;
    rightArrow.style.pointerEvents = "none";
    nextimage.src = smallimggroup[index].src;
    bigImage.appendChild(nextimage);
    let images = document.querySelectorAll(".image img");
    let presentimage = images[0];
    let nextimageadd = images[1];
    presentimage.style.animation = "presentimagemoveleft 1s ease forwards ";
    nextimageadd.style.animation = "nextimagemoveleft 1s ease ";
    presentimage.addEventListener("animationend", () => {
        rightArrow.style.pointerEvents = "all";
        bigImage.removeChild(presentimage);
        smallimggroup.forEach((item) => {
            item.classList.add("passive");
            smallimggroup[index - 1].style.border="none";
            progressbar.forEach((item)=>{
                item.classList.add,("passive");
                progressbar[index].classList.remove("passive");
                progressbar[index].classList.add("active")
            });
        });
        smallimggroup[index].classList.remove("passive");
        smallimggroup[index].style.border="1px solid black";
    });

//});
//leftArrow.addEventListener("click", () => {
    //let previmage = document.createElement(img);
    previmage.classList.add(".image>img");
    if (index === 0) return;
    index--;
    leftArrow.style.pointerEvents = "none";
    previmage.src = smallimggroup[index].src;
    bigImage.appendChild(previmage);
    let image = document.querySelectorAll(".image img");
    let presentimage = images[0];
    let previousimage = images[1];
    presentimage.style.animation = "presentimagemoveright 1s ease  ";
    previousimage.style.animation = "previousimagemoveright 1s ease forwards";
    presentimage.addEventListener("animationend", () => {
        leftArrow.style.pointerEvents = "all";
        bigImage.removeChild(presentimage);
        smallimggroup.forEach((item) => {
            item.classList.add("passive");
            smallimggroup[index + 1].style.border="none";
            progressbar.forEach((item)=>{
                item.classList.add,("passive");
                progressbar[index].classList.remove("passive");
                progressbar[index].classList.add("active")
            });
        });
        smallimggroup[index].classList.remove("passive");
        smallimggroup[index].style.border="1px solid black";
    });

//});

