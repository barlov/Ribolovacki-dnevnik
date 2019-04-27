window.onload = slike();

function slike() {

  var nizImena = ['Amur', 'Babuska', 'Bandar', 'Bodorka', 'Bucov', 'Deverika', 'Kečiga', 'Linjak','Mladica','Mrena','Saran','Smudj','Som','Štuka','Tolstolobik' ];
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
                  <img src=${preradi()} class="img-thumbnail"  alt="Vrste_Riba" style="height:170px" style="width:100%">
                  <div class="caption">   
                  <a href='#'  target="_self">
                    <h3 class='text-center'  >${element}</h3>
                  </a>  
                </div>
              </div>`;
              
    });
     

    
  });
 $('h3').click(function(){
        window.odabrana=$(this).html();
          console.log('iz klika',odabrana);
          window.location.href="riba.html"+"?"+odabrana;
      });
}

//$.getScript ('./script/pravljenje_el.js');
