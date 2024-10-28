document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in, .slide-in');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load

    // Form submission handling with EmailJS
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Retrieve form data
        const name = contactForm.name.value;
        const email = contactForm.email.value;
        const message = contactForm.message.value;

        // Send email using EmailJS
        emailjs.send("service_18x8xva", "template_vtxwe8o", {
            from_name: name,
            from_email: email,
            message: message
        }).then((response) => {
            alert('Message sent successfully!');
            contactForm.reset();
        }).catch((error) => {
            alert('Failed to send message. Please try again later.');
            console.error('EmailJS Error:', error);
        });
    });

    // Dynamic color theme
    const root = document.documentElement;
    const changeTheme = () => {
        const hue = Math.random() * 360;
        root.style.setProperty('--accent-1', `hsl(${hue}, 80%, 60%)`);
        root.style.setProperty('--accent-2', `hsl(${(hue + 120) % 360}, 80%, 60%)`);
        root.style.setProperty('--accent-3', `hsl(${(hue + 240) % 360}, 80%, 60%)`);
    };

    // Change theme every 10 seconds
    setInterval(changeTheme, 10000);

    // Typing effect for subtitle
    const subtitle = document.querySelector('.subtitle');
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    typeWriter();
});
