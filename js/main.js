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

let pages = [page1, page2, page3, page4, page5, page6];


switch (pages) {
    case page1 :
        let headerText = document.getElementById("headerText")
        headerText.innerHTML = "I can read your mind"
        let next = document.getElementById("next")
        next.innerHTML = "hidden" //replace this with the way to make the button hidden
        let helper = document.getElementById("helper")
        helper.innerHTML = "hidden"  //replace this with the way to make the text hidden
        let nav = document.getElementById("nav")
        nav.innerHTML = "Go";
        break;

    case page2 :
        let headerText = document.getElementById("headerText")
        headerText.innerHTML = "Pick a number from 01-99"
        let next = document.getElementById("next")
        next.innerHTML = "Next"
        let helper = document.getElementById("helper")
        helper.innerHTML = "when you have your number click next"
        let nav = document.getElementById("nav")
        nav.innerHTML = "Return";
        break;

    case page3 :
        let headerText = document.getElementById("headerText")
        headerText.innerHTML = "Add both digits together to get a new number"
        let next = document.getElementById("next")
        next.innerHTML = "Next"
        let helper = document.getElementById("helper")
        helper.innerHTML = "ex: 14 is 1+4=5"
        let nav = document.getElementById("nav")
        nav.innerHTML = "Return";
        break;

    case page4 :
        let headerText = document.getElementById("headerText")
        headerText.innerHTML = "Subtract your new number from the original number"
        let next = document.getElementById("next")
        next.innerHTML = "Next"
        let helper = document.getElementById("helper")
        helper.innerHTML = "Ex: 14-5=9"
        let nav = document.getElementById("nav")
        nav.innerHTML = "Return";
        break;

    case page5 :    
        let headerText = document.getElementById("headerText")
        headerText.innerHTML = "Symbol Map" //replace this with the functioning scroller built earlier
        let next = document.getElementById("next")
        next.innerHTML = "Reveal"
        let helper = document.getElementById("helper")
        helper.innerHTML = "Find your new number. Note the symbol beside the number"
        let nav = document.getElementById("nav")
        nav.innerHTML = "Return";
        break;

    case page6 :
        let headerText = document.getElementById("headerText")
        headerText.innerHTML = "&"
        let next = document.getElementById("next")
        next.innerHTML = "hidden" //replace this with the way to make the button hidden
        let helper = document.getElementById("helper")
        helper.innerHTML = "Your symbol is: &"
        let nav = document.getElementById("nav")
        nav.innerHTML = "Return";
        break;
}


