$.getScript('./script/skladiste.js');
function proveraImena(proveraVrednostiPolja) {
   var provera = true;
   if (($.inArray(proveraVrednostiPolja, imena)) != -1) {
      provera = false;
   }
   return provera;
}

function proveraMejla(proveraVrednostiPolja) {
   var provera = true;
   if (($.inArray(proveraVrednostiPolja, mejlovi)) != -1) {
      provera = false;
   }
   return provera;
}