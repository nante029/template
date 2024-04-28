// modal
document.addEventListener('DOMContentLoaded', function() {
    const editButtons = document.querySelectorAll('.edit-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');
    const modalEdit = document.getElementById('modalEdit');
    const modalDelete = document.getElementById('modalDelete');
    const closeButtons = document.querySelectorAll('.close');

    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalEdit.style.display = 'block';
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalDelete.style.display = 'block';
        });
    });

    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            modalEdit.style.display = 'none';
            modalDelete.style.display = 'none';
        });
    });

    document.getElementById('btnDelete').addEventListener('click', () => {
        // Ajouter ici la logique pour supprimer le fruit
        modalDelete.style.display = 'none';
    });
});

// tabs
function openTab(evt, tabName) {
    // Récupérer tous les éléments avec class="tabcontent" et les cacher
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Récupérer tous les éléments avec class="tablink" et supprimer la classe "active"
    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("activeTab");
    }

    // Afficher l'onglet actuel et ajouter la classe "active" au bouton qui l'a ouvert
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("activeTab");
}

// Afficher le premier onglet par défaut
document.getElementById("tab1").style.display = "block";
document.getElementsByClassName("tablink")[0].classList.add("activeTab");

// vertical nav
var menuItems = document.querySelectorAll('.vertical-menu a');

menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        var current = document.getElementsByClassName('activeNav');
        current[0].classList.remove('activeNav');
        this.classList.add('activeNav');
    });
});

function toggleIconsOnly() {
    var menu = document.getElementById('verticalMenu');
    menu.classList.toggle('icons-only');
    
    var icon = document.getElementById('toggleIcon');
    icon.classList.toggle('fa-chevron-up');
    icon.classList.toggle('fa-chevron-down');
}




