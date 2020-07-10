var writeUs = document.querySelector('.add__btn');
var popupWriteUs = document.querySelector('.modal__quest');
var closeWriteUs = popupWriteUs.querySelector('.modal__close');
var formWriteUs = popupWriteUs.querySelector('.modal__form');
var userName = popupWriteUs.querySelector('.modal__user-name');
var userEmail = popupWriteUs.querySelector('.modal__user-email');
var userMessage = popupWriteUs.querySelector('.modal__user-message');
var inputWriteUs = popupWriteUs.querySelectorAll('input');
var textareaWriteUs = document.querySelector('textarea');

writeUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupWriteUs.classList.add("modal__show");
    userName.focus();
});
closeWriteUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupWriteUs.classList.remove("modal__show");
    inputWriteUs[0].value ="";
    inputWriteUs[1].value ="";
    textareaWriteUs.value ="";
});
formWriteUs.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value || !userMessage.value) {
      evt.preventDefault();
    } 
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupWriteUs.classList.contains("modal__show")) {
        evt.preventDefault();
        popupWriteUs.classList.remove("modal__show");
        inputWriteUs[0].value ="";
        inputWriteUs[1].value ="";
        textareaWriteUs.value ="";
      }
    }
  });

var map = document.querySelector('.add__map'); 
var popupMap = document.querySelector('.modal__map');  
var closeMap = popupMap.querySelector('.modal__close');
  
map.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal__show");
});
closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal__show");
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupMap.classList.contains("modal__show")) {
        evt.preventDefault();
        popupMap.classList.remove("modal__show");
      }
    }
  });

// var addInCart = document.querySelector('.products__btn-cart'); 
// var popupAddInCart = document.querySelector('.modal__product');
// var closeCart = popupAddInCart.querySelector('.modal__close');

// addInCart.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     popupAddInCart.classList.add("modal__show");
// });
// closeCart.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     popupAddInCart.classList.remove("modal__show");
// });


