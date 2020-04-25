var x,y,vw
var num = 0
window.onload = function(){
  vw = window.innerWidth / 2;
}
document.getElementsByTagName( "body","div" )[0].onclick = function( event ) {
	x = event.pageX
  y = event.pageY
  num++
  console.log("x " + x)
  console.log("y " + y)
  console.log("num " + num)
  console.log(y - vw + "px")
  console.log(x - vw + "px")
  animaR()
}