var mapLink = document.querySelector(".full-map-link");
var mapFull = document.querySelector(".modal-map");
var mapClose = document.querySelector(".map-close");
var writeLink = document.querySelector(".about-contacts-btn");
var writeForm = document.querySelector(".popup-form");
var formClose = document.querySelector(".form-close");
var buyLink = document.querySelectorAll(".buy-btn"),
index, btn;
var buyWindow = document.querySelector(".add-to-cart");
var cartClose = document.querySelector(".cart-close");
var userName = document.querySelector("[name=user-name]");
var userEmail = document.querySelector("[name=user-email]");
var userMessage = document.querySelector("[name=message]");

if (mapLink) {
  mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapFull.classList.add("window-show");
  });
}

if (mapClose) {
  mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapFull.classList.remove("window-show");
  });
}

if (writeLink) {
  writeLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    writeForm.classList.add("window-show");
  });
}

if (writeForm) {
  writeForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userEmail.value) {
  evt.preventDefault();
  writeForm.classList.remove("modal-error");
  writeForm.offsetWidth = writeForm.offsetWidth;
  writeForm.classList.add("modal-error");
  }
  });
}

if(formClose) {
  formClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    writeForm.classList.remove("window-show");
    writeForm.classList.remove("modal-error");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapFull && mapFull.classList.contains("window-show")) {
      mapFull.classList.remove("window-show");
    }
    if (writeForm && writeForm.classList.contains("window-show")) {
      writeForm.classList.remove("window-show");
    }
    if (buyWindow && buyWindow.classList.contains("window-show")) {
      buyWindow.classList.remove("window-show");
    }
  }
});

for (index = 0; index < buyLink.length; index++) {
  btn = buyLink[index];
  btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyWindow.classList.add("window-show")});
}


if (cartClose) {
  cartClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyWindow.classList.remove("window-show");
  });
}
