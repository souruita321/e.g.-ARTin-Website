document.addEventListener("DOMContentLoaded", function () {
    // Upload Modal Handling
    const uploadModal = document.getElementById("upload-modal");
    const uploadBtn = document.getElementById("upload-btn");
    const closeUpload = document.querySelector("#upload-modal .close-btn");

    uploadBtn.addEventListener("click", () => uploadModal.style.display = "block");
    closeUpload.addEventListener("click", () => uploadModal.style.display = "none");

    // About Modal Handling
    const aboutModal = document.getElementById("about-modal");
    const aboutBtn = document.getElementById("about-btn");
    const closeAbout = document.querySelector("#about-modal .close-btn");

    aboutBtn.addEventListener("click", () => aboutModal.style.display = "block");
    closeAbout.addEventListener("click", () => aboutModal.style.display = "none");

    // Close modals when clicking outside
    window.addEventListener("click", (event) => {
        if (event.target === uploadModal) uploadModal.style.display = "none";
        if (event.target === aboutModal) aboutModal.style.display = "none";
