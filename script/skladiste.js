var korisniciIzSladista = [];

for (i = 1; i <= localStorage.length; i++) {
    var text = localStorage.getItem("korisnik" + i);
    var iz_skladista = JSON.parse(text);
    korisniciIzSladista.push(iz_skladista);

}
console.log(korisniciIzSladista);
var imena = [];
var mejlovi = [];
var lozinke = [];

$.each(korisniciIzSladista, function (index, korisnik) {
    if (korisnik != null) {
        mejlovi.push(korisnik.email);
        imena.push(korisnik.user_name);
        lozinke.push(korisnik.user_password);
    }
});