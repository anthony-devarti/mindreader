class Page {
    //these should be empty so they can be filled in by the extenstions
    constructor(header, next, helper, nav)  {  
    this.header = header,
        //font and formatting?  Something else?
    this.next = next
        //basic definition of the next button and with no definition
    this.helper = helper;
        //font and formatting is universal
    this.nav = nav
        /*functions that describe the 2 behaviors the button should have?  maybe this should be left empty here and defined in the subclass instead, since the functions would only be used once anyway*/
        // go to pg2()
        // return to pg1()
    }


}
// let p1 = new Page
// Page.header = "I can read your Mind"
// Page.next = hidden
// Page.helper = hidden
// Page.nav = "GO"

//case break to differentiate between page numbers?


let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "|"]

let nineSymbol = randomSymbol();

function hide(id){
    document.getElementById(id).style.display="none"
}

function reveal(id) {
    document.getElementById(id).style.display="block"
}

function eventClear(button) {
    document.getElementById(button).removeEventListener("click", page1);
    document.getElementById(button).removeEventListener("click", page2);
    document.getElementById(button).removeEventListener("click", page3);
    document.getElementById(button).removeEventListener("click", page4);
    document.getElementById(button).removeEventListener("click", page5);
    document.getElementById(button).removeEventListener("click", page6);
};

let arr=[]

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
    nav.innerHTML = "Return";
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
    nav.innerHTML = "Return";
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
    nav.innerHTML = "Return";
    eventClear("nav");
    document.getElementById("nav").addEventListener("click", page1)
}

function page5() {     
    hide("headerText")
    reveal("scroll")
    generateArr();
    let scroll = document.getElementById("scroll")
    scroll.innerHTML = arr.toString() //replace this with the functioning scroller built earlier. maybe have it reveal a scroll box that was always there. 
    let next = document.getElementById("next")
    next.innerHTML = "Reveal"
    eventClear("next");
    document.getElementById("next").addEventListener("click", page6)
    let helper = document.getElementById("helper")
    helper.innerHTML = "Find your new number. Note the symbol beside the number"
    let nav = document.getElementById("nav")
    nav.innerHTML = "Return";
    eventClear("nav");
    document.getElementById("nav").addEventListener("click", page1)
}

function page6(){
    hide("scroll");
    reveal("headerText");
    let headerText = document.getElementById("headerText")
    headerText.innerHTML = nineSymbol
    hide("next")
    let helper = document.getElementById("helper")
    helper.innerHTML = "Your symbol is: \n" + nineSymbol;
    let nav = document.getElementById("nav")
    nav.innerHTML = "Return";
    eventClear("nav");
    document.getElementById("nav").addEventListener("click", page1)
}

function shuffle(array){
    let m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);

        t = array(m);
        array[m] = array[i];
        array[i] = t
    }
    return array
}

function mod9(x) {
    if (x%9 ===0)
    return true
}


//something here that writes random symbols next to everything.
    //replace the @ symbol with the result of the random symbol
    
    // arr = arr.map(i => "#" + i);
function generateArr() {
    for (i=0; i<100; i++) {
        if (i%9===0) {
            i=> "<br>" + nineSymbol + ' : ' + i;
            } else {
                i=> "<br>" + randomSymbol() + ' : ' + i;
            }
            arr.push(i);        
        }
        
    }

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function randomSymbol(){
    let result = getRandomInt(14);
    return symbols[result];
}



page1();

