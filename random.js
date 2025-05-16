const imageCount = 255; // Anzahl deiner Bilder
let currentImage = 1;

document.getElementById("next-btn").addEventListener("click", () => {
    currentImage = (currentImage % imageCount) + 1;
    document.getElementById("image").src = `pic1 (${currentImage}).avif`; // Anpassen an deine Bildnamen
});

document.getElementById("prev-btn").addEventListener("click", () => {
    currentImage = ((currentImage - 2 + imageCount) % imageCount) + 1;
    document.getElementById("image").src = `pic1 (${currentImage}).avif`; // Anpassen an deine Bildnamen
});

// Erstes Bild laden
document.getElementById("image").src = `pic1 (${currentImage}).avif`; // Anpassen an deine Bildnamen