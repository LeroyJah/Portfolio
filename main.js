import {getHeading} from './header.js'

let sideBar = document.querySelector(".side-bar");
let sideBarUl = document.querySelector(".side-bar ul");

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

const nav = document.querySelector('.navbar')

// getHeading();