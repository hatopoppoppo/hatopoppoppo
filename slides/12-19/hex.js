var h, s, l, r, g, b, Colorcode, div, h1, colors1, colors2, colors3, colors4, colors5, text1, text2, text3, text4, text5, count, value, hex, hexr, hexg, hexb, red, green, blue, rgbmax, rgbmin, rgbh, rgbs, rgbl, rgbl
count = 0
function colorgenerate() {
  value = document.getElementById("text").value
  hex = value.replace('#', '')
  if (hex.length == 3) {
    hexr = hex.substring(0, 1)
    hexg = hex.substring(1, 2)
    hexb = hex.substring(2, 3)
    hex = hexr + hexr + hexg + hexg + hexb + hexb
    hexrgb()
  }
  else if (hex.length <= 5) {
    alert("桁が足りません")
  }
  else if (hex.length >= 7) {
    alert("桁が多いです")
  }
  else {
    hexrgb()
  }
}

function hexrgb() {
  if (hex.match(/[a-fA-F_0-9]{6}/)) {
    hexr = hex.substring(0,2)
    hexg = hex.substring(2, 4)
    hexb = hex.substring(4, 6)
    red = parseInt(hexr, 16)
    green = parseInt(hexg, 16)
    blue = parseInt(hexb, 16)
    rgbmax = Math.max(red, green, blue)
    rgbmin = Math.min(red, green, blue)
    if (red == rgbmax){
      rgbh = 60 * ((green - blue) / (rgbmax - rgbmin))
    }
    else if (green == rgbmax){
      rgbh = 60 * ((blue - red) / (rgbmax - rgbmin)) + 120
    }
    else if (blue == rgbmax){
      rgbh = 60 * ((red - green) / (rgbmax - rgbmin)) + 240
    }
    if (rgbh <= 0){
      rgbh + 360
    }
    rgbl = (rgbmax + rgbmin) / 2
    if (rgbl <= 127){
      rgbs = (rgbmax - rgbmin) / (rgbmax + rgbmin)
    }
    else{
      rgbs = (rgbmax - rgbmin) / (510 - rgbmax - rgbmin)
    }
    rgbs = Math.round(rgbs * 100);
    rgbl = Math.round((rgbl / 255) * 100);  
    colorchange()
    console.log("red    "+ hexr)
    console.log("green  "+ hexg)
    console.log("blue   "+ hexb)
    console.log("red    "+ red)
    console.log("green  "+ green)
    console.log("blue   "+ blue)
    console.log("h      "+ rgbh)
    console.log("s      "+ rgbs)
    console.log("l      "+ rgbl)
    console.log("rgbmax "+ rgbmax)
    console.log("rgmmin "+ rgbmin)
  }
  else {
    alert("カラーコードが間違っています")
  }
}

function colorchange() {
  if (count == 0) {
    h = rgbh
    s = rgbs
    l = rgbl
  }
  else if (count == 1) {
    h = Math.floor(Math.random() * 73)
    s = s
    l = l
  }
  else if (count == 2) {
    h = Math.floor(Math.random() * 73) + 72
    s = s
    l = l
  }
  else if (count == 3) {
    h = Math.floor(Math.random() * 73) + 145
    s = s
    l = l
  }
  else if (count == 4) {
    h = Math.floor(Math.random() * 73) + 217
    s = s
    l = l
  }
  else if (count == 5) {
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
    console.log("%c" + Colorcode, "color: " + Colorcode)
    count++
    colorchange()
  }
  else if (count == 1) {
    colors1.style.backgroundColor = Colorcode
    text1.innerText = Colorcode
    count++
    colorchange()
  }
  else if (count == 2) {
    colors2.style.backgroundColor = Colorcode
    text2.innerText = Colorcode
    count++
    colorchange()
  }
  else if (count == 3) {
    colors3.style.backgroundColor = Colorcode
    text3.innerText = Colorcode
    count++
    colorchange()
  }
  else if (count == 4) {
    colors4.style.backgroundColor = Colorcode
    text4.innerText = Colorcode
    count++
    colorchange()
  }
  else if (count == 5) {
    colors5.style.backgroundColor = Colorcode
    text5.innerText = Colorcode
    count = 0
  }
}