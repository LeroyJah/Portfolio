import {getHeader} from './header.js'
import {getSideBar} from './sideBarModule.js'
// import { demoArrow,demoButton,demoButton2 } from './demo.js';
import { toggleSideBar,sideBarButton } from './siderBar.js';

export const demoButton = document.getElementById("demo-button");
export const demoButton2 = document.getElementById("demo-button-2");
export const demoArrow = document.querySelector(".demo-arrow")

getHeader();
getSideBar();

if(demoButton){
    demoButton.addEventListener("click", () => {
    demoArrow.classList.toggle("hidden")
})
}
if(demoButton2){
    demoButton2.addEventListener("click", () => {
    demoArrow.animate(
        [
            { transform: 'translateX(0px)' },
            { transform: 'translateX(400px)' },
            { transform: 'translateX(0px)' }
        ], 
        {
            duration: 1000,
            iterations: 2
        }
    );
    // console.log("working");
})

}
sideBarButton.addEventListener("click", e => {
    toggleSideBar();
});

const nav = document.querySelector('.navbar')

