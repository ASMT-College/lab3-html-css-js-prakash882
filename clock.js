function printDate() {
    document.getElementById("display_clock").innerHTML = Date();
  }
  printDate();
  setInterval(printDate, 1000);
  
  function showTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    document.getElementById("display_time").innerHTML =
      hour + ":" + min + ":" + sec;
  }
  showTime();
  setInterval(showTime, 1000);