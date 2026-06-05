document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".hover-image-wrapper").forEach(wrapper => {
        let image = wrapper.querySelector("img");
        let downloadLink = document.createElement("a");
        downloadLink.href = image.src;
        downloadLink.download = image.src.split("/").pop();
        downloadLink.classList.add("download-btn");
        let downloadIcon = document.createElement("img");
        downloadIcon.src = "download-icon.webp";
        downloadIcon.alt = "Download";
        downloadIcon.classList.add("download-icon");
        downloadLink.appendChild(downloadIcon);
        wrapper.appendChild(downloadLink);
    });
});


const text = "Gallery";
let index = 0;
function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 170); // typing speed
    }
}
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            observer.unobserve(img);
        }
    });
});

window.onload = function () {
    typeWriter();
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
        offset: 100,
        easing: 'ease-in-out',
        disable: window.innerWidth < 768
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    window.addEventListener('resize', debounce(() => {
        AOS.refresh();
    }, 250));
};









let currentBackground = 1;
const maxBackgrounds = 3;

function toggleBackground() {
    const body = document.body;
    body.classList.remove(`background-${currentBackground}`);
    currentBackground = currentBackground % maxBackgrounds + 1;
    body.classList.add(`background-${currentBackground}`);
}

// Loading animation
window.addEventListener('load', function () {
    const loader = document.querySelector('.loading-animation');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000);
    }
});









document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('navMenu');
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("theme-toggle");
    // const particles = document.getElementById("particles-js");
    const bg = document.getElementById("background-section");
    const body = document.body;

    let whiteTheme = false;

    toggle.addEventListener("click", () => {
        whiteTheme = !whiteTheme;

        if (whiteTheme) {
            body.classList.add("white-theme");
            // particles.style.display = "none";
            bg.style.backgroundImage = "url('download (1).png')";
        } else {
            body.classList.remove("white-theme");
            // particles.style.display = "block";
            bg.style.backgroundImage = "url('background111.avif')";
        }
    });
});











//   const gallerysssss= document.getElementById("typewriter-text")
//     gallerysssss.dataset.text.style.fontsize = "64px";
//     gallerysssss.setAttribute(
//         fontsize
//     )
function smoothScrollBy(distance) {
    const duration = 600; // in ms
    const start = window.scrollY;
    const startTime = performance.now();

    function scrollStep(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutQuad(progress);

        window.scrollTo(0, start + distance * ease);

        if (elapsed < duration) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}

function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function photos(imgsrc, names) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let wrapper = document.createElement("div");
            wrapper.className = "hover-image-wrapper";

            let img = document.createElement("img");
            img.src = imgsrc;
            img.alt = names;

            // 🔥 load hote hi smooth fade + zoom
            img.onload = () => {
                img.classList.add("loaded");
            };

            let overlay = document.createElement("div");
            overlay.className = "hover-image-overlay";
            overlay.innerText = names;

            wrapper.appendChild(img);
            wrapper.appendChild(overlay);

            document.querySelector(".images22").appendChild(wrapper);

            resolve("done");
        }, 160);
    });
}

