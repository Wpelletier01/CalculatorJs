

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

function invertSign() {

    if (getDisplay().includes("-")) {
        
        if (getDisplay() == "-") {

            setDisplay(DEFAULT_DISPLAY);

        } else {

            setDisplay(getDisplay().replace("-",""));

        }
        

    } else {

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

function pi() { 

    if (getDisplay() == DEFAULT_DISPLAY) {

        setDisplay(Math.PI);

    } else {

        setDisplay(Number(getDisplay)*(Math.PI));

    }



}

function sqr() { setDisplay(Math.pow(getDisplay(),2)); }

function msqr() { setDisplay("not yet implemented"); }

function sqrt() { setDisplay(Math.sqrt(getDisplay())); }

function sum() { return (Number(getpBuffer())) + Number(getDisplay()); }

function sub() { return Number(getpBuffer()) - Number(getDisplay()); }

function multiply() { return Number(getpBuffer()) * Number(getDisplay()); }

function divide() { return  Number(getpBuffer()) / Number(getDisplay()); }

function modulo() { return  Number(getpBuffer()) % Number(getDisplay());}

/*
* 
    Function to remove boilerplate code
*
*/

// change the whole value on the display
function setDisplay(val) { document.getElementById("display").value = val; }

// add char at the end of the display
function pushToDisplay(num) { document.getElementById("display").value += num; }

function getDisplay() { return document.getElementById("display").value; }

function setpBuffer(val) { localStorage.setItem("pbuffer",val); }

function getpBuffer() { return localStorage.getItem("pbuffer"); }

function setMemory(val) { return localStorage.setItem("memory",val); }

function getMemory() { return localStorage.getItem("memory"); }

function setSmallDisplay(val) { document.getElementById("sdisplay").value = val; }

function setLastOperation(operation) { localStorage.setItem("last_operation", operation); }

function getLastOperation() { return localStorage.getItem("last_operation")}