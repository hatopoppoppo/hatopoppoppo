var a = 0;
var b = 0;
var min = 0;
var sec = 0;
var timersec = 0;
function countupmin() {
  a++;
  if (a < 10) { min = "0" + a }
  else { min = a }
  document.getElementById("min-count").innerHTML = min;
  if (min > 0) { document.getElementById("down-min").style.visibility = "visible" }
  timersec = min * 60
}
function countdownmin() {
  a--;
  if (a < 10) { min = "0" + a }
  else { min = a }
  document.getElementById("min-count").innerHTML = min;
  if (min <= 0) { document.getElementById("down-min").style.visibility = "hidden" }
  timersec = min * 60
}
function countupsec() {
  b++;
  if (b < 10) { sec = "0" + b; }
  else { sec = b; }
  document.getElementById("sec-count").innerHTML = sec;
  if (sec > 0) { document.getElementById("down-sec").style.visibility = "visible" }
  if (sec >= 59) { document.getElementById("up-sec").style.visibility = "hidden" }
  timersec = b + min * 60
}
function countdownsec() {
  b--;
  if (b < 10) { sec = "0" + b; }
  else { sec = b; }
  document.getElementById("sec-count").innerHTML = sec;
  if (sec <= 0) { document.getElementById("down-sec").style.visibility = "hidden" }
  timersec = b + min * 60
}

function startcount() {
  timersec--;
  document.getElementById("up-min").style.visibility = "hidden"
  document.getElementById("down-min").style.visibility = "hidden"
  document.getElementById("up-sec").style.visibility = "hidden"
  document.getElementById("down-sec").style.visibility = "hidden"
  var a = Math.floor(timersec / 60);
  var b = timersec - (60 * a)
  if (a < 10) { min = "0" + a }
  else { min = a }
  if (b < 10) { sec = "0" + b }
  else { sec = b }
  document.getElementById("min-count").innerHTML = min;
  document.getElementById("sec-count").innerHTML = sec;
  document.getElementById("title").innerHTML = min + ":" + sec;
  if (timersec <= 0) { clearInterval(counter),document.getElementById("title").innerHTML = "時間です",　setTimeout(function () { alert("時間です") }, 300) }
  counter = setInterval(count, 1000);
}
function count() {
  timersec--;
  var a = Math.floor(timersec / 60);
  var b = timersec - (60 * a)
  if (a < 10) { min = "0" + a }
  else { min = a }
  if (b < 10) { sec = "0" + b }
  else { sec = b }
  document.getElementById("min-count").innerHTML = min;
  document.getElementById("sec-count").innerHTML = sec;
  document.getElementById("title").innerHTML = min + ":" + sec;
  if (timersec <= 0) { clearInterval(counter),document.getElementById("title").innerHTML = "時間です", setTimeout(function () { alert("時間です") }, 300) }
}
function stopcount() {
  clearInterval(counter)
}
function reset() {
  location.reload()
}
requestAnimationFrame
