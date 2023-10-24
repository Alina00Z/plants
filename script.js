$(document).ready(function() {
  "use strict" ;
  // City accordion
  const buttonAcc = document.getElementsByClassName("accordion");
  for (let i = 0; i < buttonAcc.length; i++) {
    buttonAcc[i].addEventListener("click", function() {
      buttonAcc[i].classList.toggle("active-accordion");

      const wrapper = buttonAcc[i].nextElementSibling;
      wrapper.classList.toggle("active-wrapper");
    })
  }

  // Price accordion-wrapper
  const wrappers = document.getElementsByClassName('accordion-wrapper-btn');
  function removeAllActive() {
    for (let i = 0; i < wrappers.length; i++) {
        wrappers[i].classList.remove('accordion-wrapper-btn-active');
        wrappers[i].firstElementChild.nextElementSibling.classList.remove('accordion-wrapper-line-active');
      };
  }
  for (let i = 0; i < wrappers.length; i++) {
    wrappers[i].addEventListener('click', function() {
      if (wrappers[i].classList.contains('accordion-wrapper-btn-active')) {
        wrappers[i].classList.remove('accordion-wrapper-btn-active');
        wrappers[i].firstElementChild.nextElementSibling.classList.remove('accordion-wrapper-line-active');
      } else {
        removeAllActive();
        wrappers[i].classList.add('accordion-wrapper-btn-active');
        wrappers[i].firstElementChild.nextElementSibling.classList.add('accordion-wrapper-line-active');
      }
    });
    };
});