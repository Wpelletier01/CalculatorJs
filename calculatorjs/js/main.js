


function arithmetic(val) {


    switch (val) {

        case "+": {

            document.getElementById("sdisplay").value = performAdd();

            break;
        }



    }

    setInitVal();
    

}

function equal() {


    document.getElementById("display").value = performAdd()

    document.getElementById("sdisplay").value = "";


}

function addDot() {

    var disp = getDisplayVal()


    if (!disp.includes(".")) {

        document.getElementById("display").value += ".";

    }


}

function addNum(val) {

    if (getDisplayVal() == "0") {

        clearDisplay();

    }

    document.getElementById("display").value += val;


}

function fullClear() {

    document.getElementById("display").value = "";    
    document.getElementById("sdisplay").value = "";
    
    

}

function clearDisplay() {


    document.getElementById("display").value = "";    


}

function setInitVal() {

    document.getElementById("display").value = "0"; 


}


function getDisplayVal() {


    return document.getElementById("display").value;

}

function getSmallDispVal() {

    return document.getElementById("sdisplay").value;

}

function performAdd() {

    return Number(getSmallDispVal()) + Number(getDisplayVal()) 


}
