var korisniciIzSladista1=[];

for(i=1;i<=localStorage.length-2;i++){
 var text1=localStorage.getItem ("korisnik" +i);

 var iz_skladista1=JSON.parse(text1); 
korisniciIzSladista1.push(iz_skladista1);

}
console.log('korisniciIzSkl, za_loginJS: ', korisniciIzSladista1);

var imena1=[];
var lozinke1=[];
$.each(korisniciIzSladista1, function(index, korisnik) {

    imena1.push(korisnik.user_name);
    lozinke1.push(korisnik.user_password);
    
    });
    console.log('za login');
    console.log('iz skladista1>imena1push: ', imena1);
