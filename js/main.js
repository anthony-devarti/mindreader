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


let headerText = document.getElementById("headerText")
headerText.innerHTML ="I can read your mind"
console.log(headerText.innerHTML);

let headerText = document.getElementById("headerText")
headerText.innerHTML = "Pick a Number from 01-99"