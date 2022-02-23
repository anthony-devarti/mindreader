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

     class Home extends Page {
        Header = "I can read your Mind"
        Next = hidden
        helper = hidden
        //nav here goes to page 2.  References the circular button
        nav =  "GO"
    }

    class Basic extends Page {
        header = text
        next = /*goes to next page*/
        helper = reminderText
        nav = button/* refresh icon goes to page 1*/
    }

    class Scroll extends Page {
        header = /*text with scroll option*/
        next = /*goes to next page */ "Reveal"
        helper = "find your new number.  Note the Symbol beside the number"
        nav = button/*refresh icon goes to page 1 */
    }

    class End extends Page{
        header = symbol + map[100 symbols]
        next = hidden
        helper = "your Symbol is:" + symbol
        //the symbols should change each time, by randomizing the symbols assigned to each number.  Some sort of object with numberical properties?
        //somehow, don't show the same symbol as the last time
        nav = button/*refresh icon goes to page 1*/
    }

Symbols [
        //how to go about scrambling these?
    //a shuffler function like this? https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
]



