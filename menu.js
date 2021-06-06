const active = document.querySelector(".corpo__menu__links__a");

active.addEventListener("click", function() {
   console.log("crl");
   this.classList.add("active");

});
