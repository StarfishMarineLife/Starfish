let arbitrary_amount = 0.00004;
let max_amount = 10;
let price = 0;

$(document).ready(function() {
  $("#rate").html(`1 Starfish = ${arbitrary_amount} BNB`);
  $("#go").click(function() {
    let amount = Number($("#investment-amount").val());
    if (amount > 0 && amount <= max_amount){
      document.getElementById("coins").value=amount/arbitrary_amount;
      document.getElementById("price").style.color = "#00000000";
    }
    else if (amount < 0 || amount*arbitrary_amount > max_amount){
      $("#price").html(`Enter an amount between 0 and ${max_amount}.`)
      document.getElementById("price").style.color = "#ff0000";
    }
  });

  document.getElementById("investment-amount").addEventListener('change', ()=>{
    $("#coins").val((Number($("#investment-amount").val())/arbitrary_amount).toFixed(7).replace(/\.?0+$/, ''));
  });
  document.getElementById("coins").addEventListener('change', ()=>{
    $("#investment-amount").val((Number($("#coins").val())*arbitrary_amount).toFixed(7).replace(/\.?0+$/, ''));
  });
  
  $("#investment-amount").keyup(function () {
    $("#coins").val((Number($("#investment-amount").val())/arbitrary_amount).toFixed(7).replace(/\.?0+$/, ''));
  });
  
  $("#coins").keyup(function () {
    $("#investment-amount").val((Number($("#coins").val())*arbitrary_amount).toFixed(7).replace(/\.?0+$/, ''));
  });
});    
