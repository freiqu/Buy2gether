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

  console.log("jetzt würde diese Liste an den Host geschickt werden:")
  console.log(inserat)
  var obj = {}
  //obj = window.localStorage.getItem(auftragid)
  obj = inserat

  console.log("test:")
  console.log(obj)

  var name = obj.nameEinkaeufer
  var zeit = obj.zeitAuftrag
  var laden = obj.ladenAuftrag

  var item = document.createElement('li')
  item.innerHTML = name + " kauft um " + zeit + " bei " + laden + " ein!"
  document.getElementById("FaulerTypAusgabe").appendChild(item)

  auftragid = auftragid + 1
}

function sendeAuftrag(){
  var inserat = {}
  var einlis = document.getElementById("einkaufslisteAuftraggeber").value
  einlis = einlis.replace(/,/g, ", " )
  einlis = einlis.replace(/; /g, ", " )
  einlis = einlis.replace(/;/g, ", " )
  einlis = einlis.replace(/,  /g, ", " )

  inserat.nameAuftraggeber = document.getElementById("nameAuftraggeber").value
  inserat.einkaufslisteAuftraggeber = einlis.split(", ")

  var reinda ="<div style='background-color: #9090aa'> <ul> <dt> <b>" + document.getElementById("nameAuftraggeber").value + "</b> </dt>"
  for(i = 0;i < inserat.einkaufslisteAuftraggeber.length; i++){
    reinda = reinda + "<li>" + inserat.einkaufslisteAuftraggeber[i] + "</li>"
  }

  reinda = reinda  + " </ul> </div>"
  var item = document.createElement('li')
  item.innerHTML=reinda
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
