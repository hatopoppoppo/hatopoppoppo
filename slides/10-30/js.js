document.onkeydown = keydown;
var pageCount = 1;
now  = document.getElementById('page' + pageCount);
next = document.getElementById('page' + (pageCount + 1));
function keydown(event) {
  if (event.which == 37) {  //left key
    $(".anime-LR").addClass("animation-L")
    setTimeout("slider()", 1440);
    setTimeout("removeAnimationL()", 3500);
  }
  if (event.which === 39) {  //right key
    $(".anime-LR").addClass("animation-R")
    setTimeout("slider()", 1440);
    setTimeout("removeAnimationR()", 3500);
  }
  if (event.which === 38) {  //up key
    $(".anime-UD").addClass("animation-U");
    setTimeout("slider()", 2500);
    setTimeout("removeAnimationU()", 4000);
  }
  if (event.which === 40) {  //bottom key
    $(".anime-UD").addClass("animation-D");
    setTimeout("slider()", 2500);
    setTimeout("removeAnimationD()", 4000);
  }
  if (event.which === 8) {  //bottom key
      pageCount--
      console.log(pageCount)
      now  = document.getElementById('page' + pageCount);
      next = document.getElementById('page' + (pageCount + 1));
      next.style.display  = "none" ;
      now.style.display = "block";
  }
};
function slider() {
  now  = document.getElementById('page' + pageCount);
  next = document.getElementById('page' + (pageCount + 1));
  now.style.display  = "none" ;
  next.style.display = "block";
  pageCount++
  console.log(pageCount)
}
function removeAnimationL() {
  $(".anime-LR").removeClass("animation-L");
}
function removeAnimationR() {
  $(".anime-LR").removeClass("animation-R");
}
function removeAnimationU() {
  $(".anime-UD").removeClass("animation-U");
}
function removeAnimationD() {
  $(".anime-UD").removeClass("animation-D");
}

var dot = 0
function changeColor(newColor){
  if(dot >= 256){}
  else{
    dot++;
    console.log(dot);
    var div = document.createElement('div');
    div.className = newColor;
    document.getElementById('wrapper-dot').appendChild(div);
  }
}
function removeDiv(){
  if(dot <= 0){}
  else{
  dot--;
  console.log(dot);
  var element = document.getElementById('wrapper-dot');
  var removeChild = element.lastElementChild;
  removeChild.remove();
  }
}