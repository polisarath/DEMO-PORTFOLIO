// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontent = document.getElementsByClassName("tab-contents");

// function opentab(tabname) {
//   for (tablink of tablinks) {
//     tablinks.classList.remove("active-links");
//   }
//   for (tabcontents of tabcontent) {
//     tabcontent.classList.remove("active-tab");
//   }
// }

var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  // Iterate over tablinks and remove the 'active-links' class
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-links");
  }
  // Iterate over tabcontent and remove the 'active-tab' class
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidebar");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

