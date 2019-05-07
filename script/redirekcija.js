var login = sessionStorage.getItem('ulogovaniKorisnik');

if ((login == null) && window.location != 'http://127.0.0.1:5500/index.html') {
    window.location.href = 'http://127.0.0.1:5500/registracija.html';

}