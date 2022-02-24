class Page {
    Header_text:
        //font and formatting?  Something else?
    Next_button:
        //basic definition of the next button and with no definition
    helper_text:
        //font and formatting
    nav_button:
        /*functions that describe the 2 behaviors the button should have?  maybe this should be left null here and defined in the subclass instead, since the functions would only be used once anyway*/
        go to pg2()
        return to pg1()
}

     home extends page {
        Header text: I can read your Mind
        Next button: hidden
        helper text: hidden
        nav button:  "GO" goes to pg 2
    }

    subclass basic {
        header text: text
        next button: goes to page this++
        helper text: reminder text about the current task
        nav button: "span refresh icon" goes to pg 1
    }

    subclass scroll {
        header text: text with scroll option
        next button: goes to page this++
        helper text: "your symbol is:" symbol
        nav button: goes to pg this++
    }

    subclass end {
        header text: symbol = map[9 symbols]
        next button: hidden
        helper text: "your Symbol is:" + symbol
        //the symbols should change each time, by randomizing the symbols assigned to each number.  Some sort of object with numberical properties?
        //somehow, don't show the same symbol as the last time
    }

Symbols [
    "1":"!", 
    "2":"@", 
    "3":"#", 
    "4":"$", 
    "5":"%", 
    "6":"^", 
    "7":"&", 
    "8":"*", 
    "9":"("
    //how to go about scrambling these?
    //this apparently needs to be 100 symbols
    //case breaks?
    //probably want to get everything working with this section just being plain text at first, then work on this part later
    //a shuffler function like this? https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    //no need to make each number show a unique symbol.  They can all be truly randomized and associated to a specific number.
]

shuffler(){

}

scroller() {

}
let page1 = new Page()
page1.header = "I can Read your Mind"
page1.next = hidden //a function to hide this button
page1.helper = hidden
page1.nav = "GO"

let page2 = new Page()
page2.header = "Pick a number from 01-99"
page2.next = "Next"
page2.helper = "When you have your number click next
page2.nav = refresh

[page1, page2, page3, page4, page5, page6]

//
