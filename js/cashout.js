document.getElementById('cashout-btn').addEventListener('click',function(event){
      event.preventDefault();
      const accountNumber=document.getElementById('account-number').value;
      const cashoutAmount=getInputValueById('cashout-amount');
      const pin=getInputValueById('cashout-pin');
      const mainBalance=getInnerTextById('main-balance');
       if(cashoutAmount>mainBalance){
        alert("Invalid ! Input valid Amount");
        return;
    }

      if(accountNumber.length===11){
        if(pin===1234){
             const sum=mainBalance-cashoutAmount;
             setInnerTextByIDandValue("main-balance",sum);
             const container=document.getElementById('transaction-container');

            const div =document.createElement('div');
            div.classList.add('bg-red-300')
            div.innerHTML=`
               <h3>Amount : ${cashoutAmount}</h3>
               <p>cashout ${cashoutAmount} from ${accountNumber} account</p> 
            `
            container.appendChild(div)



            /* 
            const p=document.createElement("p");
            p.innerText=`
             cashout ${cashoutAmount} from ${accountNumber} account

            `
             container.appendChild(p) */
            
        }else{
             alert("Please! Give me valid pin");
        }

    }
    else{
        alert("Please! Give me valid Account number");
    }

})