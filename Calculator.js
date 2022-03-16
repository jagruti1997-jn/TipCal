//calculate tip
function calculateTip() {
    var billamt = document.getElementById("billAmt").value;
    var serviceQual = document.getElementById("service").value;
    var numOfPeople = document.getElementById("SharingBill").value;

    //validate input
    if(billamt == "" || serviceQual == 0){
        alert("Please enter values");
        return;
    }

    //check to input

    if( numOfPeople == "" || numOfPeople <=1) {
        numOfPeople=1;
        document.getElementById("each").style.display ="none";
    }else{
        document.getElementById("each").style.display = "block";
    }

    //calculate tip 
    var total = (billamt * serviceQual) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) /100;
    //next line us to always have two digits after decimal point
    total = total.toFixed(2);
    //display tip
    document.getElementById("totalTip").style.display= "block";
    document.getElementById("tip").innerHTML = total;
}
//hide the tip amount on load

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


//click to call function
document.getElementById("calculate").onclick = function()
{
  calculateTip();
};





