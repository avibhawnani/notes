const clock = document.querySelector("#clock");

// const date = new Date();
// const hrs = date.getHours();
// const mins = date.getMinutes();
// const secs = date.getSeconds();
// clock.innerHTML = `${hrs}:${mins}:${secs}`

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();

  }, 1000);

