openMenu = document.getElementById("openMenu");
let sidenav_state = {'open':false};

$(document).ready(function() {
  openMenu.addEventListener('click', toggleMenu);
});


function toggleMenu(){
  if(sidenav_state.open == false){
    let menu = document.getElementById('slideMenu');
    menu.classList.add("slideOut");
    console.log("menu open");
    sidenav_state.open = true;
    menu.classList.remove("slideIn")
    return true;
  }
  else{
    let menu = document.getElementById('slideMenu');
    menu.classList.add("slideIn");
    console.log("menu open");
    sidenav_state.open = false;
    menu.classList.remove("slideOut")
    return true;
  }
}