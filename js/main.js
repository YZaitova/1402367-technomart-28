// var writeUs = document.querySelector('.add__link');
// var popupWriteUs = document.querySelector('.modal__quest');
// var closeWriteUs = popupWriteUs.querySelector('.modal__close');
// var formWriteUs = popupWriteUs.querySelector('.modal__form');
// var userName = popupWriteUs.querySelector('.modal__user-name');
// var userEmail = popupWriteUs.querySelector('.modal__user-email');
// var userMessage = popupWriteUs.querySelector('.modal__user-message');

// writeUs.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     popupWriteUs.classList.add("modal__show");
//     userName.focus();
// });
// closeWriteUs.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     popupWriteUs.classList.remove("modal__show");
// });
// formWriteUs.addEventListener("submit", function (evt) {
//     if (!userName.value || !userEmail.value || !userMessage.value) {
//       evt.preventDefault();
//     } else {
//         localStorage.setItem("name", userName.value);
//     }
//   });

// var map = document.querySelector('.add__map'); 
// var mapLink = document.querySelector('.contacts-button-map');
// var popupMap = document.querySelector('.modal__map');  
// var mapPopup = document.querySelector('.modal-map');
// var closeMap = popupMap.querySelector('.modal__close');
  
// map.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     popupMap.classList.add("modal__show");
// });
// closeMap.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     popupMap.classList.remove("modal__show");
// });
// window.addEventListener("keydown", function (evt) {
//     if (evt.keyCode === 27) {
//       if (popupMap.classList.contains("modal__show")) {
//         evt.preventDefault();
//         popupMap.classList.remove("modal__show");
//       }
//     }
//   });