import {getHeader} from './header.js'
import { demoArrow,demoButton,demoButton2 } from './demo.js';
import { toggleSideBar,sideBarButton } from './siderBar.js';

sideBarButton.addEventListener("click", e => {
    toggleSideBar();
});

demoButton.addEventListener("click", () => {
    demoArrow.classList.toggle("hidden")
})

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

const nav = document.querySelector('.navbar')

getHeader();