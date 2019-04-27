
$(document).ready(  $.getScript('./script/tekst.js',  function(){
    console.log('get.fun tekst iz parametra: ', text);

    
    pravi();
   

}));
   

 function pravi(){
    console.log('start funkcije pravi, odabrana:', odabrana );
    console.log('start funkcije pravi, tekst:' , text);

$.getScript('./script/sidebar.js');

console.log('pravi tekst: ', text);
    var odabrana=decodeURIComponent(window.location.search);
    odabrana=odabrana.substring(1);

    //var nizImena = ['Amur', 'Babuska', 'Bandar', 'Bodorka', 'Bucov', 'Deverika', 'Kečiga', 'Linjak','Mladica','Mrena','Saran','Smudj','Som','Štuka','Tolstolobik' ];
    //var putanja;
    
        console.log('element: ', odabrana);

       
         // putanja1 = ./slike/odabrana/odabrana.jpg;
          putanja=`./slike/${odabrana}/${odabrana}`;
          
          
         
    
    
 
    console.log('odabrana: ', odabrana);
    $('#omotac').append(' <h2 class="naslov" id="podnaslov"></h2>');

    $('#podnaslov').html(odabrana);
    console.log(text);
       $('#omotac').append('<div class="container-fluid" id="plast"></div>');
      // $('#plast').append(' <div class="col-md-4" id="side"></div>');
     //  $('#plast').append(' <div class="col-md-8" id="slika"></div>');
       $('#plast').append(function () {
           console.log(text);
        return `<div class="col-md-4 id='side'"></div>
                <div class="col-md-8" id="slika">
                    <img src=${putanja+1+".jpg"}  style="width:100%">
                    <p class='text'>${text2}</p>
                   
                
                    
                 
                </div>`;
              
            });
    
alert("stavi console.log('alert')", console.log("stavljen log iz alerta"));console.log("LOGUJ SVE");console.log("kraj funkscije");
    }