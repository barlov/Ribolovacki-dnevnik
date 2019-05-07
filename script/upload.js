function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function slanje() {
    event.preventDefault();
    console.log($('#komentar').val());
    var slika = {};
    slika[komentar.name] = ($('#komentar').val());
    slika.putanja = $('#blah').attr('src');
    var zaProsirivanje = JSON.parse(localStorage.getItem(kojiKorisnik));
    zaProsirivanje['slika' + (Object.keys(zaProsirivanje).length - 6)] = slika;
    localStorage.setItem(kojiKorisnik, JSON.stringify(zaProsirivanje));
    location.reload();
}