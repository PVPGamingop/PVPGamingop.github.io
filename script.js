document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".hover-image-wrapper").forEach(wrapper => {
        let img = wrapper.querySelector("img");
        let downloadBtn = document.createElement("a");
        downloadBtn.href = img.src;
        downloadBtn.download = img.src.split('/').pop();
        downloadBtn.classList.add("download-btn");
       
        let icon = document.createElement("img");
        icon.src = "download-icon.png"; 
        icon.alt = "Download";
        icon.classList.add("download-icon"); 

        downloadBtn.appendChild(icon);
        wrapper.appendChild(downloadBtn);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("imageSearch");
    const imageWrappers = document.querySelectorAll(".hover-image-wrapper");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();

        imageWrappers.forEach(wrapper => {
            const overlayText = wrapper.querySelector(".hover-image-overlay").textContent.toLowerCase();
            if (overlayText.includes(searchText)) {
                wrapper.style.display = "block";
            } else {
                wrapper.style.display = "none";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Get the button and image element
    const toggleButton = document.getElementById("darkModeToggle");
    const toggleImage = toggleButton.querySelector("img");

    // Add event listener to toggle dark mode
    toggleButton.addEventListener("click", () => {
        // Toggle dark mode class on body
        document.body.classList.toggle("dark-mode");

        // Check if dark mode is active and change image accordingly
        if (document.body.classList.contains("dark-mode")) {
            toggleImage.src = "light_mode .png"; // Dark mode enabled, show light mode icon
        } else {
            toggleImage.src = "night-mode1 .png"; // Dark mode disabled, show night mode icon
        }

        console.log("Dark mode toggled. Current image:", toggleImage.src);
    });
});
