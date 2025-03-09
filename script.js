
document.addEventListener("DOMContentLoaded", function () { document.querySelectorAll(".hover-image-wrapper").forEach(e => { let t = e.querySelector("img"), a = document.createElement("a"); a.href = t.src, a.download = t.src.split("/").pop(), a.classList.add("download-btn"); let o = document.createElement("img"); o.src = "download-icon.png", o.alt = "Download", o.classList.add("download-icon"), a.appendChild(o), e.appendChild(a) }) }), document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.getElementById("imageSearch");
    let imageWrappers = document.querySelectorAll(".hover-image-wrapper");

    searchInput.addEventListener("input", function () {
        let searchText = searchInput.value.toLowerCase();

        // ✅ Ab saari images detect hongi chahe visible ho ya na ho
        imageWrappers.forEach(wrapper => {
            let overlayText = wrapper.querySelector(".hover-image-overlay").textContent.toLowerCase();
            let img = wrapper.querySelector("img");
            let imgAlt = img.alt.toLowerCase();
            let imgFileName = img.src.split('/').pop().split('.')[0].replace(/[-_]/g, ' ').toLowerCase(); // ✅ Image file name extract kiya

            if (overlayText.includes(searchText) || imgAlt.includes(searchText) || imgFileName.includes(searchText)) {
                wrapper.style.display = "block"; // ✅ Match hone pe dikhaye
            } else {
                wrapper.style.display = "none"; // ❌ Match nahi toh hide
            }
        });
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
window.onload = typeWriter;
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80, // Kitne particles chahiye
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: { value: '#00ff00' }, // Green color particles
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        move: {
            enable: true,
            speed: 2, // Speed of particles
            direction: 'none',
            out_mode: 'out'
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' }, // Cursor ke aas-paas hataenge
            onclick: { enable: true, mode: 'push' }
        },
        modes: {
            repulse: { distance: 100 },
            push: { particles_nb: 4 }
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    // ✅ Sabhi images pe click event add karo
    document.querySelectorAll(".hover-image-wrapper img").forEach(img => {
        img.addEventListener("click", function () {
            lightboxImg.src = this.src;
            lightbox.classList.add("active");
        });
    });

    // ❌ Lightbox Close Event
    document.querySelector(".close-btn").addEventListener("click", function () {
        lightbox.classList.remove("active");
    });
});

// ✅ Download Function (Direct Save)
function downloadImage() {
    const imgSrc = document.getElementById("lightbox-img").src;
    const link = document.createElement("a");
    link.href = imgSrc;
    link.download = "downloaded_image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ✅ Share Function (No New Popup)
function shareImage() {
    const imgSrc = document.getElementById("lightbox-img").src;

    if (navigator.share) {
        navigator.share({
            title: "Check out this image!",
            text: "Look at this awesome image.",
            url: imgSrc
        }).catch(err => console.log("Sharing failed", err));
    } else {
        alert("Sharing not supported. Copy this link: " + imgSrc);
    }
}

