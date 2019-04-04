function modal() {

  let btnEngineer = document.querySelector(".popup_engineer_btn"),
    modalEngineer = document.querySelector(".popup_engineer"),
    btnClose = document.querySelectorAll(".popup_close"),
    btnPhoneLink = document.querySelectorAll(".phone_link"),
    modal = document.querySelector(".popup");


  //Модальное окно вызова

  btnEngineer.addEventListener("click", (e) => {
    e.preventDefault();
    modalEngineer.style.display = "block";
    document.body.parentElement.style.overflow = "hidden";
  });

  modalEngineer.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("popup_close") || target.parentNode.classList.contains("popup_close") || target.classList.contains("popup_engineer")) {
      modalEngineer.style.display = "none";
      document.body.parentElement.style.overflow = "";
    }
  });



  //Модальные окна popup

  btnPhoneLink.forEach(function(btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.parentElement.style.overflow = "hidden";
      modal.style.display = "block";
    });
  });

  modal.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("popup_close") || target.parentNode.classList.contains("popup_close") || target.classList.contains("popup")) {
      modal.style.display = "none";
      document.body.parentElement.style.overflow = "";
    }
  });


  //Модальное окно при посещении сайта более 60 секунд

  setTimeout(() => {
    modal.style.display = "block";
    document.body.parentElement.style.overflow = "hidden";
  }, 61000);


  // закрытие модальных окон при нажатии только на крестик

  // btnClose.forEach(function(btn) {
  //  btn.addEventListener("click", () => {
  //    modalEngineer.style.display = "none";
  //    modal.style.display = "none";
  //    document.body.parentElement.style.overflow = "";
  //  });
  // });

}

module.exports = modal;