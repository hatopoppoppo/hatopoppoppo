var h, s, l, r, g, b, Colorcode, div, h1, colors1, colors2, colors3, colors4, colors5, text1, text2, text3, text4, text5 ,count
count = 0
function colorchange() {
  if (count == 0) {
    document.getElementById("copy").innerText = "copy"
    h = Math.floor(Math.random() * 361)
    s = Math.floor(Math.random() * 50) + 50
    l = Math.floor(Math.random() * 50) + 50
  }
  else if (count == 1){
    h = Math.floor(Math.random() * 73)
    s = s
    l = l
  }
  else if (count == 2){
    h = Math.floor(Math.random() * 73) + 72
    s = s
    l = l
  }
  else if (count == 3){
    h = Math.floor(Math.random() * 73) + 145
    s = s
    l = l
  }
  else if (count == 4){
    h = Math.floor(Math.random() * 73) + 217
    s = s
    l = l
  }
  else if (count == 5){
    h = Math.floor(Math.random() * 73) + 289
    s = s
    l = l
  }
  hslCalc()
}
function hslCalc() {
  if (l <= 49) {
    max = 2.55 * (l + l * (s / 100))
    min = 2.55 * (l - l * (s / 100))

  }
  else {
    max = 2.55 * (l + (100 - l) * (s / 100))
    min = 2.55 * (l - (100 - l) * (s / 100))
  }

  if (h <= 60) {
    r = max
    g = (h / 60) * (max - min) + min
    b = min
  }
  else if (h <= 120) {
    r = ((120 - h) / 60) * (max - min) + min
    g = max
    b = min
  }
  else if (h <= 180) {
    r = min
    g = max
    b = ((h - 120) / 60) * (max - min) + min
  }
  else if (h <= 240) {
    r = min
    g = ((240 - h) / 60) * (max - min) + min
    b = max
  }
  else if (h <= 300) {
    r = ((h - 240) / 60) * (max - min) + min
    g = min
    b = max
  }
  else if (h <= 360) {
    r = max
    g = min
    b = ((360 - h) / 60) * (max - min) + min
  }
  r = Math.round(r)
  g = Math.round(g)
  b = Math.round(b)
  rgbCalc()
}
function rgbCalc() {
  var colorA = r.toString(16);
  var colorB = g.toString(16);
  var colorC = b.toString(16);

  Colorcode = colorA + colorB + colorC
  if (Colorcode.length == 3) {
    Colorcode = colorA + colorB + colorC + colorA + colorB + colorC
  }
  else if (Colorcode.length <= 5) {
    if (colorA.length == 1) { colorA = "0" + colorA }
    if (colorB.length == 1) { colorB = "0" + colorB }
    if (colorC.length == 1) { colorC = "0" + colorC }
    Colorcode = colorA + colorB + colorC
  }
  Colorcode = "#" + Colorcode
  div = document.getElementById("box")
  h1 = document.getElementById("text")
  colors1 = document.getElementById("color-1")
  colors2 = document.getElementById("color-2")
  colors3 = document.getElementById("color-3")
  colors4 = document.getElementById("color-4")
  colors5 = document.getElementById("color-5")
  text1 = document.getElementById("text-1")
  text2 = document.getElementById("text-2")
  text3 = document.getElementById("text-3")
  text4 = document.getElementById("text-4")
  text5 = document.getElementById("text-5")
  if (count == 0) {
    div.style.backgroundColor = Colorcode
    h1.innerText = Colorcode
    console.log("%c" + Colorcode, "color: " + Colorcode)
    count++
    colorchange()
  }
  else if (count == 1){
    colors1.style.backgroundColor = Colorcode
    text1.innerText = Colorcode
    count++
    colorchange()
  }
  else if (count == 2){
    colors2.style.backgroundColor = Colorcode
    text2.innerText = Colorcode
    count++
    colorchange()
  }
  else if (count == 3){
    colors3.style.backgroundColor = Colorcode
    text3.innerText = Colorcode
    count++
    colorchange()
  }
  else if (count == 4){
    colors4.style.backgroundColor = Colorcode
    text4.innerText = Colorcode
    count++
    colorchange()
  }
  else if (count == 5){
    colors5.style.backgroundColor = Colorcode
    text5.innerText = Colorcode
    count = 0
  }
}