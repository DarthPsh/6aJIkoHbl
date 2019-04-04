function form(windowSettings) {

  let message = {
      loading: "тыр-тыр-тыр... бип-бип-бип...",
      success: "Спасибо за заявку, за Вами уже выехали...",
      failure: "Что-то поломалось..."
  };

  //Формы на сайте
  let freeMasterForms = document.querySelectorAll(".main_form");
    freeMasterForms.forEach(form => {
    sendForm(form);
  });

  // Формы модальных окон "Обратного звонка"
  let popupForm = document.querySelector(".popup form");
  sendForm(popupForm);

  // Формы модальных окон "Вызов замерщика"
  let popupEngineerForm = document.querySelector(".popup_engineer form");
  sendForm(popupEngineerForm);

  // Формы модальных окон "Отправка калькулятора"
  let popupCalcEndForms = document.querySelector(".popup_calc_end form");
  sendForm(popupCalcEndForms, windowSettings);

  function sendForm(form, object = null) {
    let statusMessage = document.createElement("div"),
      curentFormInputs = form.querySelectorAll("input");

    form.addEventListener("submit", event => {
      event.preventDefault();
      form.appendChild(statusMessage);
      let formData = new FormData(form);
      
      function clearInput(inputs) {
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].value = "";
        }
        statusMessage.innerHTML = "";
      }
      
      postData(formData, object)
        // .then(() => statusMessage.innerHTML = message.loading)
        .then(() => {
          statusMessage.innerHTML = message.success;
        })
        .catch(() => statusMessage.innerHTML = message.failure)
        .then(clearInput(curentFormInputs))
        .then(clearObject(object))
        .then(setTimeout(() => {
          statusMessage.innerHTML = message.buy;
          }, 4 * 1000));
    });
  }

  function postData(data, object = null) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      request.open("POST", "server.php");
      request.setRequestHeader("Content-Type", "aplication/json charset=utf-8");
      let json = formDataToJSON(data, object);
      request.onreadystatechange = () => {
        if (request.readyState == 4) {
          if (request.status == 200) {
            resolve();
          } else {
            reject();
          }
        }
      };
      request.send(json);
    });
  }

  

  function formDataToJSON(formData, object = null) {
    let obj = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });
    if (object) {
      return JSON.stringify(Object.assign(object, obj));
    } else {
      return JSON.stringify(obj);
    }
  }

  

  function clearObject(object) {
    object = {};
  }


}

module.exports = form;

