document.addEventListener('mousemove', (e) => {
    const light = document.querySelector('.cursor-light');
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
});

// This script adds hover effects (can be placed in your JS file or before </body>)
document.querySelector('.address-text').onmouseenter = function() {
    this.style.transform = 'translateY(-5px)';
    this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
    this.querySelector('h1').style.textShadow = '0 0 10px rgba(255,184,28,0.7)';
};
document.querySelector('.address-text').onmouseleave = function() {
    this.style.transform = '';
    this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    this.querySelector('h1').style.textShadow = '';
};

// Add hover effects for links
const links = document.querySelectorAll('a');
links.forEach(link => {
    link.onmouseenter = function() {
        this.style.color = '#ffb81c';
        this.style.borderBottomColor = '#ffb81c';
    };
    link.onmouseleave = function() {
        this.style.color = '#1c2957';
        this.style.borderBottomColor = 'transparent';
    };
});

// Special effect for CTA button
const cta = document.querySelector('a[href="http://www.wctmgurgaon.com"]');
cta.onmouseenter = function() {
    this.style.backgroundColor = '#ffb81c';
    this.style.color = '#1c2957';
    this.querySelector('span:last-child').style.left = '100%';
};
cta.onmouseleave = function() {
    this.style.backgroundColor = '#1c2957';
    this.style.color = '#ffb81c';
    this.querySelector('span:last-child').style.left = '100%';
};