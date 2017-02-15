function calcVolume(diametro, comprimento){
  return ((diametro*diametro)/400)*Math.PI*comprimento*100;
}

function calcMassa(volume, densidade){
  return volume * densidade;
}

function calcValor(massa, valorkg){
  return massa * valorkg / 1000;
}

function setDensidade(){
  if (document.getElementById("pla").checked)
    document.getElementById("densidade").value = 1.05;
  else
    document.getElementById("densidade").value = 1.24;

  updateValues();
}

function truncate(value){
  var str = value.toString();
  return str.replace(/(.*)\.([0-9]{3}).*/g, "$1.$2");
}

function round(value){
  return (Math.round(value*100))/100;
}

function updateValues(){
  var diametro = document.getElementById("diametro").value;
  var comprimento = document.getElementById("comprimento").value;
  var densidade = document.getElementById("densidade").value;
  var valorkg = document.getElementById("valorkg").value;
  var volume = calcVolume(diametro, comprimento);
  var massa = calcMassa(volume, densidade);
  var valorreais = calcValor(massa, valorkg);


  document.getElementById("volume").value = round(volume);
  document.getElementById("massa").value = round(massa);
  document.getElementById("valorreais").value = round(valorreais);
}
