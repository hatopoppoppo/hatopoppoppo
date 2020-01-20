function textselect() {
  removeselect()
  event.stopPropagation();
  document.getElementById("text-config").style.display = "flex"
  Target = event.target
  Target.setAttribute("id", "Tselect")
  document.getElementById("input-fontsize").value = document.getElementById("Tselect").style.fontSize.replace("%", "")
  document.getElementById("input-text").value = Target.textContent
}
function shapeselect() {
  removeselect()
  event.stopPropagation();
  document.getElementById("shape-config").style.display = "flex"
  Target = event.target
  Target.setAttribute("id", "Sselect")
  document.getElementById("input-width").value = document.getElementById("Sselect").style.width.replace("%", "")
  document.getElementById("input-height").value = document.getElementById("Sselect").style.height.replace("%", "")
}
function removeselect() {
  if (document.getElementById("Tselect")){
    document.getElementById("Tselect").removeAttribute("id", "Tselect")
    document.getElementById("input-fontsize").value = ""
    document.getElementById("input-text").value = ""
    document.getElementById("text-config").style.display = "none"
  }
  else if(document.getElementById("Sselect")){
    document.getElementById("shape-config").style.display = "none"
  document.getElementById("Sselect").removeAttribute("id", "Sselect")
  document.getElementById("input-width").value = ""
  document.getElementById("input-height").value = ""
  }
}