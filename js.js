// Const and Variables
var leftbtn = document.querySelectorAll(".l-btn");
var rightbtn = document.querySelector(".r-btn");
const left = document.querySelectorAll("#lbutton");
const right = document.querySelector("#rbutton");
const left7 = document.querySelectorAll("#lbutton7");
const right7 = document.querySelector("#rbutton7");
const left9 = document.querySelectorAll("#lbutton9");
const right9 = document.querySelector("#rbutton9");

const barsButton = document.querySelector(".bars");
const closeButton = document.getElementById("xmark");
const overlay = document.getElementById("black");
const sidebarElements = document.getElementById("slidebar");

const acc = document.getElementById("accountSection");
const accClick = document.getElementById("AL");
const lya = document.querySelector(".ListYourAccount")
const tri =document.querySelector(".triangle")


//fuctions
function disableScroll() {
    // Get the current scroll position
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    // Save the current scroll position
    window.onscroll = function () {
        window.scrollTo(scrollX, scrollY);
    };
}

function enableScroll() {
    window.onscroll = function () {};
}

    rightbtn.addEventListener("click", function(event) {
        console.log("done");
        document.querySelector(".product-slider").scrollLeft += 1100;
        // event.preventDefault();
    });

leftbtn.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        console.log("done");
        document.querySelector(".product-slider").scrollLeft -= 1100;
        // event.preventDefault();
    });
});

//for section 5


right.addEventListener("click", function(event) {
    console.log("done");
    document.getElementById("product").scrollLeft += 1100;

    event.preventDefault();
});

left.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        console.log("done");
        document.getElementById("product").scrollLeft -= 1100;
        event.preventDefault();
    });
});



right7.addEventListener("click", function(event) {
    console.log("done");
    document.getElementById("product7").scrollLeft += 1100;

    event.preventDefault();
});

left7.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        console.log("done");
        document.getElementById("product7").scrollLeft -= 1000;
        event.preventDefault();
    });
});




right9.addEventListener("click", function(event) {
    console.log("done");
    document.getElementById("product9").scrollLeft += 1100;

    event.preventDefault();
});

left9.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        console.log("done");
        document.getElementById("product9").scrollLeft -= 1000;
        event.preventDefault();
    });
});

// Back to TOp

const backtop = document.querySelector("#Back")
backtop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
})






//Side bar 
const toggleSidebar = () => {
    barsButton.classList.toggle("active");
    closeButton.classList.toggle("active");
    overlay.classList.toggle("active");
    sidebarElements.classList.add("active");
};
barsButton.addEventListener("click", 
function(){
    sidebarElements.style.transform = "translateX(0px)"
    closeButton.style.display = "block"
    closeButton.style.zIndex = "101"
    overlay.classList.toggle("active");
    disableScroll();
    
});

///Side bar Cross Button

closeButton.addEventListener("click",function(){
    sidebarElements.style.transform = "translateX(-500px)"
    closeButton.style.display = "none"
    closeButton.style.zIndex = "0"
    overlay.classList.toggle("active");
    enableScroll();
})

// Account and LIst
accClick.addEventListener("click",function(){
    console.log("click")
   tri.classList.toggle("triactive")
   tri.classList.toggle("triangle")
   lya.classList.toggle("lyaactive")
   lya.classList.toggle("istYourAccount")

   
})

//window deafalt size

document.addEventListener("DOMContentLoaded", function () {
    // Set the default magnification to 1.5
    document.body.style.zoom = "100%";
});