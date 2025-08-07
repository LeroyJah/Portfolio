let sideBar = document.querySelector(".side-bar");
let sideBarUl = document.querySelector(".side-bar ul");

const demoButton = document.querySelector(".demo-button");
const demoButton2 = document.getElementById(".demo-button-2");
const demoArrow = document.querySelector(".demo-arrow")

demoButton.addEventListener("click", () => {
    demoArrow.classList.toggle("hidden")
})

demoButton2.addEventListener("click", () => {
    demoArrow.classList.toggle("hidden")
})

let sideBarStatus = false;

let toggleSideBar = function(){
    if(sideBarStatus === false){
        sideBar.style.width = "200px";
        sideBarUl.style.visibility = "visible";

        sideBarStatus = true;
    }

    else if(sideBarStatus === true){
        sideBar.style.width = "75px";
        sideBarUl.style.visibility = "hidden";

        sideBarStatus = false;
    }
}



