var textValue
movetext()
function maketext(){
  var p = document.createElement('p');
    p.className = "text";
    p.textContent =　"あああああ";
    document.getElementById("slide").appendChild(p);
    p.style.fontSize = "16%"
    p.onclick = selecttext
    movetext()
}
function makeshape(){
  var shape = document.createElement('div');
    shape.className = "shape";
    document.getElementById("slide").appendChild(shape);
}
 
function movetext(){
  $( '.text' ) . draggable( {
      containment: '#slide',
      scroll: false,
  } )
}
function selecttext(){
  event.stopPropagation();
  if(document.getElementById("Tselect")){
    document.getElementById("Tselect").removeAttribute("id","Tselect")
  }
  console.log("select追加")
  Target = event.target
  Target.setAttribute("id","Tselect")
  document.getElementById("input-fontsize").value = document.getElementById("Tselect").style.fontSize.replace("%","")
  document.getElementById("input-text").value = Target.textContent
}
function removeselect(){
  document.getElementById("Tselect").removeAttribute("id","select")
  document.getElementById("input-fontsize").value　= ""
  document.getElementById("input-text").value =  ""
}

function changetext(){
  var textValue = document.getElementById("input-text").value
  document.getElementById("Tselect").textContent = textValue
}
function changeTsize(){
  var textValue = document.getElementById("input-fontsize").value
  document.getElementById("Tselect").style.fontSize = textValue + "%"
}
function boldtext(){
  document.getElementById("Tselect").style.fontWeight = "bold"
}
function removetext(){
  var remove = document.getElementById("Tselect")
  remove.parentNode.removeChild(remove);
}
function aligntext(){
  document.getElementById("Tselect").style.width = "calc(70vw - 5px)"
  document.getElementById("Tselect").style.textAlign = "center"
  document.getElementById("Tselect").style.left = ".5vw"
}
function colortext(){
  document.getElementById("Tselect").style.color = "#364e96"
}