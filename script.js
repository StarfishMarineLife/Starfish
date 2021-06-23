openMenu = document.getElementById("openMenu");
let state = {'open':false};

function toggleMenu(){
  if(state.open == false){
    let menu = document.getElementById('slideMenu');
    menu.classList.add("slideOut");
    console.log("menu open");
    state.open = true;
    menu.classList.remove("slideIn")
    return true;
  }
  else{
    let menu = document.getElementById('slideMenu');
    menu.classList.add("slideIn");
    console.log("menu open");
    state.open = false;
    menu.classList.remove("slideOut")
    return true;
  }
}


openMenu.addEventListener('click', toggleMenu);



//presale countdown

function updateTime(){
  var countDownDate = new Date("Jul 10, 2021 0:0:0").getTime();
  var now = new Date().getTime();
  var timeleft = countDownDate - now;
    
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  let element = document.getElementById("presaleCountDown");
  element.innerHTML = ""+days+" days <br>"+hours+" hours "+minutes+"m "+seconds+"s";
}
setInterval(updateTime, 1000);