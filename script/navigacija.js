window.onload = Navigacija();
$.getScript('./script/prijava_logina.js'); 

function Navigacija () {
$('#navi').html(' <nav class="navbar navbar-inverse navbar-static-top"><div class="container"><div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">	<span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span>	<span class="icon-bar"></span></button>	<a class="navbar-brand" href="index.html">Ribolovački dnevnik</a></div><div id="navbar" class="navbar-collapse collapse"><ul class="nav navbar-nav"><li class=""><a href="vrste_i_tehnike.html" class="">Vrste i Tehnike</a></li><li class=""><a href="#" class="">Locations</a></li><li class=""><a href="#" class="">About</a></li></ul><ul class="nav navbar-nav navbar-right" id="dropdown1"><li class="dropdown">	<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" >Sign In<span class="caret"></span></a><div class="dropdown-menu" id="formLogin"><div class="row"><div class="container-fluid"><form class=""><div class="form-group"><label class="">Username</label><input class="form-control" name="username" id="username" type="text"></div><div class="form-group"><label class="">Password</label><input class="form-control" name="password" id="password" type="password"><br class=""></div><button type="button" id="btnLogin" class="btn btn-success btn-sm" onclick="proveraLogina()">Login</button></form></div></div></div></li><li><a href="registracija.html"  class="registracija"onclick="registruj()" >Reg</a></li></ul></div></div></nav>');
function skidanje (){
    $('#dropdown1').replaceWith($(" #dropdown1").html('<li class ="dropdown"><a class="droppdown-toogle">Sign out</a></li><li class="dropdown"><a id="ime_user"></a></li>'));
    
    function povlacenje (){
        $('#ime_user').html(sessionStorage.getItem("ulogovaniKorisnik"));
    }
    povlacenje();
    }
    
skidanje();

}
