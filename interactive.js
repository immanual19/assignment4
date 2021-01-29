// For first (-) "firstClassTicketDecrease"
//For first (+) "firstClassTicketIncrease"
//For first class ticket quantity "firstClassTicketQuantity"

//first Minus start
document.getElementById("firstClassTicketDecrease").addEventListener("click",function(){
    
    decreaseQuantity("firstClassTicketQuantity");
})
//first Minus End

//first plus start

document.getElementById("firstClassTicketIncrease").addEventListener("click",function(){
    increaseQuantity("firstClassTicketQuantity");
})

//first plus end

//For second (-)  "economyClassTicketDecrease"
//For second (+)  "economyClassTicketIncrease"
//For economy class ticket quantity "economyClassTicketQuantity"

//second minus starts
document.getElementById("economyClassTicketDecrease").addEventListener("click",function(){
    decreaseQuantity("economyClassTicketQuantity");
})

//second minus ends

//second plus starts
document.getElementById("economyClassTicketIncrease").addEventListener("click",function(){
    increaseQuantity("economyClassTicketQuantity");
})
//second plus ends

//calculation starts
function calculation(){
    const quantity1=document.getElementById("firstClassTicketQuantity").value;
    const quantity2=document.getElementById("economyClassTicketQuantity").value;
    const subTotal=(quantity1*150)+(quantity2*100);
    const tax=(quantity1*15)+(quantity2*10);
    const total=subTotal+tax;
    document.getElementById("subTotal").innerText=subTotal;
    document.getElementById("totalTax").innerText=tax;
    document.getElementById("total").innerText=total;
}
//calculation ends

//function to increase Quantity starts here

function increaseQuantity(id){
    const quantity=document.getElementById(id).value;
    document.getElementById(id).value=parseInt(quantity)+1;
    calculation();
}

//function to increase Quantity ends here

//function to decrease quantity starts here

function decreaseQuantity(id){
    const quantity=document.getElementById(id).value;
    if(quantity>0)
    {
        document.getElementById(id).value=quantity-1;
    }
    else
    {
        document.getElementById(id).value=0;
    }
    calculation();
}

//function to decrease quantity ends here


