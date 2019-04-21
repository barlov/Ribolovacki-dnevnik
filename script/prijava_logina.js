$.getScript('./script/skladiste.js'); 


function proveraLogina(){
   
    if(($.inArray($('#username').val(),imena))!= -1 &&   ($.inArray($('#password').val(),lozinke))!= -1 ){
        console.log('eo');
    } 
}