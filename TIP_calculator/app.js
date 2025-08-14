//ITMD 540 SAI ABHSIEHK YELURI

// Dom objects creation
const bill_entered=document.querySelector("#bill_total");
const tip=document.querySelector("#tip");
const  bill_tax=document.querySelector("#bill_total_withTax");
const currency=document.querySelector("#currency");
const converted=document.querySelector("#converted");
const converted_total=document.querySelector("#converted_tax");
const error=document.querySelector("#error");
const billInput = document.getElementById("bill_total");
       

let str=""
let tax=0



// input change fucntion written
  function inputChange()  {
    const value = billInput.value;

    if (value === "") {
      error.innerText = "";
    } else if (Number(value) < 0 || isNaN(value)) {
      error.innerText = "Please enter a valid positive number for the bill total.";
    } else {

        let billno=Number(value);
        let tax=(billno/100)*11;
        let billTax=billno+tax;
        //console.log(billTax);
        bill_tax.value=billTax.toFixed(2);

        if(tip.value>=0){
            let tip_given=Number((billTax/100)*Number(tip.value)).toFixed(2);
            console.log(tip_given);
        
        

        if(currency.value==="Euro"){
            let euro=billTax*0.95
            let tip_euro=(tip_given *0.95).toFixed(2);
            console.log()
            converted.value=tip_euro
            console.log(euro)
            converted_total.value=(Number(euro)+Number(tip_euro)).toFixed(2)
        }else if(currency.value==="Rupee"){
            let rupee=billTax*85
            let tip_rupee=(tip_given*85).toFixed(2);
            converted.value=tip_rupee;
            console.log(rupee)
            converted_total.value=(Number(rupee)+Number(tip_rupee)).toFixed(2);
        }else if(currency.value==="Dollars"){
            converted.value=Number(tip_given).toFixed(2);
            converted_total.value=(Number( billTax)+ Number(tip_given)).toFixed(2);
            
        }
    }




    
      error.innerText = "";
    }
}

// event listeners add to tip currency change bill entered
tip.addEventListener("input",inputChange)

currency.addEventListener("input",inputChange);

billInput.addEventListener("input", inputChange,);
