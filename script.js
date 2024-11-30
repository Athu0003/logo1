

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.classList.toggle('active');
        });
    }
});

$(function () {
    $('.lazy').lazy();
});