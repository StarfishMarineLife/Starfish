function updateTime(){
  var countDownDate = new Date("Aug 1, 2021 0:0:0").getTime();
  var now = new Date().getTime();
  var timeleft = countDownDate - now;
    
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  let element = document.getElementById("presaleCountDown");
  element.innerHTML = ""+days+" Days "+hours+" H "+minutes+" M "+seconds+"s";
}
setInterval(updateTime, 1000);