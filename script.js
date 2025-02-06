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
    });

    // Upload Form Handling
    document.getElementById('upload-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const imageInput = document.getElementById('art-image');
        const title = document.getElementById('art-title').value;
        const artist = document.getElementById('artist-name').value;
        const artClass = document.getElementById('artist-class').value;
        const category = document.getElementById('art-category').value;

        if (imageInput.files.length === 0 || !title || !artist) {
            alert("Please complete all fields!");
            return;
        }

        const reader = new FileReader();
        reader.onload = function(event) {
            const artPost = document.createElement('div');
            artPost.className = 'art-post';
            artPost.dataset.category = category;
            artPost.dataset.class = artClass;

            artPost.innerHTML = `
                <img src="${event.target.result}" alt="Artwork">
                <p><strong>${title}</strong></p>
                <p>Creator: ${artist}, ${artClass}</p>
                <p>Category: ${category}</p>
                <button class="delete-btn">Delete</button>
            `;

            document.getElementById('art-container').prepend(artPost);
            uploadModal.style.display = "none";
            document.getElementById('upload-form').reset();
        };

        reader.readAsDataURL(imageInput.files[0]);
    });

    // Event delegation for delete buttons
    document.getElementById("art-container").addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-btn")) {
            event.target.parentElement.remove();
        }
    });

    // Filter function
    window.filterArt = function(category) {
        document.querySelectorAll('.art-post').forEach(art => {
            art.style.display = (category === 'all' || art.dataset.category === category) 
                ? 'block' 
                : 'none';
        });
    };
});
