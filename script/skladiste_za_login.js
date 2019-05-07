var korisniciIzSladista1 = [];
for (i = 1; i <= localStorage.length; i++) {
    var text1 = localStorage.getItem("korisnik" + i);
    var iz_skladista1 = JSON.parse(text1);
    korisniciIzSladista1.push(iz_skladista1);
}
console.log("iz_skladista1: ", iz_skladista1);
console.log("korisniciIzSladista1: ", korisniciIzSladista1);
var imena1 = [];
var lozinke1 = [];
var kojiKorisnik;

$.each(korisniciIzSladista1, function (index, korisnik) {
    if (korisnik.user_name == sessionStorage.getItem('ulogovaniKorisnik')) {
        kojiKorisnik = globalThis.localStorage.key(index);
    }
    imena1.push(korisnik.user_name);
    lozinke1.push(korisnik.user_password);
});
console.log(kojiKorisnik);