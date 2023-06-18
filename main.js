const inputElemnt = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButto = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

//Função para converter as unidades

function convert(){
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if(fromValue === toValue){
        outputElement.value = inputElemnt.value;
        messageElement.textContent = "";
        return;
    }

    //Converter a entrada para metros

    switch(fromValue){
        case "m":
            meters = inputElemnt.value;
            break;
        case "km":
            meters = inputElemnt.value * 1000;
            break;
        case "cm":
            meters = inputElemnt.value / 100;
            break;
        case "mm":
            meters = inputElemnt.value / 1000;
            break;
    }

    // Converter metros para unidade de saída

    let result;
    switch(toValue){
        case "m":
            result = meters;
            break;
        case "km":
            result = meters / 1000;
            break;
        case "cm":
            result = meters * 100;
            break;
        case "mm":
            result = meters * 1000;
            break;
    }

    // Exibir resultado no input
    outputElement.value = result;

    // Exibir resultado na mensagem

    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;

    const message = `${inputElemnt.value} ${fromLabel} equivalem a ${result} ${toLabel}`;
    messageElement.textContent = message;
    return;

    
}

convertButto.addEventListener("click", convert);