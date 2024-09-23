// donation calculation part for nowakali
document.getElementById('donate-nowakali-btn').addEventListener('click',function(){
    
    getDonateCalculate('donate-nowakali','total-account-balance-nowakali');

});

// donation calculation part for feni
document.getElementById('donate-feni-btn').addEventListener('click',function(){
    
    getDonateCalculate('donate-feni','total-account-balance-feni');

});

// donation calculation part for quota
document.getElementById('donate-quota-btn').addEventListener('click',function(){
    
    getDonateCalculate('donate-quota','total-account-balance-quota');

}); 

// pop-up close button function
document.getElementById('close-pop-up').addEventListener('click',function(){
    const popUpContainer = document.getElementById('pop-up-container');

    popUpContainer.classList.remove('pop-up');
});

// common function for all card calculation
function getDonateCalculate(id,display){
    let totalAccountBalance = parseFloat(document.getElementById('total-account-balance').innerText);
    let totalAccountBalaneNowakali = parseFloat(document.getElementById(display).innerText);
    let donateInputNowakali = parseFloat(document.getElementById(id).value);
    let inputField = document.getElementById(id);

    if(donateInputNowakali <= 0 || donateInputNowakali > totalAccountBalance || inputField.value.trim() == ''){
          
          alert('Sorry! your input is invalid');
          document.getElementById(id).value = '';
          return;
    }

    let totalBalance = totalAccountBalance - donateInputNowakali;
    console.log(totalBalance);
    let totalBalanceNowakali = totalAccountBalaneNowakali + donateInputNowakali;

    document.getElementById('total-account-balance').innerText = totalBalance;
    document.getElementById(display).innerText = totalBalanceNowakali;

    const popUpContainer = document.getElementById('pop-up-container');
    popUpContainer.classList.add('pop-up');
    
    document.getElementById(id).value = '';
};

// fantionality for history button
