window.onload = slike();


function slike() {
  var nizImena = ['Amur', 'Babuska', 'Bandar', 'Bodorka', 'Bucov', 'Deverika', 'Kečiga', 'Linjak','Mladica','Mrena','Šaran','Smudj','Som','Štuka','Tolstolobik' ];
  var putanja;

  //console.log(abc);
  $('<div class="donjiKontejner"></div>').appendTo('#omotac');

  nizImena.forEach(function (element) {
    function preradi() {
      putanja = `./slike/${element}/${element}.jpg`;
      return putanja;

    }
    $('.donjiKontejner').append(function () {
      return `<div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src=${preradi()} class="img-thumbnail"  alt="Vrste_Riba" style="height:150px" style="width:100%">
                  <div class="caption">   
                  <a href="#" target="_blank">
                    <p class='text-center'>${element}</p>
                  </a>  
                </div>
              </div>`;
    });



  });
}