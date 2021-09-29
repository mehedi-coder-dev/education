var navbar = document.querySelector(".navbars_click");
var dropdowns = document.querySelectorAll(".dropdowns");
var dropdowns1 = document.querySelector(".dropdowns1");
var catagorise = document.querySelector(".categories");
catagorise.addEventListener("click", function () {
  document.querySelector(".sub_categories").classList.toggle("show");
});
navbar.addEventListener("click", function () {
  document.querySelector(".main_nav").classList.toggle("show_main_menu");
});

dropdowns.forEach(function (data) {
  data.querySelector("a").innerHTML += '<i class="fas fa-chevron-down"></i>';
  data.addEventListener("click", function () {
    this.querySelector(".submenu").classList.toggle("show_sub_menu1");
  });
});

document.querySelector(".dropdowns1 a").innerHTML += '<i class="fas fa-chevron-down"></i>';
dropdowns1.addEventListener("click", function () {
  this.querySelector(".home_sub").classList.toggle("show_sub_menu");
});

// // header section
// var topnavbar = document.querySelector(".bottom_header")
// window.onscroll = function(){
//     var top = window.scrollY;
//     if(top >= 100){
//        topnavbar.classList.add("topnavbar")
//     }else{
//         topnavbar.classList.remove("topnavbar")
//     }
// }
