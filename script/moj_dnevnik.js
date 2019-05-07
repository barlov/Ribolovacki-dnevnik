$(document).ready($.getScript('./script/skladiste_za_login.js', function () {

  prikaz();


}));



function prikaz() {
  var zaPrikaz = JSON.parse(localStorage.getItem(kojiKorisnik));

  console.log("zaPrikaz: ", zaPrikaz);

  function preradi() {
    $('<div class="donjiKontejner"></div>').appendTo('#omotac');

    for (var i in zaPrikaz) {
      if (!zaPrikaz.hasOwnProperty(i)) continue;
      if (zaPrikaz[i].constructor === Object) {

        for (var j in zaPrikaz[i]) {
          if (zaPrikaz[i].hasOwnProperty(j) == "comment") continue;
          console.log(zaPrikaz[i][j]);


        }
        $('.donjiKontejner').append(function () {
          return `<div  class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img  src=${zaPrikaz[i].putanja} ' class="img-thumbnail" style="height:270px" style="width:100%">
                  <div class="caption">   
                    <p class='text-center' >${zaPrikaz[i].comment}</p>
                </div>
                </div>
              </div>`;

        });
      }
    }
  }
  preradi();
  $('.img-thumbnail').click(function openFullscreen(elem) {
    elem = this;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }

  });


}