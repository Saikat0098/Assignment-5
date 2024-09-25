function amountInputValue(id){
    const inputAmount = document.getElementById(id).value;
    const NewInputAmount = parseFloat(inputAmount);
    return NewInputAmount ; 
}

function donationGetTextValue (id){
    const textValue = document.getElementById(id).innerText;
    const newTextValue = parseFloat(textValue);
    return newTextValue ; 
}