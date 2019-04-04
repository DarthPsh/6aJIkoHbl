function timer() {

  // ТАЙМЕР

  let deadline = "2019-12-18";

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor( (t / 1000) % 60),
      minutes = Math.floor( (t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      days = Math.floor(t / (1000 * 60 * 60 * 24));


    return {
      "total" : t,
      "days" : days,
      "hours" : hours,
      "minutes" : minutes,
      "seconds" : seconds
    };
  };

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);


    function updateClock() {
      let t = getTimeRemaining(endtime);
      days.innerHTML = t.days;
      hours.innerHTML = ("0" + t.hours).slice(-2);
      minutes.innerHTML = ("0" + t.minutes).slice(-2);
      seconds.innerHTML = ("0" + t.seconds).slice(-2);



      if (t.total <= 0) {
        clearInterval(timeInterval);
      };
      if (t.total < 0) {
        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";
      };
    };
  };

  setClock("timer", deadline);




};

module.exports = timer;
