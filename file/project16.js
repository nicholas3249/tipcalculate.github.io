





let billAmount =0;
let tipRate =0;
let tipAmount=0;
let totalAmount=0;


let billAmountinput = document.getElementById('bill-amount');
let tipRateinput = document.getElementById('tip-rate');


let calculatebutton= document.getElementById('calculate');

let tipResultScreen = document.getElementById('tip-result');
let totalResultScreen = document.getElementById('total-result');



calculatebutton.addEventListener('click', function() {
    

    billAmount= parseInt (billAmountinput.value);
    tipRate=  parseInt(tipRateinput.value);


    tipAmount=  billAmount *tipRate / 100
    totalAmount= billAmount + tipAmount;

    
    tipResultScreen.innerHTML = tipAmount;
    totalResultScreen.innerHTML = totalAmount;
    




})


















