var hasil = document.querySelector('.hasil');
var button = document.querySelector('button');
var dadu1 = document.querySelectorAll('img')[0];
var dadu2 = document.querySelectorAll('img')[1];

button.addEventListener('click', function () {
    var randomDadu1 = Math.floor((Math.random() * 6) + 1);
    var randomDadu2 = Math.floor((Math.random() * 6) + 1);

    dadu1.setAttribute('src', 'images/dice' + randomDadu1 + '.png');
    dadu2.setAttribute('src', 'images/dice' + randomDadu2 + '.png');

    if (randomDadu1 > randomDadu2) {
        hasil.innerHTML = '🏴  Player 1 Menang';
    } else if (randomDadu1 < randomDadu2) {
        hasil.innerHTML = 'Player 2 Menang 🏴 ';
    } else {
        hasil.innerHTML = '🚩 Seri !! 🚩';
    }
});