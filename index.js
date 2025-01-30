const hexadecemalNumberSystem = [0,1,2,3,4,5,6,7,8,9, "A", "B","C","D","E","F" ]

let fristHexcode= document.getElementById("first-color-code")
let firstColor =document.getElementById("first-color")

let seconHexcode = document.getElementById("second-color-code")
let secondColor = document.getElementById("second-color")

let thirdHexcode = document.getElementById("third-color-code")
let thirdColor = document.getElementById("third-color")

let forthHexcode = document.getElementById("forth-color-code")
let forthColor = document.getElementById("forth-color")

let fifthHexcode = document.getElementById("fifth-color-code")
let fifthColor = document.getElementById("fifth-color")

let sixHexcode = document.getElementById("sixth-color-code")
let sixColor = document.getElementById("sixth-color")

let generate= document.getElementById("generate-button")

function generateRandomNumber(){
    let randomNumber= Math.floor(Math.random()*hexadecemalNumberSystem.length)
    return  randomNumber

}




generate.addEventListener("click",function(){
    
    let hexCodeForfrist= "#"
    for (let x=0; x<6; x++){
       hexCodeForfrist += hexadecemalNumberSystem[generateRandomNumber()]

       




       
    }
    firstColor.style.backgroundColor=hexCodeForfrist
    fristHexcode.textContent= hexCodeForfrist

   


    let hexCodeForSecond= "#"
    for (let x=0; x<6; x++){
       hexCodeForSecond += hexadecemalNumberSystem[generateRandomNumber()]

       
    }
    secondColor.style.backgroundColor =hexCodeForSecond
    seconHexcode.textContent =hexCodeForSecond

    let hexCodeForThird= "#"
    for (let x=0; x<6; x++){
        hexCodeForThird += hexadecemalNumberSystem[generateRandomNumber()]

       
    }
    thirdColor.style.backgroundColor =hexCodeForThird
    thirdHexcode.textContent =hexCodeForThird

    let hexCodeforForth= "#"
    for (let x=0; x<6; x++){
        hexCodeforForth += hexadecemalNumberSystem[generateRandomNumber()]

       
    }
    forthColor.style.backgroundColor =hexCodeforForth
   forthHexcode.textContent =hexCodeforForth

   let hexCodeforFifth= "#"
    for (let x=0; x<6; x++){
        hexCodeforFifth += hexadecemalNumberSystem[generateRandomNumber()]

       
    }
    fifthColor.style.backgroundColor =hexCodeforFifth
   fifthHexcode.textContent =hexCodeforFifth


   let hexCodeforSix= "#"
   for (let x=0; x<6; x++){
       hexCodeforSix += hexadecemalNumberSystem[generateRandomNumber()]

      
   }
   sixColor.style.backgroundColor =hexCodeforSix
    sixHexcode.textContent =hexCodeforSix




  




})

let reset=document.getElementById("reset-button")

reset.addEventListener("click", function () {
    const colors = [firstColor, secondColor, thirdColor, forthColor, fifthColor, sixColor];
    const hexCodes = [fristHexcode, seconHexcode, thirdHexcode, forthHexcode, fifthHexcode, sixHexcode];

    colors.forEach((color, index) => {
        color.style.backgroundColor = "#D0D0D0";
        hexCodes[index].textContent = "HEX CODE";
    });
})


const history = [];
let historyIndex = -1;


let back = document.getElementById

document.getElementById("back").addEventListener("click", function () {
    if (historyIndex > 0) {
        historyIndex--;
        applyColors(history[historyIndex]);
    }
})