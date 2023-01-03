var href = window.location.href;
var fhd = href.search("#");
var tds = href.slice(fhd);
var d2n = tds.replace("#","");
if (d2n != null) {
  if (d2n === "2112") {
    var element = document.createElement('a');
    element.setAttribute('href', "/auto.html");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  else {
    null
  }
}
else {
  null
}
function readInReader(){
var ed = document.getElementsByClassName('editable-division')[0].innerHTML;
em = ed.toString();
var b, c,d,e,f;
a = em.split(" ");
b = a.join("-");
//b = window.open("/reader.html#"+a);
var element = document.createElement('a');
element.setAttribute('href', "/New-reader/reader.html#"+b);
element.style.display = 'none';
document.body.appendChild(element);
element.click();
document.body.removeChild(element);
}
