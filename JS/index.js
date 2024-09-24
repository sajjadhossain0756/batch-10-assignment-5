// donation calculation part for nowakali
document.getElementById('donate-nowakali-btn').addEventListener('click',function(){
    
    getDonateCalculate('donate-nowakali','total-account-balance-nowakali','femine-2024 at Nowakhali');

});

// donation calculation part for feni
document.getElementById('donate-feni-btn').addEventListener('click',function(){
    
    getDonateCalculate('donate-feni','total-account-balance-feni','Flood Relief at Feni');

});

// donation calculation part for quota
document.getElementById('donate-quota-btn').addEventListener('click',function(){
    
    getDonateCalculate('donate-quota','total-account-balance-quota','Aid for Injured in the Quota Movement');

}); 


// common function for all card calculation
function getDonateCalculate(id,display,title){
    let totalAccountBalance = parseFloat(document.getElementById('total-account-balance').innerText);
    let totalCardAccountBalane = parseFloat(document.getElementById(display).innerText);
    let cardInputField = parseFloat(document.getElementById(id).value);
    let inputField = document.getElementById(id);
    
    // cardInput field validation
    if(cardInputField <= 0 || cardInputField > totalAccountBalance || inputField.value.trim() == ''){
          
          alert('Sorry! your input is invalid');
          document.getElementById(id).value = '';
          return;
    }

    let totalBalance = totalAccountBalance - cardInputField;
    console.log(totalBalance);
    let totalCardBalance = totalCardAccountBalane + cardInputField;

    document.getElementById('total-account-balance').innerText = totalBalance.toFixed(2);
    document.getElementById(display).innerText = totalCardBalance.toFixed(2);
    
    // history section function
    const historyPart = document.getElementById('history-part');
    const divEl = document.createElement('div');
    divEl.classList.add('lg:mx-24','p-8','border-2','my-8','rounded-xl');
    historyPart.appendChild(divEl);
    const h2El = document.createElement('h2');
    h2El.classList.add('font-bold','text-2xl','pb-4');
    const pEl = document.createElement('p');
    pEl.innerText = new Date();

    h2El.innerText = `${cardInputField}taka is donated for ${title},Bangladesh`;
    divEl.appendChild(h2El);
    divEl.appendChild(pEl);
     
    // pop-up open function
    const popUpContainer = document.getElementById('pop-up-container');
    popUpContainer.classList.add('pop-up');
    
    document.getElementById(id).value = '';
};

// pop-up close button function
document.getElementById('close-pop-up').addEventListener('click',function(){
    const popUpContainer = document.getElementById('pop-up-container');

    popUpContainer.classList.remove('pop-up');
});

// fantionality for history button
document.getElementById('history-btn').addEventListener('click',function(){
    const historyBtn = document.getElementById('history-btn');
    const donationBtn = document.getElementById('donation-btn');
    const cardContainer = document.getElementById('donation-card');
    const historyPart = document.getElementById('history-part');
    

    historyBtn.classList.add('bg-[#B4F461]');
    cardContainer.classList.add('hidden');
    donationBtn.classList.remove('bg-[#B4F461]');
    historyPart.classList.remove('hidden');
})

// fantionality for donation button
document.getElementById('donation-btn').addEventListener('click',function(){
    const historyBtn = document.getElementById('history-btn');
    const donationBtn = document.getElementById('donation-btn');
    const cardContainer = document.getElementById('donation-card');
    const historyPart = document.getElementById('history-part');

    historyBtn.classList.remove('bg-[#B4F461]');
    cardContainer.classList.remove('hidden');
    donationBtn.classList.add('bg-[#B4F461]');
    historyPart.classList.add('hidden');
})

// fantionality for blog button;
document.getElementById('blog-btn').addEventListener('click',function(){
     
    window.location.href = './blog.html';
   
});

