document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amount=getInputValueById('amount-number');
    const pin=getInputValueById('pin-number');
    console.log(amount,pin);
    const accountNumber=document.getElementById('account-number').value;
    const mainBalance=getInnerTextById('main-balance');
    const selectBank=document.getElementById('allbank').value;
    
    if(amount<0){
        alert("Invalid ! Input valid Amount");
        return;
    }
    if(accountNumber.length===11 && accountNumber==01797440737){
        if(pin===1234){
             const sum=mainBalance+amount;
             //document.getElementById('main-balance').innerText=sum;
             setInnerTextByIDandValue("main-balance",sum);

            const container=document.getElementById('transaction-container');
            const div =document.createElement('div');
            div.classList.add('bg-red-300')
            div.innerHTML=`
               <h1">Added money from ${selectBank}</h1>
               <h3>Amount : ${amount}</h3>
               <p>Account Number :${accountNumber}</p> 
            `
            container.appendChild(div)
            alert("Added Successful");
           /* const p=document.createElement("p");
            p.innerText=`
             added ${amount} from ${accountNumber} account

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