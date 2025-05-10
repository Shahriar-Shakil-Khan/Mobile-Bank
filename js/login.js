document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const Account=document.getElementById('account-number').value;
    const pinNumber=document.getElementById('pin-number').value;
    const convertedPinNumber=parseInt(pinNumber);
    if(Account.length===11){
         
         if(convertedPinNumber===1234){
           
            window.location.href="./main.html"

         }else{
            alert('Please!valid Pin')
         }

    }
    else{
          alert('Please!valid Account number') 
    }  
  
})