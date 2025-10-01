let cStage = document.getElementById("colorStage")
let cButton = document.getElementById("colorButton")

const qImage = document.getElementById("quokkaImage")
const qImage = document.getElementById("imageToggle")

/* functions are set of actions,
for example getelementbyid is the function, here our function called changecolor*/
let changeColor = function () 
{

    let rComp = Math.random() * 255 /* if we get 1 for random numb, it would times to 255 and gives us 255 */
    let gComp = Math.random() * 255
    let bComp = Math.random() * 255

                                    /*string + a number in the container + string + a numb + string */
    cStage.style.backgroundColor = "rgb(" + rComp + ", " + gComp + ", " + bComp + ")"
    /* go to cStage document, and assign the value of purple to the backgroundcolor */

}

/* a new way of writing a function is by => for example

let fatArrowchangeColor = () => 
    {
    
    }
*/


let toggleImage = () =>
{
    console.log("Button clicked")
}    

qButton.addEventListener("click", toggleImage)
cButton.addEventListener("click", changeColor)
window.addEventListener("load", changeColor)