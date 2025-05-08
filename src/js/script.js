// Import all images statically so Parcel can track them
const images = [
    new URL('../images/banner_1.webp', import.meta.url).href,
    new URL('../images/banner_2.webp', import.meta.url).href,
    new URL('../images/banner_3.webp', import.meta.url).href,
    new URL('../images/banner_4.webp', import.meta.url).href,
    new URL('../images/banner_5.webp', import.meta.url).href,
    new URL('../images/banner_6.webp', import.meta.url).href,
    new URL('../images/banner_7.webp', import.meta.url).href,
    new URL('../images/banner_8.webp', import.meta.url).href,
    new URL('../images/banner_9.webp', import.meta.url).href,
    new URL('../images/banner_10.webp', import.meta.url).href,
    new URL('../images/banner_11.webp', import.meta.url).href,
    new URL('../images/banner_12.webp', import.meta.url).href,
    new URL('../images/banner_13.webp', import.meta.url).href,
    new URL('../images/banner_14.webp', import.meta.url).href,
    new URL('../images/banner_15.webp', import.meta.url).href,
    new URL('../images/banner_16.webp', import.meta.url).href,
    new URL('../images/banner_17.webp', import.meta.url).href,
    new URL('../images/banner_18.webp', import.meta.url).href,
    new URL('../images/banner_19.webp', import.meta.url).href,
    new URL('../images/banner_20.webp', import.meta.url).href,
    new URL('../images/banner_21.webp', import.meta.url).href,
    new URL('../images/banner_22.webp', import.meta.url).href,
    new URL('../images/banner_23.webp', import.meta.url).href,
    new URL('../images/banner_24.webp', import.meta.url).href,
    new URL('../images/banner_25.webp', import.meta.url).href,
    new URL('../images/banner_26.webp', import.meta.url).href,
    new URL('../images/banner_27.webp', import.meta.url).href,
    new URL('../images/banner_28.webp', import.meta.url).href,
    new URL('../images/banner_29.webp', import.meta.url).href,
    new URL('../images/banner_30.webp', import.meta.url).href,
    new URL('../images/banner_31.webp', import.meta.url).href,
    new URL('../images/banner_32.webp', import.meta.url).href,
    new URL('../images/banner_33.webp', import.meta.url).href,
    new URL('../images/banner_34.webp', import.meta.url).href,
    new URL('../images/banner_35.webp', import.meta.url).href,
    new URL('../images/banner_36.webp', import.meta.url).href,
    new URL('../images/banner_37.webp', import.meta.url).href,
    new URL('../images/banner_38.webp', import.meta.url).href,
    new URL('../images/banner_39.webp', import.meta.url).href,
    new URL('../images/banner_40.webp', import.meta.url).href,
    new URL('../images/banner_41.webp', import.meta.url).href,
    new URL('../images/banner_42.webp', import.meta.url).href,
    new URL('../images/banner_43.webp', import.meta.url).href,
];


// Parcel has to use static imports for images in Javascript files
const mobileImages = [
    new URL('../images/banner_1.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_2.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_3.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_4.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_5.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_6.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_7.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_8.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_9.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_10.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_11.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_12.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_13.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_14.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_15.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_16.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_17.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_18.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_19.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_20.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_21.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_22.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_23.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_24.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_25.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_26.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_27.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_28.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_29.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_30.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_31.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_32.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_33.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_34.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_35.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_36.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_37.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_38.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_39.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_40.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_41.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_42.webp?width=1200&quality=90', import.meta.url).href,
    new URL('../images/banner_43.webp?width=1200&quality=90', import.meta.url).href,
];

  
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.getElementById("hero");

    const randomIndex = Math.floor(Math.random() * images.length);
    // console.log("randomIndex:", randomIndex);

    // Check if the user is on a mobile device
    const isMobile = window.innerWidth <= 767;

    let image;

    if (isMobile) {
        image = mobileImages[randomIndex];
    } else {
        image = images[randomIndex];
        checkHeroBackgroundAspectRatio(image);
    }

    // console.log("Random Image:", image);

    hero.style.backgroundImage = `url('${image}')`;
});




// Handle images with aspect ratio > 2.4 only if the screen width is at least 3440px
const mediaQuery = window.matchMedia("(min-width: 3440px)");

function handleMediaChange(e) {
    if (e.matches) {
        const backgroundImage = hero.style.backgroundImage;
        const imageUrl = backgroundImage.slice(5, -2);
        console.log("imageUrl:", imageUrl);
        checkHeroBackgroundAspectRatio(imageUrl);
    } 
}

mediaQuery.addEventListener("change", handleMediaChange);
  




function checkHeroBackgroundAspectRatio(Url) {
    // Handle images with aspect ratio > 2.4 only if the screen width is at least 3440px
    const imgElement = new Image();
    imgElement.src = Url;
    
    imgElement.onload = () => {
        // console.log("Image width:", imgElement.naturalWidth);
        // console.log("Image height:", imgElement.naturalHeight);
        const aspectRatio = imgElement.naturalWidth / imgElement.naturalHeight;
        // console.log(`Aspect Ratio: ${aspectRatio}`);

        if (aspectRatio > 2.4) {
            if (window.matchMedia("(min-width: 3440px)").matches) {
                hero.style.backgroundPosition = "center";
                // console.log("Screen is at least 3440px wide, background-position set to center.");
            } 
        }
    };
    
    // Handle errors if the image fails to load
    imgElement.onerror = () => {
        console.error("Failed to load the image.");
    };
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
            // console.log(`Setting data-src for ${className}: ${imageSrc}`);
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
                    // console.log(`Loaded background image for ${container.className}: ${src}`);
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