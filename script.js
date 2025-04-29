function openFullscreen(img) {
    const fullscreenDiv = document.createElement('div');

    fullscreenDiv.classList.add('fullscreen');

    const imgClone = img.cloneNode();

    fullscreenDiv.appendChild(imgClone);
    document.body.appendChild(fullscreenDiv);

    fullscreenDiv.addEventListener('click', () => {
        fullscreenDiv.remove();
    });
}




function updateActiveSection() {
    // Get all sections
    const sections = document.querySelectorAll('section');
    // Get all sidebar list items
    const navItems = document.querySelectorAll('.sidebar li');

    const distance = 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop - distance && 
            scrollPosition < sectionTop + sectionHeight - distance) {
            
            // Remove active class from all list items
            navItems.forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to corresponding list item
            const correspondingLink = document.querySelector(`.sidebar a[href="#${section.id}"]`);
            if (correspondingLink) {
                correspondingLink.parentElement.classList.add('active');
            }
        }
    });
}




function updateCopyrightYear() {
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        const startYear = 2025;
        const yearText = startYear === currentYear ? startYear : `${startYear} - ${currentYear}`;
        copyrightElement.innerHTML = `Copyright &copy; ${yearText}`;
    }
}




function updateProgressBar() {
    const winScroll = window.scrollY;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}




// Add event listeners
window.addEventListener('scroll', () => {
    updateActiveSection();
    updateProgressBar();
});




// Add the function calls to the existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    updateActiveSection();
    updateCopyrightYear();
    updateProgressBar();
});