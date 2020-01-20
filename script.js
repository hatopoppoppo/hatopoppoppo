var parallax , clicknum , modal
var loading = document.getElementById('loading')
var contents = document.getElementById('contents')
var modalImg = document.getElementsByClassName("modal-img")
var modalTxt = document.getElementsByClassName("modal-text")
var projectbox = document.getElementsByClassName("projects")
var close = document.getElementsByClassName("close")
window.onload = function(){
  if(window.innerHeight >= window.innerWidth){
    container = document.getElementById("project-container")
    container.style.width = "100vw"
    container.style.height = "103vw"
    container.style.gridTemplateRows = "18vw 18vw 18vw 18vw 18vw"
    container.style.gap = "2vw"
    for(var i=0; i< modalImg.length;i++){
      modalImg[i].style.width = "100%"
      modalImg[i].style.margin = "1vh 0"
   }
   for(var i=0; i< modalTxt.length;i++){
   modalTxt[i].style.height = "50vh"
   }
  }
  for(let i = 0; i < projectbox.length; i++){
    projectbox[i].addEventListener('click', function(){
      clicknum = i + 1
      modal = document.getElementById('modal-'+ clicknum)
      modal.style.display = "block"
  }, false);
  }
  for(let i = 0; i < close.length; i++){
    close[i].addEventListener('click', function(){
      modal.style.display = "none"
  }, false);
  }
}
window.addEventListener('load', function () {
  loading.classList.add('fadeout');
  setTimeout("endload()", 3000);
})
function endload(){
  loading.style.display = "none"
}
window.onscroll = function(){
  var scrollY = window.pageYOffset
  var windowHeight = window.innerHeight
  parallax = scrollY / windowHeight * 100
  document.getElementById("scroll").innerHTML = Math.round(parallax) + "%"

  if (5 <= parallax && parallax < 25){
    document.getElementById("name").style.marginTop = "-" + parallax/4 + "vh" 
    document.getElementById("name").style.opacity = parallax / 10 - 1
  }
  if (20 <= parallax && parallax < 40){
    document.getElementById("twitter").style.marginTop = "-" + parallax/4 + "vh" 
    document.getElementById("twitter").style.opacity = (parallax - 15) / 10 - 1
  }
  if (25 <= parallax && parallax < 45){
    document.getElementById("qiita").style.marginTop = "-" + (parallax - 5)/4 + "vh" 
    document.getElementById("qiita").style.opacity = (parallax - 20) / 10 - 1
  }
  if (30 <= parallax && parallax < 50){
    document.getElementById("github").style.marginTop = "-" + (parallax - 10)/4 + "vh" 
    document.getElementById("github").style.opacity = (parallax - 25) / 10 - 1
  }
  if (35 <= parallax && parallax < 55){
    document.getElementById("profile").style.marginTop = "-" + parallax/6 + "vh" 
    document.getElementById("profile").style.opacity = (parallax -30) / 10 - 1
  }
  if (50 <= parallax && parallax < 70){
    document.getElementById("skills").style.marginTop = "-" + parallax/10 + "vh" 
    document.getElementById("skills").style.opacity = (parallax - 45) / 10 - 1
  }
  if (55 <= parallax && parallax < 75){
    document.getElementById("skill-container").style.marginTop = "-" + parallax/10 + "vh" 
    document.getElementById("skill-container").style.opacity = (parallax - 50) / 10 - 1
  }
  if (105 <= parallax && parallax < 125){
    document.getElementById("project").style.marginTop = "-" + parallax/10 + "vh" 
    document.getElementById("project").style.opacity = (parallax - 100) / 10 - 1
  }
  if (170 <= parallax){
    document.getElementById("project-container").classList.add("projects-animation")
  }
}

