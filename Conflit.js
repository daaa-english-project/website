// Initialisation de la carte
const map = L.map('map').setView([20, 0], 2);

// Ajout des tuiles OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

fetch('Conflit.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            onEachFeature: (feature, layer) => {
                layer.on('click', () => {
                    openConflictModal(feature.properties);
                });
            },
            pointToLayer: (feature, latlng) => {
                return L.marker(latlng, {
                    icon: L.icon({
                        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41]
                    })
                });
            }
        }).addTo(map);
    });
function openConflictModal(conflict) {
    const modal = document.getElementById('conflictModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalContent = document.getElementById('modalContent');
    const modalVideo = document.getElementById('modalVideo');

    // Mise à jour des informations dans le modal
    modalTitle.textContent = conflict.name;
    modalImage.src = conflict.image;
    modalDescription.textContent = conflict.description;
    modalContent.textContent = conflict.content;

    // Si le champ video contient un code iframe, utilisez-le directement
    if (conflict.video) {
        modalVideo.innerHTML = conflict.video;  // Directement l'iframe (en JSON)
    }
    // Ajouter un lien si disponible
    else if (conflict.lien) {
        modalVideo.innerHTML = `
            <p>Watch the video at the following link:</p>
            <a href="${conflict.lien}" target="_blank" rel="noopener noreferrer">
                ${conflict.name} - Video
            </a>
        `;
    } else {
        modalVideo.innerHTML = '<p>No link available for this conflict.</p>';
    }
    modal.style.display = 'block';
}


document.addEventListener('DOMContentLoaded', () => {
    const closeModalButton = document.getElementById('closeModal');
    const modal = document.getElementById('conflictModal');
    const modalVideo = document.getElementById('modalVideo');

    if (closeModalButton && modal) {
        closeModalButton.addEventListener('click', () => {
            modal.style.display = 'none';
            if (modalVideo) {
                modalVideo.innerHTML = ""; // Réinitialiser la vidéo
            }
        });
    }
});

