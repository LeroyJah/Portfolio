import {getHeader} from './header.js'
import {getSideBar, toggleSideBar} from './siderBar.js';

export const demoButton = document.getElementById("demo-button");
export const demoButton2 = document.getElementById("demo-button-2");
export const demoArrow = document.querySelector(".demo-arrow")

getHeader();
// getSideBar();

getSideBar().addEventListener("click", e => {
    toggleSideBar();
});

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
    })
}