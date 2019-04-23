var korisniciIzSladista1=[];

for(i=1;i<=localStorage.length;i++){
 var text1=localStorage.getItem ("korisnik" +i);

 var iz_skladista1=JSON.parse(text1); 
korisniciIzSladista1.push(iz_skladista1);


}
console.log(korisniciIzSladista1); 

var imena1=[]    ;
var lozinke1=[];
//
//console.log($('#user').value);
$.each(korisniciIzSladista1, function(index, korisnik) {

imena1.push(korisnik.user_name);
lozinke1.push(korisnik.user_password);
});

