document.getElementById("donate-noakhali-btn").addEventListener("click" , function(){
   
    const donateNoakhaliInput = amountInputValue("donation-input-noakhali")
    const donationAmountNoakhali = donationGetTextValue("donation-amount-noakhali");
    const mainBalance = donationGetTextValue("main-balance");
    
    




    if(donateNoakhaliInput > mainBalance || mainBalance <0 ){
        alert("not enough money for donation");
        return ;
    }
     if(isNaN (donateNoakhaliInput) || donateNoakhaliInput <= 0 ){
        alert("invalid donation try again ");
        return;
     }

    //  if(donateNoakhaliInput > 0 && donateNoakhaliInput <= donationAmountNoakhalim ){
    //     const modal = document.getElementById("myModal");
    //     modal.showModal();


        
    //  }
 
    const donationDisplay = donateNoakhaliInput + donationAmountNoakhali ; 
    document.getElementById("donation-amount-noakhali").innerText = donationDisplay ; 
     document.getElementById("donation-input-noakhali").value = "";
     const NewMainBalance = mainBalance - donationDisplay ; 
     document.getElementById("main-balance").innerText = NewMainBalance ; 
  
    //  history

    const historySection = document.getElementById("history-display");
    const historyContainer = document.createElement("div");
    historyContainer.className = " p-6 border-[1px] border-gray-500 h-28 rounded-md mt-3";

    historyContainer.innerHTML = `
       <p class="">${donateNoakhaliInput} TK Is Donated for Flood at Noakhali Bangladesh </p>
       <p class="mt-4">${date = new Date()}</p>
    `
     historySection.appendChild(historyContainer)
    // const p = document.createElement(p).innerText;

 
})

document.getElementById("donate-feni-btn").addEventListener("click" , function(){
     
    const donateFeniInput = amountInputValue("donation-input-feni")
    const donationAmountFeni = donationGetTextValue("donation-amount-feni");
    const mainBalance = donationGetTextValue("main-balance");

    // checker
    
    if(donateFeniInput > mainBalance || mainBalance <0 ){
        alert("not enough money for donation");
        return ;
    }
     if(isNaN (donateFeniInput) || donateFeniInput <= 0 ){
        alert("invalid donation try again ");
        return;
     }

        const donationDisplay = donateFeniInput + donationAmountFeni ; 
        document.getElementById("donation-amount-feni").innerText = donationDisplay ; 
         document.getElementById("donation-input-feni").value = "";
         const NewMainBalance = mainBalance - donationDisplay ; 
         document.getElementById("main-balance").innerText = NewMainBalance ; 
   
        //  history
        const historySection = document.getElementById("history-display");
        const historyContainer = document.createElement("div");
        historyContainer.className = " p-6 border-[1px] border-gray-500 h-28 rounded-md mt-3";
    
        historyContainer.innerHTML = `
           <p class="">${donateFeniInput} TK Is Donated for Flood at Feni Bangladesh </p>
           <p class="mt-4">${date = new Date()}</p>
        `
         historySection.appendChild(historyContainer)
  
})

document.getElementById("donate-quota-btn").addEventListener("click" , function(){
     
    const donateQuotaInput = amountInputValue("donation-input-quota")
    const donationAmountFeni = donationGetTextValue("donation-amount-quota");
    const mainBalance = donationGetTextValue("main-balance");

    // checker
    
    if(donateQuotaInput > mainBalance || mainBalance <0 ){
        alert("not enough money for donation");
         return ;
    }
     if(isNaN (donateQuotaInput) || donateQuotaInput <= 0 ){
        alert("invalid donation try again ");
        return;
     }

     
    //  if (donateQuotaInput > 0 || donateQuotaInput <= mainBalance){
    //     document.getElementById('myModal').showModal();


    //  }
    
    const donationDisplay = donateQuotaInput + donationAmountFeni ; 
    document.getElementById("donation-amount-quota").innerText = donationDisplay ; 
     document.getElementById("donation-input-quota").value = "";
     const NewMainBalance = mainBalance - donationDisplay ; 
     document.getElementById("main-balance").innerText = NewMainBalance ; 

    //  history

    const historySection = document.getElementById("history-display");
    const historyContainer = document.createElement("div");
    historyContainer.className = " p-6 border-[1px] border-gray-500 h-28 rounded-md mt-3";

    historyContainer.innerHTML = `
       <p class="">${donateQuotaInput} TK Is Donated for Flood at Quota Bangladesh </p>
       <p class="mt-4">${date = new Date()}</p>
    `
     historySection.appendChild(historyContainer)
})

// History BTN

historyBtn = document.getElementById("history-btn");
historyBtn.addEventListener("click" , function(){
      historyBtn.classList.add('bg-[#B4F461]' , 'border-none')  
     document.getElementById("donation-btn").classList.add('bg-white' , 'color-black' , 'border-[1px]' , 'border-gray-600' ) ;

     const mainSection = document.getElementById("donation-main-section");
     mainSection.classList.add("hidden")

     document.getElementById("history-display").classList.remove("hidden");

    
    const donateNoakhaliInput = amountInputValue("donation-input-noakhali")
    donateNoakhaliInput.p ;



    
})

// donation Btn 

    const donationBtn = document.getElementById("donation-btn");
    donationBtn.addEventListener("click" , function(){
    historyBtn.classList.remove('bg-[#B4F461]' , 'border-none') ; 
    donationBtn.classList.remove('bg-white' , 'color-black' ,  ) ;
    
    const mainSection = document.getElementById("donation-main-section");
    mainSection.classList.remove("hidden")

    document.getElementById("history-display").classList.add("hidden");
    



})

// blogs 
const blogsBtn = document.getElementById("blogs-btn");
blogsBtn.addEventListener("click" , function(event){
     
})

