window.onload = function(){
  var link = document.createElement('link');
		link.href = 'portfolio-l.css';
		link.rel = 'stylesheet';
    link.type = 'text/css';
    link.id = "css-thema";
		var h = document.getElementsByTagName('head')[0];
    h.appendChild(link);
    
  document.getElementById("dark").onclick = function(){
  document.getElementById("css-thema").href = "portfolio-d.css";
  }
  document.getElementById("light").onclick = function(){
  document.getElementById("css-thema").href = "portfolio-l.css";
  }
  }