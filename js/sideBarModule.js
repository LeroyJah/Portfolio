export function getSideBar(){
    const sidenav = document.querySelector('.side-bar')

    fetch('/sidebar.html')
    .then(res=>res.text())
    .then(data=>{
        sidenav.innerHTML=data
    })
}