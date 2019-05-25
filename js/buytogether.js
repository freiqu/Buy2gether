var auftragid = 0


function login(){

}

function helloworld(){
  console.log("hallo welt");
}
function saveAuftrag(){
  var inserat = {}
  inserat.nameEinkaeufer = document.getElementById("nameEinkaeufer").value
  inserat.zeitAuftrag = document.getElementById("zeitAuftrag").value
  inserat.ladenAuftrag = document.getElementById("ladenAuftrag").value
  window.localStorage.setItem(auftragid,inserat)
  auftragid = auftragid + 1
  console.log("jetzt würde diese Liste an den Host geschickt werden:")
  console.log(inserat)
}

function sendeAuftrag(){
  var inserat = {}
  inserat.nameAuftraggeber = document.getElementById("nameAuftraggeber").value
  inserat.einkaufslisteAuftraggeber = document.getElementById("einkaufslisteAuftraggeber").value

  var reinda = "<b>" + inserat.nameAuftraggeber + "</b>"
  var item = document.createElement('li')
  item.innerHtml=reinda
  document.getElementById("EinkaeuferAusgabe").appendChild(item);

  console.log("jetzt würde diese Liste an den Host geschickt werden:")
  console.log(inserat)
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
