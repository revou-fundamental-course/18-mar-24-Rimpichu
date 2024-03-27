function kirim() {
    let inputNama = document.forms["email-form"]["name"].value;
    let inputEmail = document.forms["email-form"]["email"].value;
    let inputBudget = document.forms["email-form"]["budget"].value;
    let inputDes = document.forms["email-form"]["comments"].valuel
    let messagesucces = document.getElementsByClassName("form-done");
    let messagefail = document.getElementsByClassName("form-fail");

    if (inputNama !== '' && inputEmail !== '' && inputDes !== '' && inputBudget !== '') {
        messagesucces();
    }
    else
    {
        messagefail();
    }

    return false;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let btnScrollTop = document.getElementById("btn-scroll");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnScrollTop.style.display = "block";
    } else {
        btnScrollTop.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
