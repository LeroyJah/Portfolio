const demoButton = document.querySelector(".demo-button");
const demoButton2 = document.getElementById("demo-button-2");
const demoArrow = document.querySelector(".demo-arrow")

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