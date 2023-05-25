


function arithmetic(val) {


    switch (val) {

        case "+": {

            document.getElementById("sdisplay").value = performAdd();

            break;
        }



    }

    clearDisplay();


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



    document.getElementById("display").value += val;


}

function fullClear() {

    document.getElementById("display").value = "";    
    document.getElementById("sdisplay").value = "";
    
    

}

function clearDisplay() {


    document.getElementById("display").value = "";    


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