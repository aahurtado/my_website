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




function updateProgressBar() {
    const winScroll = window.scrollY;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}




window.openFullscreen = function openFullscreen(img) {
    const fullscreenDiv = document.createElement('div');

    fullscreenDiv.classList.add('fullscreen');

    const imgClone = img.cloneNode();

    fullscreenDiv.appendChild(imgClone);
    document.body.appendChild(fullscreenDiv);

    fullscreenDiv.addEventListener('click', () => {
        fullscreenDiv.remove();
    });
}




window.copyLinkToClipboard = function copyLinkToClipboard(event, id) {
    event.preventDefault(); 
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copied to clipboard!'); 
    }).catch(err => {
        console.error('Failed to copy link: ', err);
    });
}




function updateCopyrightYear() {
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        const startYear = 2025;
        const yearText = startYear === currentYear ? startYear : `${startYear}-${currentYear}`;
        copyrightElement.innerHTML = `Copyright &copy; ${yearText}`;
    }
}




// Performs lazy loading of background images for parallax containers
document.addEventListener("DOMContentLoaded", () => {
    const lazyContainers = document.querySelectorAll(".parallax-container");

    const ucsdLibImage = new URL('../images/ucsd_lib2.png', import.meta.url).href;
    const matrixImage = new URL('../images/matrix.jpg', import.meta.url).href;

    // Map container classes to their respective images
    const imageMap = {
        "parallax-container-1": ucsdLibImage, 
        "parallax-container-2": matrixImage, 
    };

    // Set the data-src attributes dynamically
    lazyContainers.forEach(container => {
        const className = Array.from(container.classList).find(cls => imageMap[cls]);
        if (className) {
            const imageSrc = imageMap[className];
            container.setAttribute("data-src", imageSrc);
        }
    });

    // Lazy loading logic
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const container = entry.target;
                const src = container.getAttribute("data-src");
                if (src) {
                    container.style.backgroundImage = `url('${src}')`;
                    container.removeAttribute("data-src");
                }
                observer.unobserve(container);
            }
        });
    }, {
        rootMargin: '125%' 
    });

    lazyContainers.forEach(container => observer.observe(container));
});




// Performs 3D tilt effect on cards when mouse moves over them
document.addEventListener('DOMContentLoaded', function() {
    // Check if device is not mobile (screen width > 767px)
    if (window.innerWidth > 767) {
        const containers = document.querySelectorAll('.tilt-card-container');
        
        containers.forEach(container => {
            const card = container.querySelector('.tilt-card');
            
            container.addEventListener('mousemove', (e) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = -((y - centerY) / centerY) * 10;
                const rotateY = ((x - centerX) / centerX) * 10;
                
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            container.addEventListener('mouseleave', () => {
                card.style.transform = 'rotateX(0) rotateY(0)';
            });
        });
    }
});




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