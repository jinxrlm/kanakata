
document.querySelectorAll('[data-bs-toggle="tooltip"]')
.forEach(tooltip => {
  new bootstrap.Tooltip(tooltip)
})

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



function jpvalidate_email(pos1,pos2,pos3) {
    // förenklad felkoll som inte godtar avancerade mail (t.ex domäner > 3 tecken)
var check = document.getElementById(pos1).value;
if (check.length < 4) {
    document.getElementById(pos3).classList.add('d-inline');
    document.getElementById(pos3).innerHTML = "E-mail must be fully filled in";
    document.getElementById(pos2).classList.remove('d-inline');
}
else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(check)) {
    document.getElementById(pos3).classList.remove('d-inline');
    document.getElementById(pos3).innerHTML = "";
    document.getElementById(pos2).classList.add('d-inline');
}
else {
    document.getElementById(pos3).classList.add('d-inline');
    document.getElementById(pos3).innerHTML = "Incorrect e-mail";
    document.getElementById(pos2).classList.remove('d-inline');
}
}

function jpvalidate_password(pos1,pos2,pos3) {
    var check = document.getElementById(pos1).value;
    if (check.length < 8 || check.length > 24) {
        document.getElementById(pos3).classList.add('d-inline');
        document.getElementById(pos3).innerHTML = "Min 8, max 24 characters";
        document.getElementById(pos2).classList.remove('d-inline');
    }
    else if (/^[A-Za-z]\w{7,24}$/.test(check)) {
        document.getElementById(pos3).classList.remove('d-inline');
        document.getElementById(pos3).innerHTML = "";
        document.getElementById(pos2).classList.add('d-inline');
    }
    else {
        document.getElementById(pos3).classList.add('d-inline');
        document.getElementById(pos3).innerHTML = "Password should start with a letter";
        document.getElementById(pos2).classList.remove('d-inline');
    }
    }

function jpvalidate_duplicate() {
    var check = document.getElementById('ca3').value;
    if (check.length < 8 || check.length > 24) {
        document.getElementById('error5').classList.add('d-inline');
        document.getElementById('error5').innerHTML = "Min 8, max 24 characters";
        document.getElementById('valid5').classList.remove('d-inline');
    }
    else if (check == document.getElementById('ca2').value) {
        document.getElementById('error5').classList.remove('d-inline');
        document.getElementById('error5').innerHTML = "";
        document.getElementById('valid5').classList.add('d-inline');
    }
    else {
        document.getElementById('error5').classList.add('d-inline');
        document.getElementById('error5').innerHTML = "Needs to be repeated exactly";
        document.getElementById('valid5').classList.remove('d-inline');
    }
}

function deslct() {
    document.getElementById('error1').classList.remove('d-inline');
    document.getElementById(pos3).classList.remove('d-inline');
    document.getElementById('error3').classList.remove('d-inline');
    document.getElementById('error4').classList.remove('d-inline');
    document.getElementById('error5').classList.remove('d-inline');
}