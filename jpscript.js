
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
}

function doMode(chon,choff) {
    document.getElementById(chon).classList.toggle('d-none');
    document.getElementById(choff).classList.toggle('d-none');
    document.getElementById('modellight').classList.toggle('d-none');
    document.getElementById('modeldark').classList.toggle('d-none');
    document.getElementById('logow').classList.toggle('d-none');
    document.getElementById('logob').classList.toggle('d-none');
    document.body.classList.toggle('dark');
}

// document.getElementById('#myCarousel').on('slide.bs.carousel', function onSlide (ev) {
//     var id = ev.relatedTarget.id;
//     switch (id) {
//         case "jpc1":
//             ev.relatedTarget.classList.toggle('s400');
//         break;
//         case "jpc2":
//             ev.relatedTarget.classList.toggle('s400');
//         break;
//         case "jpc3":
//             ev.relatedTarget.classList.toggle('s400');
//         break;
//         case "jpc3":
//             ev.relatedTarget.classList.toggle('s400');
//         break;
//         default:
//         //the id is none of the above
//     }
//   })