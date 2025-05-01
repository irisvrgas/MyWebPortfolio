document.addEventListener('DOMContentLoaded', function() {

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        
     
        if (this.classList.contains('active')) {
            this.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 5px)';
            this.querySelector('span:nth-child(2)').style.opacity = '0';
            this.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            this.querySelector('span:nth-child(1)').style.transform = 'none';
            this.querySelector('span:nth-child(2)').style.opacity = '1';
            this.querySelector('span:nth-child(3)').style.transform = 'none';
        }
    });
    

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                hamburger.querySelector('span:nth-child(1)').style.transform = 'none';
                hamburger.querySelector('span:nth-child(2)').style.opacity = '1';
                hamburger.querySelector('span:nth-child(3)').style.transform = 'none';
            }
        });
    });
    
    document.getElementById('year').textContent = new Date().getFullYear();
    
 
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
    
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
        
        
        contactForm.reset();
    });
});

document.addEventListener('DOMContentLoaded', function() {
  
    const checkOverflow = () => {
        const socialLinks = document.querySelector('.social-links');
        if (socialLinks.scrollWidth > socialLinks.clientWidth) {
            socialLinks.classList.add('overflowing');
        } else {
            socialLinks.classList.remove('overflowing');
        }
    };
    
    
    window.addEventListener('load', checkOverflow);
    window.addEventListener('resize', checkOverflow);
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
 
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }
    
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
   
    setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        setTimeout(() => {
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
            document.getElementById('contactForm').reset();
        }, 2000);
    }, 1500);
});


submitBtn.classList.add('sending');
setTimeout(() => {
    submitBtn.textContent = 'Message Sent!';
    submitBtn.classList.remove('sending');

}, 1500);
