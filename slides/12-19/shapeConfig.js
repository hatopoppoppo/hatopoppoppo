function widthshape() {
var textValue = document.getElementById("input-width").value
document.getElementById("Sselect").style.width = textValue + "%"
}
function heightshape() {
  var textValue = document.getElementById("input-height").value
  document.getElementById("Sselect").style.height = textValue + "%"
}
function lineshape() {

}
function colorshape() {

}
function linecolorshape() {

}
function removeshape() {
  document.getElementById("shape-config").style.display = "none"
  var remove = document.getElementById("Sselect")
  remove.parentNode.removeChild(remove);
}