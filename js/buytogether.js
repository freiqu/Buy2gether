function helloworld(){
  console.log("hallo welt");
}
function save(){
  var key = "hi"
  var data = "hello world"
  var name = "name"
  var namedata = document.getElementById('nameEinkaeufer').value
  window.localStorage.setItem(key,data)
  window.localStorage.setItem(name,namedata)
}
function read(){
  var key = "hi"
  console.log(window.localStorage.getItem(key))
}
