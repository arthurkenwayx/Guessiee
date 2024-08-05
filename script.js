'use strict'

const btn = document.querySelector(".icon");
const letGo = document.querySelector(".btn");
const left = document.querySelector(".first");
const right = document.querySelector(".second");
const val = document.querySelector(".value");
const img = document.querySelector(".changeable");
const text = document.querySelector(".text");
const ham = document.querySelector('.ham');
const side = document.querySelector('.side');
const ln = document.querySelector(".line");
const el = document.createElement("button");

el.textContent = "Marry Me";
el.classList.add("marry_me");
btn.addEventListener("click",()=> {
    left.classList.toggle("passive-left");
    right.classList.toggle("passive-right");
    btn.classList.toggle("go-top");
});
const randomNumber = Math.floor(Math.random()*1000);
letGo.addEventListener("click",()=> {
    const userValue = val.value;
    if(userValue>randomNumber) {
        img.src = "03.jpg";
        text.textContent = "BRUH, Are you sure about this? (Entered Value is too high)";
    }
    else if(userValue<randomNumber) {
        img.src = "02.jpg";
        text.textContent = "Alright, Iam losing my patience arghhh... (Entered Value is too low";
    }
    else if(userValue == randomNumber) {
        img.src = "gege.jpg";
        text.textContent = "Finally phew!!, damm, I thought you would never make it bruh. Congratz anyways, now you can marry me uhm...";
      text.appendChild(el);
      btn.textContent = "Play Again?";
      btn.addEventListener("click",()=> {
        location.reload();
      })
    }
})

el.addEventListener("click",()=> {
    text.textContent = "Bruh! Iam 16, Go away shoo shoo weird man! (FBI OPEN UP)";
    img.src = "weirdgeman.jpg";
})

ham.addEventListener('click', function () {
       
    ham.style.margin = "5px 0px 0px 260px"
    if (side.style.left === '0px') {
        side.style.left = '-250px'; 
btn.style.display = "block";
        ham.style.margin = "5px 0px 0px 5px";
    } else {
        side.style.left = '0px'; 
        btn.style.display = "none"; 
    }
});







// --------- SUBMITTING ON ENTER KEY -------

val.addEventListener("keypress", (event)=> {
    if(event.key === "Enter") {
        event.preventDefault();
        letGo.click();
    }
})