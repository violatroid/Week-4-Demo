function getReceipt(days, wantsToll, wantsGPS, wantsRoadSide, isUnderAge){

    return `
    Car rental: ${carRental}
        Options: ${optionsSubtotal}
Under 25 surcharge: ${surchargeAmount}        `
}

document.addEventListener("DOMContentLoaded", ()=>{
    const pickupDate = document.getElementById("pickupDate");
    const numberOfDays = document.getElementById("numberOfDays");

    const toll = document.getElementById("toll");
    const GPS = document.getElementById("GPS");
    const roadside = document.getElementById("roadside");

    const notUnder = document.getElementById("notUnder");
    const isUnder = document.getElementById("isUnder");

    const estimateButton = document.getElementById("estimateButton");

    const receiptOutput = document.getElementById("receiptOutput");

    estimateButton.addEventListener("click", ()=>{
        receiptOutput.innerText = getReceipt(
            numberOfDays.value, 
            toll.ariaChecked,
            GPS.checked, 
            roadside.checked, 
            isUnderAge.checked, 

        );
    });
});