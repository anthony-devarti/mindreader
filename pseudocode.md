class Page {
    Header_text:
        //font and formatting?  Something else?
    Next_button:
        //basic definition of the next button and with no definition
    helper_text:

    nav_button:
        /*functions that describe the 2 behaviors the button should have?  maybe this should be left null here and defined in the subclass instead, since the functions would only be used once anyway*/
        go to pg2()
        return to pg1()
}

    subclass home page {
        Header text: I can read your Mind
        Next button: null
        helper text: null
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
        helper text: "your symbol is:"
        nav button: goes to pg this++
    }

    subclass end {
        header text: symbol = map[9 symbol]
        next button: null
        helper text: "your Symbol is:" + symbol
        //the symbols should change each time, by randomizing the symbols assigned to each number.  Some sort of object with numberical properties?
        //somehow, don't show the same symbol as the last time
    }
