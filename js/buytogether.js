function helloworld(){
  console.log("hallo welt");
}
function saveEinkaeufer(){
  var name = "nameEinkaeufer"
  var namedata = document.getElementById('nameEinkaeufer').value
  window.localStorage.setItem(name,namedata)
}
function saveFaulerTyp(){
  var name = "nameFaulerTyp"
  var namedata = document.getElementById('nameFaulerTyp').value
  window.localStorage.setItem(name,namedata)
}
function read(){
  var key = "hi"
  console.log(window.localStorage.getItem(key))
}
