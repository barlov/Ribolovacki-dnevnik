
$.getScript('./script/skladiste.js'); 


//console.log(mejlovi);
//console.log(imena);
//$('#user').focusout(provera);


function proveraImena (proveraVrednostiPolja){
 
   var provera = true;
if(($.inArray(proveraVrednostiPolja,imena))!= -1){
   // $('#user').css('background-color','red');
    provera = false;
}
return provera;
}
function proveraMejla (proveraVrednostiPolja){
 
    var provera = true;
 if(($.inArray(proveraVrednostiPolja,mejlovi))!= -1){
    // $('#user').css('background-color','red');
     provera = false;
 }
 return provera;
 }
 