(async function () {
    await photos("PP3.webp", "PP");
    await photos("Pranav3.webp", "Pranav");
    await photos("Vijay3.webp", "Vijay");
    await photos("PP4.webp", "PP");
    await photos("Pranav4.webp", "Pranav");
    await photos("Vijay4.webp", "Vijay");
    await photos("Pranav5.webp", "Pranav");
    await photos("PP5.webp", "PP");
    await photos("pranav1.webp", "Pranav");
    await photos("pranav2.webp", "Pranav");
    await photos("Vijay5.webp", "Vijay");
    await photos("Pranav6.webp", "Pranav");
    await photos("Pranav7.webp", "Pranav");
    await photos("PP6.webp", "PP");
    await photos("PP7.webp", "PP");
    await photos("Vijay6.webp", "Vijay");
    await photos("Vijay7.webp", "Vijay");
    await photos("Pranav8.webp", "Pranav");
    await photos("Pranav9.webp", "Pranav");
    await photos("PP8.webp", "PP");
    await photos("Vijay8.webp", "Vijay");
    await photos("PP9.webp", "PP");
    await photos("Pranav10.webp", "Pranav");
    await photos("PP10.webp", "PP");
    await photos("Parinda.png", "Parinda");
    await photos("parinda.webp", "Parinda");
    await photos("pvpwarriors.webp", "pvp warriors");
    await photos("PVP warriors (1).webp", "pvp warriors");
    await photos("Vijay9.webp", "Vijay");
    await photos("PP11.webp", "PP");
    await photos("Pranav11.webp", "Pranav");
    await photos("Pranav12.webp", "Pranav");
    await photos("parinda (2).webp", "Parinda");
    await photos("PVP Warriors (2).webp", "pvp warriors");
    await photos("PP12.webp", "PP");
    await photos("Vijay10.webp", "Vijay");
    await photos("Pranav13.webp", "Pranav");
    await photos("PVP Warriors (3).webp", "PVP Warriors");
    await photos("PVPWarriors (5).webp", "PVP Warriors");
    await photos("PVP Warriors.webp", "PVP Warriors");
    await photos("PVP Warriors (4).webp", "PVP Warriors");
    await photos("Parinda (3).webp", "Parinda");
    await photos("Parinda (4).webp", "Parinda");
    await photos("Parinda (5).webp", "Parinda");
    await photos("Vijay11.webp", "Vijay");
    await photos("Vijay12.webp", "Vijay");
    await photos("Pranav14.webp", "Pranav");
    await photos("Pranav15.webp", "Pranav");
    await photos("PP 13.webp", "PP");
    await photos("Vijay 13.webp", "Vijay");
    await photos("Vijay 14.webp", "Vijay");
    await photos("PP 14.webp", "PP");
    await photos("PP 15.webp", "PP");
    await photos("PP 16.webp", "PP");
    await photos("Pranav 16 .webp", "Pranav");
    await photos("Pranav 17.webp", "Pranav");
    await photos("Vijay 15 .webp", "Vijay");
    await photos("Pranav 18.webp", "Pranav");
    await photos("pranav 19.webp", "Pranav");
    await photos("Vijay 16.webp", "Vijay");
    await photos("Vijay 17.webp", "Vijay");
    await photos("PP 17.webp", "PP");
    await photos("PP 18.webp", "PP");
    await photos("PVP Warriors 8.webp", "PVP Warriors");
    await photos("PVP Warriors 9.webp", "PVP Warriors");
    await photos("PVP Warriors 10.webp", "PVP Warriors");
    await photos("pvpwarriors2.png", "PVP Warriors");
    await photos("pvpwarriors3.png", "PVP Warriors");
    await photos("vijay2.png", "Vijay");
    await photos("vijay3.png", "Vijay");
})();

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-grid img");

    images.forEach(img => {
        if (img.complete) {
            img.classList.add("loaded");
        } else {
            img.addEventListener("load", () => {
                img.classList.add("loaded");
            });
        }
    });
});
let currentIndex = 0;
let galleryImages = [];

document.addEventListener("DOMContentLoaded", () => {
    galleryImages = [...document.querySelectorAll(".hover-image-wrapper img")];
});

document.addEventListener("click", function (e) {
    const img = e.target.closest(".hover-image-wrapper img");
    if (!img) return;

    galleryImages = [...document.querySelectorAll(".hover-image-wrapper img")];

    currentIndex = galleryImages.indexOf(img);

    document.getElementById("lightbox-img").src =
        galleryImages[currentIndex].src;

    document.getElementById("lightbox").style.display = "flex";

    updateThumbnails();
});

document.getElementById("close-lightbox").addEventListener("click", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    galleryImages =
        [...document.querySelectorAll(".hover-image-wrapper img")];

    currentIndex = galleryImages.indexOf(img);
    lightbox.style.display = "none";
    lightboxImg.src = "";


    updateThumbnails();
});


