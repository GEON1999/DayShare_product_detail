document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop - document.getElementById('navbar').offsetHeight,
            behavior: 'smooth'
        });
    });
});

document.querySelector('.web_btn').addEventListener('click', function() {
    window.open('https://share-diary-xi.vercel.app/')
});