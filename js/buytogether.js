var auftragid = 0


function helloworld(){
  console.log("hallo welt");
}
function saveAuftrag(){
  var inserat = {}
  inserat.nameEinkaeufer = document.getElementById("nameAuftrag").value
  inserat.zeitAuftrag = document.getElementById("zeitAuftrag").value
  inserat.ladenAuftrag = document.getElementById("ladenAuftrag").value
  window.localStorage.setItem(auftragid,inserat)
  auftragid = auftragid + 1
}
function read(){
  var key = "hi"
  console.log(window.localStorage.getItem(key))
}

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}
