let sideBar = document.querySelector(".side-bar");
let sideBarUl = document.querySelector(".side-bar ul");

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

export function getSideBar(){
    const sidenav = document.querySelector('.side-bar')

    fetch('/sidebar.html')
    .then(res=>res.text())
    .then(data=>{
        sidenav.innerHTML=data
    })
}