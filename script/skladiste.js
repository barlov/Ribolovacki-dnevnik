var korisniciIzSladista=[];

for(i=1;i<=localStorage.length;i++){
 var text=localStorage.getItem ("korisnik" +i);

 var iz_skladista=JSON.parse(text); 
korisniciIzSladista.push(iz_skladista);


}
//console.log(korisniciIzSladista[0]);
//if(korisnik[i].user_name ==  || korisnik[i].email ){

//}
var imena=[]    ;
var mejlovi=[];
var lozinke=[];
//
//console.log($('#user').value);
$.each(korisniciIzSladista, function(index, korisnik) {
$.each(korisnik,function(user_name, value){

//  if( korisnik.user_name == value.user_name){
  
//   }
});
mejlovi.push(korisnik.email);
imena.push(korisnik.user_name);
lozinke.push(korisnik.user_password);
});
console.log(imena);
console.log(lozinke);

