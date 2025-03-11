// Skills tab function.
var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-content")
function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

// side-nav-close
var sidemenu = document.getElementById("sidemenu")
var menuLinks = document.querySelectorAll("#sidemenu a")
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
// Close the menu when clicking any menu link
menuLinks.forEach(function (link) {
    link.addEventListener("click", closemenu);
});

// Contact Form Script - Get from GitHub (https://github.com/jamiewilson/form-to-google-sheets)
const scriptURL = 'https://script.google.com/macros/s/AKfycbzfY9ZLQ5jZQ3OI4trIE3tiv7NpKNboH8-FvQFGkRtWLMPO3izR1F0_3T_bovwi4Vyn/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

