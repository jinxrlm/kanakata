
document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
      new bootstrap.Tooltip(tooltip)
    })

window.onload = function() {
    var cur_card = -1;
    cards = ['card1','card2','card3','card4'];

var myInterval = setInterval(function() {
    if (cur_card >= 0) document.getElementById(cards[cur_card % cards.length]).classList.toggle("jp-card-sel");
    document.getElementById(cards[(++cur_card) % cards.length]).classList.toggle("jp-card-sel");
}, 3000);

var cdD = 0;
var cdH = 0;
var cdM = 46;
var cdS = 35;
var cDown = setInterval(function() {
    cdS = cdS-1;
    if (cdS == -1) {
        cdS = 59;
        cdM = cdM -1;
        if (cdM == -1) cdM = 59;
    }
document.getElementById('cdD').innerHTML = cdD.toString().padStart(2, '0');
document.getElementById('cdH').innerHTML = cdH.toString().padStart(2, '0');
document.getElementById('cdM').innerHTML = cdM.toString().padStart(2, '0');
document.getElementById('cdS').innerHTML = cdS.toString().padStart(2, '0');
}, 1000);
}

function doMode(chon,choff) {
    document.getElementById(chon).classList.toggle('d-none');
    document.getElementById(choff).classList.toggle('d-none');
    document.getElementById('modellight').classList.toggle('d-none');
    document.getElementById('modeldark').classList.toggle('d-none');
    document.getElementById('logow').classList.toggle('d-none');
    document.getElementById('logob').classList.toggle('d-none');
    document.getElementById('footimgw').classList.toggle('d-none');
    document.getElementById('footimgb').classList.toggle('d-none');
    document.body.classList.toggle('dark');
}

