export function getHeader(){
    const nav = document.querySelector('.navbar')

    fetch('/header.html')
    .then(res=>res.text())
    .then(data=>{
        nav.innerHTML=data
    })
}