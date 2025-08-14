let sideBar = document.querySelector(".side-bar");
let sideBarUl = document.querySelector(".side-bar ul");
export let sideBarButton = document.getElementById("side-bar-button");

let sideBarStatus = false;

export function toggleSideBar(){
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