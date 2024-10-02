document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(response => {
                formResponse.innerHTML = 'Thank you for your message! We will get back to you soon.';
                formResponse.classList.add('text-green-600');
                contactForm.reset();
            })
            .catch(error => {
                formResponse.innerHTML = 'Oops! There was an error sending your message. Please try again later.';
                formResponse.classList.add('text-red-600');
            });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});