$.getScript('./script/skladiste_za_login.js'); 


function proveraLogina(){
   
    if(($.inArray($('#username').val(),imena1))!= -1 &&   ($.inArray($('#password').val(),lozinke1))!= -1 ){
        sessionStorage.setItem('ulogovaniKorisnik',$('#username').val());
        location.reload();
        
    } 
}