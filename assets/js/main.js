/*===== SHOW NAVBAR  =====*/ 
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
        // Hide navbar initially
        nav.classList.remove('show');
        toggle.classList.remove('bx-x');
        bodypd.classList.remove('body-pd');
        headerpd.classList.remove('body-pd');

        toggle.addEventListener('click', ()=>{
            // Toggle navbar visibility
            nav.classList.toggle('show');
            // Change toggle icon
            toggle.classList.toggle('bx-x');
            // Add/remove padding to body
            bodypd.classList.toggle('body-pd');
            // Add/remove padding to header
            headerpd.classList.toggle('body-pd');
        });

        // Load page content when a nav link is clicked
        document.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default link behavior
                const target = link.getAttribute('data-target');
                fetch(target)
                    .then(response => response.text())
                    .then(html => {
                        document.getElementById('main-content').innerHTML = html;
                        // Highlight active link
                        document.querySelectorAll('.nav__link').forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                    })
                    .catch(error => console.error(error));
            });
        });

        // Highlight active link on initial load
        document.querySelector('.nav__link.active').classList.remove('active');
        document.querySelector('.nav__link[data-target="dashboard.html"]').classList.add('active');
    }
}

showNavbar('header-toggle','nav-bar','body-pd','header');

/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav__link');

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'));
        this.classList.add('active');
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink));


// 
// 
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}