document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {

        lightbox.style.display = "none";
        lightboxImg.src = "";
    }
});

document.addEventListener("keydown", (e) => {

    const lightbox =
        document.getElementById("lightbox");

    if (lightbox.style.display !== "flex") return;

    if (e.key === "ArrowRight") {
        currentIndex =
            (currentIndex + 1) % galleryImages.length;

        document.getElementById("lightbox-img").src =
            galleryImages[currentIndex].src;

            updateThumbnails();
    }

    if (e.key === "ArrowLeft") {
        currentIndex =
            (currentIndex - 1 + galleryImages.length) %
            galleryImages.length;

        document.getElementById("lightbox-img").src =
            galleryImages[currentIndex].src;

            updateThumbnails();
    }
});


// Download function with proper filename
function downloadImage() {
    const imgSrc = document.getElementById('lightbox-img').src;
    const fileName = imgSrc.split('/').pop();
    const link = document.createElement('a');
    link.href = imgSrc;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Share function with fallback
function shareImage() {
    const imgSrc = document.getElementById('lightbox-img').src;
    const fileName = imgSrc.split('/').pop().split('.')[0];

    if (navigator.share) {
        navigator.share({
            title: fileName,
            text: 'Check out this image from PVP Gaming Gallery!',
            url: window.location.origin + '/' + imgSrc
        }).catch(err => {
            console.log('Sharing failed:', err);
            fallbackShare(imgSrc);
        });
    } else {
        fallbackShare(imgSrc);
    }
}

function fallbackShare(imgSrc) {
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = window.location.origin + '/' + imgSrc;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Image link copied to clipboard!');
}
let touchStartX = 0;
let touchEndX = 0;

const lightboxImg = document.getElementById("lightbox-img");

lightboxImg.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

lightboxImg.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;

    const swipeDistance = touchStartX - touchEndX;

    // Left swipe → next image
    if (swipeDistance > 50) {
        currentIndex =
            (currentIndex + 1) % galleryImages.length;

        lightboxImg.src =
            galleryImages[currentIndex].src;
        updateThumbnails();
    }

    // Right swipe → previous image
    if (swipeDistance < -50) {
        currentIndex =
            (currentIndex - 1 + galleryImages.length) %
            galleryImages.length;

        lightboxImg.src =
            galleryImages[currentIndex].src;
        updateThumbnails();
    }
});

const searchInput = document.getElementById("imageSearch");
const clearBtn = document.getElementById("clear-search");

function filterImages() {
    const query = searchInput.value.toLowerCase();
    const wrappers = document.querySelectorAll(".hover-image-wrapper");

    wrappers.forEach(wrapper => {
        const name =
            wrapper.querySelector(".hover-image-overlay")?.innerText.toLowerCase() || "";
        const alt =
            wrapper.querySelector("img")?.alt.toLowerCase() || "";

        const match = name.includes(query) || alt.includes(query);
        wrapper.style.display = match ? "" : "none";
    });

    // 🔥 ONLY RULE: text hai → cross dikhe
    clearBtn.style.display = query.length > 0 ? "inline-block" : "none";
}

// typing + backspace
searchInput.addEventListener("input", () => {
    document.getElementById("search-icon").style.opacity = "1";
    filterImages();
});
// cross click
clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    filterImages(); // images + cross reset
    document.getElementById("search-icon").style.opacity = "0";

    searchInput.focus();
});


function updateThumbnails() {

    const strip = document.getElementById("thumbnail-strip");
    strip.innerHTML = "";

    galleryImages.forEach((img, index) => {

        const thumb = document.createElement("img");

        thumb.src = img.src;

        if (index === currentIndex) {
            thumb.classList.add("active-thumb");
        }

        thumb.addEventListener("click", () => {

            currentIndex = index;

            document.getElementById("lightbox-img").src =
                galleryImages[currentIndex].src;

            updateThumbnails();
        });

        strip.appendChild(thumb);

        if (index === currentIndex) {
            setTimeout(() => {
                    thumb.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest"
                });
            }, 0);
        }
    });

}
