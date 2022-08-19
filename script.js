document.getElementById('btnDeposite').addEventListener('click', function(){
   const depositeString = document.getElementById('deposite');
   const takeDepositeString = depositeString.value;
   const firstStringToNumber = parseFloat(takeDepositeString);

   const depositeStringTwo = document.getElementById('depositeAmount');
   const takeDepositeStringTwo = depositeStringTwo.innerText;
   const secondStringToNumber = parseFloat(takeDepositeStringTwo);
   const firstSecond = secondStringToNumber + firstStringToNumber;

   depositeAmount.innerText = firstSecond;

   const depositeTotal = document.getElementById('finalAmount');
   const takeDepositeTotal = depositeTotal.innerText;
   const thirdStringToNumber = parseFloat(takeDepositeTotal);
   const depositeCodeFinal = firstStringToNumber + thirdStringToNumber;

   finalAmount.innerText = depositeCodeFinal;

   depositeString.value='';
})

document.getElementById('btnwithdraw').addEventListener('click', function(){
   const withdrawString = document.getElementById('withdraw')
   const takeWithdrawString = withdrawString.value;
   const forthStringToNumber = parseFloat(takeWithdrawString);

   const withdrawStringTwo = document.getElementById('withdrawAmount')
   const takeWithdrawStringTwo = withdrawStringTwo.innerText;
   const fifthStringToNumber = parseFloat(takeWithdrawStringTwo);
   const forthFifth = fifthStringToNumber + forthStringToNumber ;

   withdrawAmount.innerText=forthFifth;

   const withdrawTotal = document.getElementById('finalAmount');
   const takingWithdrawTotal = withdrawTotal.innerText;
   const sixthStringToNumber = parseFloat(takingWithdrawTotal);
   const withdrawCodeFinal = sixthStringToNumber - forthFifth;

   finalAmount.innerText = withdrawCodeFinal;
   
   withdrawString.value='';
})