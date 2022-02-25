let symbols = ["!", "@", "=", "$", "%", "^", "&", "*", "+",];

let arr=[]



function attachSymbols(){
for (let i=1; i<100; i++){
    arr = arr.map(i => symbols[i%symbols.length] + " : " + i + "<br>");
    return arr
}}

function generateArr() {
    
    for (let i=0; i<100; i++) {
        arr.push(i)
        
    }
    return arr;
}

function hide(id){
    document.getElementById(id).style.display="none"
}

function reveal(id) {
    document.getElementById(id).style.display="block"
}
//my solution to trash event listeners to clear them out
function eventClear(button) {
    document.getElementById(button).removeEventListener("click", page1);
    document.getElementById(button).removeEventListener("click", page2);
    document.getElementById(button).removeEventListener("click", page3);
    document.getElementById(button).removeEventListener("click", page4);
    document.getElementById(button).removeEventListener("click", page5);
    document.getElementById(button).removeEventListener("click", page6);
};


function page1() {
    hide("next");
    hide("helper");
    hide("scroll");
    let headerText = document.getElementById("headerText");
    headerText.innerHTML = "I can read your mind";
    let nav = document.getElementById("nav");
    nav.innerHTML = "Go";
    eventClear("nav")
    document.getElementById("nav").addEventListener("click", page2);
}

function page2() {
    let headerText = document.getElementById("headerText");
    headerText.innerHTML = "Pick a number from 01-99";
    reveal("next");
    next.innerHTML = "Next";
    document.getElementById("next").removeEventListener("click", page2)
    document.getElementById("next").addEventListener("click", page3);
    reveal("helper");
    helper.innerHTML = "When you have your number, click next";
    let nav = document.getElementById("nav")
    nav.innerHTML = '<i class="bi bi-arrow-counterclockwise"></i>';
    eventClear("nav");
    document.getElementById("nav").addEventListener("click", page1)
}

function page3() {
    let headerText = document.getElementById("headerText")
    headerText.innerHTML = "Add both digits together to get a new number"
    let next = document.getElementById("next")
    reveal("next");
    next.innerHTML = "Next"
    document.getElementById("next").removeEventListener("click", page3)
    document.getElementById("next").addEventListener("click", page4)
    let helper = document.getElementById("helper")
    helper.innerHTML = "ex: 14 is 1+4=5"
    let nav = document.getElementById("nav")
    nav.innerHTML = '<i class="bi bi-arrow-counterclockwise"></i>';
    eventClear("nav");
    document.getElementById("nav").addEventListener("click", page1)
}

function page4() {
    let headerText = document.getElementById("headerText")
    headerText.innerHTML = "Subtract your new number from the original number"
    let next = document.getElementById("next")
    reveal("next");
    next.innerHTML = "Next"
    eventClear("next");
    document.getElementById("next").addEventListener("click", page5)
    let helper = document.getElementById("helper")
    helper.innerHTML = "Ex: 14-5=9"
    let nav = document.getElementById("nav")
    nav.innerHTML = '<i class="bi bi-arrow-counterclockwise"></i>';
    eventClear("nav");
    document.getElementById("nav").addEventListener("click", page1)
}

function page5() {
    arr = []     
    hide("headerText")
    reveal("scroll")
    generateArr();
    shuffle(symbols);
    attachSymbols();
    let scroll = document.getElementById("scroll");
    scroll.innerHTML = arr.toString();
    let next = document.getElementById("next");
    next.innerHTML = "Reveal";
    eventClear("next");
    document.getElementById("next").addEventListener("click", page6)
    let helper = document.getElementById("helper")
    helper.innerHTML = "Find your new number. Note the symbol beside the number"
    let nav = document.getElementById("nav")
    nav.innerHTML = '<i class="bi bi-arrow-counterclockwise"></i>';
    eventClear("nav");
    document.getElementById("nav").addEventListener("click", page1)
}
//fix symbol number
function page6(){
    hide("scroll");
    reveal("headerText");
    let headerText = document.getElementById("headerText")
    headerText.innerHTML = symbols[0]
    hide("next")
    let helper = document.getElementById("helper")
    helper.innerHTML = "Your symbol is: \n" + symbols[0];
    let nav = document.getElementById("nav")
    nav.innerHTML = '<i class="bi bi-arrow-counterclockwise"></i>';
    eventClear("nav");
    document.getElementById("nav").addEventListener("click", page1)
}
//fischer-yates shuffler
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }





page1();

