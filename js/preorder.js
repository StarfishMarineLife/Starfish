let arbitrary_amount = 50;
let max_amount = 3000;

function PopUp(){
    document.getElementById('presaleAlert').style.display="none"; 
}

$(document).ready(function() {
  $("#rate").html(`1 Starfish = $${arbitrary_amount}`);
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
  })
  setTimeout(function(){PopUp();},1000); //1 second from page load
});