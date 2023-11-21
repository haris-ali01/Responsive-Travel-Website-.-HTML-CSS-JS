
// Responsive Navbar.
let navbar = document.querySelector('.header .flex .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');

    // Replace the Font Awesome class when the button is clicked
    if (menuBtn.classList.contains("fa-bars")) {
        menuBtn.classList.replace("fa-bars", "fa-times");
    } else {
        menuBtn.classList.replace("fa-times", "fa-bars");
    }
};

window.onscroll = () => {
    navbar.classList.remove('active');
};


// Animations and transitions.
AOS.init();


// Making Navnar Menu active.
document.querySelectorAll(".menus").forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
});



document.addEventListener('DOMContentLoaded', function() {
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch('http://localhost/tomtravels/php/contact.php', {
        method: 'POST',
        body: formData,
        credentials: 'include'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        let messageBox = document.getElementById('messageBox');
        if (data.status === 'success') {
            messageBox.textContent = data.message;
            messageBox.style.color = 'white';
            messageBox.style.fontSize = '1.5rem';
        } else {
            messageBox.textContent = data.message;
            messageBox.style.color = 'red';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

});

