//   Filename: main.js
//  Author:   Yoonseo Choi
//   Date:     2022.12.09


function showVal()
{

var loanAmount=document.fincalc.amount.value;
while(loanAmount=="" || Number(loanAmount)<0 || Number(loanAmount)==0)
{
//prompting user for a value only positive
loanAmount=prompt("Please enter a positive value for a loan amount");
}
var rate=parseFloat(document.fincalc.interest.value);
rate=rate/100;
var e = document.getElementById("time");
var time = e.options[e.selectedIndex].value;
time=Number(time)*12;
//adding to loan amount based on type user selects
if(document.getElementById("personal").checked)
{
loanAmount=Number(loanAmount)+Number(1000);
}
else if(document.getElementById("business").checked)
{
loanAmount=Number(loanAmount)+Number(500);
}
if(document.fincalc.discount.checked)
{
rate=rate-0.01; //reducing the rate
}
var monthlyPayment=monthly(rate,time,loanAmount);
document.fincalc.payment.value=monthlyPayment.toFixed(2);
var totalPayment=monthlyPayment*time;
document.fincalc.tpayment.value=totalPayment.toFixed(2);
if(Number(monthlyPayment)>5000)
{
// if they exceed a loan amount < over 5000
alert("We need last five years of tax returns for all loans over $5000.00");
}

}
function reload()
//reload button
{
if(confirm("Are you sure you want to reload")) //if pressed ok
{
document.fincalc.amount.value="";
document.fincalc.payment.value="";
document.fincalc.tpayment.value="";
document.fincalc.interest.value=7.5;
document.fincalc.discount.checked=false;
document.getElementById("personal").checked=false; //unchecking checkboxes and radio buttons
document.getElementById("education").checked=false; //unchecking checkboxes and radio buttons
document.getElementById("business").checked=false; //unchecking checkboxes and radio buttons
document.fincalc.time.selectedIndex="0";
}
}
function monthly(I,N,S)
{
return (S*I/12*Math.pow(I/12+1,N))/(Math.pow(I/12+1,N)-1);
}
