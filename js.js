//one day i made a reader.html
// it was just for reading what you have written in index.html as it had 'book like' UI and was much pleasent to use 
// the data from index.html was shared through link to reader.html
// the syntax was like /reader.html#everythin-written-here-will-be-shown-in-reader
// for changin normal written text to dashed one i wrote this script
// i dont know why by after some time i thought that concept of reader is completly pointless and then i deleted it from github and its source code but fortuantely i forgot to delete
// this script from github and now i will use this script for future refrence
// bye
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
