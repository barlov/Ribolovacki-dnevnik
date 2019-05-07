$(document).ready($.getScript('./script/tekst.js', function () {
    console.log('get.fun.tekst iz parametra: ', text);
    $.getScript('./script/sidebar.js');
    pravi();
}));

function pravi() {
    console.log('pravi tekst: ', text);
    var odabrana = decodeURIComponent(window.location.search);
    odabrana = odabrana.substring(1);
    console.log('element: ', odabrana);
    putanja = `./slike/${odabrana}/${odabrana}`;
    nekiTest = `${odabrana}` + ".uvod";
    console.log("nekiTest: ", nekiTest);
    nekiTest2 = ribe[odabrana].naslov1;
    $('#omotac').append(' <div class="col-sm-1  " id="manji"></div>');
    $('#omotac').append('<div class="col-md-11 " id="plast" ></div>');
    $('#manji').append(function () {
        return `                       
           <div class="mini-submenu">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
      </div>
      <div class="list-group" id='aktivni'>
          <span href="#" class="list-group-item active" id="lepljivi">
              Vrste
              <span class="pull-right" id="slide-submenu">
                  <i class="fa fa-times"></i>
              </span>
          </span>
          <a href="riba.html?Amur#" class="list-group-item">
              <i class="fish_icon"></i> Amur
          </a>
          <a href="riba.html?Babuška#" class="list-group-item">
              <i class="fish_icon"></i> Babuška
          </a>
          <a href="riba.html?Bandar#" class="list-group-item">
              <i class="fish_icon"></i> Bandar
          </a>
          <a href="riba.html?Bodorka#" class="list-group-item">
              <i class="fish_icon"></i> Bodorka
          </a>
          <a href="riba.html?Bucov#" class="list-group-item">
              <i class="fish_icon"></i> Bucov
          </a>
          <a href="riba.html?Deverika#" class="list-group-item">
              <i class="fish_icon"></i> Deverika
          </a>
          <a href="riba.html?Kečiga#" class="list-group-item">
              <i class="fish_icon"></i> Kečiga
          </a>
          <a href="riba.html?Linjak#" class="list-group-item">
              <i class="fish_icon"></i> Linjak
          </a>
          <a href="riba.html?Mladica#" class="list-group-item">
              <i class="fish_icon"></i> Mladica
          </a>
          <a href="riba.html?Mrena#" class="list-group-item">
              <i class="fish_icon"></i> Mrena
          </a>
          <a href="riba.html?Šaran#" class="list-group-item">
              <i class="fish_icon"></i> Šaran
          </a>
          <a href="riba.html?Smuđ#" class="list-group-item">
              <i class="fish_icon"></i> Smuđ
          </a>
          <a href="riba.html?Som#" class="list-group-item">
              <i class="fish_icon"></i> Som
          </a>
          <a href="riba.html?Štuka#" class="list-group-item">
              <i class="fish_icon"></i> Štuka
          </a>
          <a href="riba.html?Tolstolobik#" class="list-group-item">
              <i class="fish_icon"></i> Tolstolobik
          </a> 
      </div>`;
    });
    string1 = '';
    var vrednost = ribe[odabrana];
    $('#plast').append(function daliborUzimaSadrzaj() {
        return `<h2 class="naslov" id="podnaslov">${odabrana}</h2>
                 <div class='col-md-12' id='veci'>             
                           <img  class='slika' id='slika1'  src=${putanja+1+".jpg"}  style="max-width:80%""</img>
                                <p class='text '>${ribe[odabrana].uvod}</p>
                                <h3 class='podNaslovi'>${ribe[odabrana].naslov1}</h3>

                                <img  class='slika'id='slika2'  src=${putanja+2+".jpg"}  style="max-width:100%" ></img><br><br>
                                        <p class='text' id='text3'>${ribe[odabrana].text3}</p>

                        <img class='slika' id='slika3'  src=${putanja+3+".jpg"} alt="slika" style="max-width:61% " min-width='200px' ></img>
                                            <p class='text' id='text4'>${ribe[odabrana].text4}</p>

                                <h3 class='podNaslovi'>${ribe[odabrana].naslov2}</h3>
                                            <p class='text' id='text5'>${ribe[odabrana].text5}</p>

                                <img class='slika' id='slika4' src=${putanja+4+".jpg"}  style="width:60%" ></img> <br>
                                <img class='slika' id='slika5'src=${putanja+5+".jpg"}  style="width:35%" ></img> 
                           <p class='text' id='text6'>${ribe[odabrana].text6}</p>

                                 <h3 class='podNaslovi'>${ribe[odabrana].naslov3}</h3><br>

                         <img class='slika' id='slika7'src=${putanja+7+".jpg"}  style="width:50%" ></img>

                         <p class='text' id='text7'>${ribe[odabrana].text7}</p>
                         <img class='slika' id='slika10'src=${putanja+10+".jpg"}  style="width:45%" ></img>
                         <p class='text' id='text8'>${ribe[odabrana].text8}</p>

                         <h3 class='podNaslovi'>${ribe[odabrana].naslov4}</h3>
                         </div>`;



    });



    $('#slika10').hover(
        function () {
            $(this).attr('src', `${putanja+9+".jpg"}`);
        },
        function () {
            $(this).attr('src', `${putanja+10+".jpg"}`);
        }
    );
    $('#slika7').hover(
        function () {
            $(this).attr('src', `${putanja+8+".jpg"}`);
        },
        function () {
            $(this).attr('src', `${putanja+7+".jpg"}`);
        }
    );
    $('p:contains(undefined)').remove();
    $('h3:contains(undefined)').remove();

    $("img").on('error', function () {
        $(this).remove();

    });

}