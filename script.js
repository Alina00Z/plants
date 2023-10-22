$(document).ready(function() {
  "use strict" ;

  const buttonAcc = document.getElementsByClassName("accordion");
  for (let i = 0; i < buttonAcc.length; i++) {
    buttonAcc[i].addEventListener("click", function() {
      buttonAcc[i].classList.toggle("active-accordion");

      const wrapper = buttonAcc[i].nextElementSibling;
      wrapper.classList.toggle("active-wrapper");
    })
  }

});