

const DEFAULT_DISPLAY = "0";


const OPERATION = {

    Add:        "+",
    Sub:        "-",
    Multiply:   "*",
    Divide:     "/",
    Modulo:     "%",
    Equal:      "=",
    None:       "Na"

}

localStorage.setItem("memory","0")
localStorage.setItem("pbuffer","0");
localStorage.setItem("last_operation","Na")


function addNumber(num) {

    if (getDisplay() == DEFAULT_DISPLAY) {

        setDisplay("");

    }  

    pushToDisplay(num);

}

function arithmetic(operation) {


    var rep = ""

    if (getpBuffer() == "0" || getLastOperation() == OPERATION.Equal) {

        rep = getDisplay();

    } else {
            
        
        switch(operation) {
            
            case OPERATION.Add: {
        
                rep = sum();
                break;
        
            }
        
            case OPERATION.Sub: {
                 
                rep = sub();
                break;
        
            }
        
            case OPERATION.Multiply: {
    
                rep = multiply();
                break;
    
            }

            case OPERATION.Divide: {

                rep = divide();
                break;
            }

            case OPERATION.Modulo: {

                rep = modulo();
                break;
            }
        
    
    
    
        }
            
        

    }

    setpBuffer(rep);
    
    setLastOperation(operation);

    setDisplay(DEFAULT_DISPLAY);

    setSmallDisplay(getpBuffer());
    

}



function equal() {

    var rep = ""

    switch (getLastOperation()) {

        case OPERATION.Add : {
            
            rep = sum();    
            break;
        }

        case OPERATION.Sub:  {

            rep = sub()
            break;

        }

        case OPERATION.Multiply: {

            rep = multiply();
            break;

        }

        case OPERATION.Divide: {

            rep = divide();
            break;

        }

        case OPERATION.Modulo: {

            rep = modulo();
            break;

        }


    }

    setpBuffer(rep);
    setDisplay(rep);

    setSmallDisplay("");

    setLastOperation(OPERATION.Equal);

}


// invert the sign of the number stor in the display
function invertSign() {

    if (getDisplay().includes("-")) {
        
        // When the display is empty
        if (getDisplay() == "-") {

            setDisplay(DEFAULT_DISPLAY);

        } else {

            setDisplay(getDisplay().replace("-",""));

        }
        

    } else {

        // When the display is empty
        if (getDisplay() == "0") {

            setDisplay("-");

        } else {

            setDisplay( "-" + getDisplay());
        }
     

    }

}


/*  clear buffer and display value and set to their default value
*   trigger when press C button
*/
function clearCalc() {

    setpBuffer("0");
    setDisplay(DEFAULT_DISPLAY);
    setSmallDisplay("");
    setMemory(0);
    

}


// add pi to the display or multiply with the current value in the display
function pi() { 


    if (getDisplay() == DEFAULT_DISPLAY) {

        setDisplay(Math.PI);

    } else {

        setDisplay(String(Number(getDisplay())*(Math.PI)));

    }

}

// perform power of 2 in the number in the current display
function sqr() { setDisplay(Math.pow(getDisplay(),2)); }


// perform power of n in the number in the current display
function msqr() { 

    // #TODO: to implement;
    setDisplay("not yet implemented"); 

}
// perform square root of the number in the display
function sqrt() { setDisplay(Math.sqrt(getDisplay())); }
// perform arithmetic between the number store in the buffer and the one in the current display
function sum() { return (Number(getpBuffer())) + Number(getDisplay()); }
function sub() { return Number(getpBuffer()) - Number(getDisplay()); }
function multiply() { return Number(getpBuffer()) * Number(getDisplay()); }
function divide() { return  Number(getpBuffer()) / Number(getDisplay()); }
function modulo() { return  Number(getpBuffer()) % Number(getDisplay());}
//
/*
* 
    Function to remove boilerplate code
*
*/
//
// change the whole value on the display
function setDisplay(val) { document.getElementById("display").value = val; }
// add char at the end of the display
function pushToDisplay(num) { document.getElementById("display").value += num; }
// get the current value in the display
function getDisplay() { return document.getElementById("display").value; }
// store a value in the pbuffer
function setpBuffer(val) { localStorage.setItem("pbuffer",val); }
// get the current value in the pbuffer
function getpBuffer() { return localStorage.getItem("pbuffer"); }
// set a value to display in the small display
function setSmallDisplay(val) { document.getElementById("sdisplay").value = val; }
// store a new operation in memory
function setLastOperation(operation) { localStorage.setItem("last_operation", operation); }
// get the last operation in memory
function getLastOperation() { return localStorage.getItem("last_operation")}