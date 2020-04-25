var randam
const Figure = ["circle","diamond","box"]
const main = document.getElementById("main")
function animaR(){
randam =Figure[Math.floor(Math.random() * Figure.length)]
console.log(randam)
makeA()
}
function makeA(){
  div = document.createElement("div");
  main.appendChild(div)
  div.id = "div" + num
  div.classList = randam
  div.style.top = y - vw + "px"
  div.style.left = x - vw + "px"
  setTimeout(function(){
    main.removeChild(main.firstElementChild)
  }, 1000);
}