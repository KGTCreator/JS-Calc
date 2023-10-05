let preVal = ''
let newVal = ''
let resultVal = ''
let mathOperator = ''

// Store wether or not decimal was clicked
// (only allow one decimal per value)
let decimalClicked = false

// Hold values we want stored in memory
let valMemStored = ''


function numButPress(num) {
    //Check if a number has already been clicked
    if(resultVal){
        //start a new number
        newVal = num
        //reset to create a new result
        resultVal = ''
    } else {
        //Used to block multiple decimals
        if (num === '.'){
            if(decimalClicked != true){
                //Take the current value of newVal
                //and add the character pressed
                newVal = newVal + num
                //Sets decimal check var to true, want allow more
                decimalClicked = true
            }
        } else {
            newVal += num
        }
    }
//update the display
document.getElementById('entry').value = newVal
}

function mathButPress(operator){
 if(!resultVal){
    preVal = newVal
 }else{
    // If there is a current result store that as
    // the previous value entered
    preVal = resultVal
 }
// Restart creation of new number
 newVal = ''
 //Reset decimalClicked
 decimalClicked = false
 // Store operator clicked
 mathOperator = operator
 // Prepare entry for recieving new numbers
 resultVal = ''
 document.gerElementById('entry').value = ''
}

function equalButPress(){
    //Reset decimalClicked
    decimalClicked = false

    preval = parseFloat(preVal)
    newval = parseFloat(newVal)

    // Perform calculations based on stored operator
    switch (mathOperator){
        case '+':
            resultVal = preVal + newVal
            break
            case '-':
            resultVal = preVal - newVal
            break
        case '*':
            resultVal = preVal * newVal
            break
            case '/':
            resultVal = preVal / newVal
            break
            //If equals is hit without an operator
            // leave everything as is
            default:
                resultVal = newVal
    }
// store the current value as the previous so that
// I can expect to next value in the calculation
preVal = newVal
// Put the calculation result in the entry window
document.getElementById('entry').value = resultVal
}

//clears everything EXCEPT memory
function clearButPress(){
preVal = ''
newVal = ''
resultVal = ''
mathOperator = ''
decimalClicked = false
document.getElementById('entry').value = '0'
}
//store the current value in "enty" in valMemStored
function copyButPress(){
    valMemStored = document.getElementById('entry').value
}
// If a value has been stored paste it in the #entry
//window and assign its as the newVal
function pasteButPress(){
    if (valMemStored) {
        document.getElementById('entry').value = valMemStored
        newVal = valMemStored
    }
}