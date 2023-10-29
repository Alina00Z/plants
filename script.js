"use strict";
  //City accordion
const formCity = document.getElementsByClassName("contacts-city-form")[0];
const valuesCity = document.getElementsByClassName('contacts-city-form-value');
const wrapperCity = document.getElementsByClassName('accordion-wrapper-city')[0];
const buttonAcc = document.getElementsByClassName("accordion-city")[0];
  buttonAcc.addEventListener("click", function() {
    buttonAcc.classList.toggle("active-accordion");
    wrapperCity.classList.toggle("active-wrapper");
  });
  
const cityInfo = [
  {'City': 'Canandaigua, NY', 'Phone': '+1	585	393 0001', 'Office adress': '151 Charlotte Street'},
  {'City': 'New York City', 'Phone': '+1	212	456 0002', 'Office adress': '9 East 91st Street'},
  {'City': 'Yonkers, NY', 'Phone': '+1	914	678 0003', 'Office adress': '511 Warburton Ave'},
  {'City': 'Sherrill, NY', 'Phone': '+1	315	908 0004', 'Office adress': '14 WEST Noyes BLVD'},
];
function selectCity(li) {
  for (let i = 0; i < cityInfo.length; i++) {
    if (li.firstElementChild.innerHTML == cityInfo[i].City) {
      valuesCity[0].innerHTML = cityInfo[i].City;
      valuesCity[1].innerHTML = cityInfo[i].Phone;
      valuesCity[2].innerHTML = cityInfo[i]["Office adress"];
      buttonAcc.parentElement.parentElement.style.transform = "translateY(-39px)";
      formCity.classList.add('active');
      wrapperCity.classList.remove('active-wrapper');
      buttonAcc.classList.remove('active-accordion')
      break;
    }
  }
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


// function openAccordionCity(acc) {
//   acc.classList.toggle("active-accordion");
//   const wrapper = acc.nextElementSibling;
//   wrapper.classList.toggle("active-wrapper");
// }
// function fillFormCity() {
//   const values = document.getElementsByClassName('contacts-city-form-value');
//   for (let i = 0; i < cityInfo.length; i++) {
//     if (li.firstElementChild.innerHTML == cityInfo[i].City) {
//       values[0].innerHTML = cityInfo[i].City;
//       values[1].innerHTML = cityInfo[i].Phone;
//       values[2].innerHTML = cityInfo[i]["Office adress"];
//       break;
//     }
//   }
// }
function changeBurger(burger) {
  burger.classList.toggle('change');
  burger.previousElementSibling.classList.toggle('open-nav');
}
const cards = document.getElementsByClassName('service-card');
function filterCards(t) {
  let title;
  for (let i = 0; i < cards.length; i++) {
    title = cards[i].firstElementChild.firstElementChild.title;
    if (title != t) {
      cards[i].classList.add('blur');
    } else  {
      cards[i].classList.remove('blur');
    }
    
  }
}

