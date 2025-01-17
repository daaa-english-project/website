// Initialisation de la carte
const map = L.map('map').setView([20, 0], 2); // Centre global, zoom niveau 2

// Ajout du fond de carte (tiles OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Charger le fichier GeoJSON et afficher les zones des pays
fetch('countries.geojson')
    .then(response => {
        console.log('Statut HTTP:', response.status); // Affiche le statut HTTP
        if (!response.ok) {
            throw new Error(`Erreur HTTP détectée : ${response.status}`);
        }
        return response.json(); // Parse les données GeoJSON
    })
    .then(data => {
        console.log('GeoJSON chargé :', data); // Vérifie que les données sont bien reçues

        const kenyaISO = 'KEN'; // Code ISO du Kenya

        // Ajoute les données à la carte
        L.geoJSON(data, {
            style: feature => ({
                color: 'blue',
                weight: 1.5,
                fillColor: 'lightblue',
                fillOpacity: 0.5
            }),
            onEachFeature: (feature, layer) => {
                let isClicked = false; // Variable pour suivre si un pays a été cliqué

                // Événement au clic
                layer.on('click', () => {
                    isClicked = true; // Marque ce pays comme cliqué

                    if (feature.properties.ISO_A3 === kenyaISO) {
                        layer.setStyle({
                            fillColor: 'green', // Kenya trouvé
                            fillOpacity: 0.8
                        });
                        alert('Bravo ! Vous avez trouvé le Kenya.');
                    } else {
                        layer.setStyle({
                            fillColor: 'red', // Mauvais choix
                            fillOpacity: 0.8
                        });
                        alert(`Ce n'est pas le Kenya. Essayez encore !`);
                    }
                });

                // Événement au survol
                layer.on('mouseover', () => {
                    if (!isClicked) { // Change la couleur uniquement si le pays n'est pas encore cliqué
                        layer.setStyle({
                            fillColor: 'yellow', // Couleur de surbrillance
                            fillOpacity: 0.8    // Augmente l'opacité
                        });
                    }
                });

                // Retour au style initial après le survol
                layer.on('mouseout', () => {
                    if (!isClicked) { // Restaure uniquement si le pays n'est pas encore cliqué
                        layer.setStyle({
                            fillColor: 'lightblue',
                            fillOpacity: 0.5
                        });
                    }
                });
            }
        }).addTo(map);
    })
    .catch(error => {
        console.error('Erreur dans le chargement ou le traitement du GeoJSON :', error);
        alert('Une erreur est survenue lors du chargement des données GeoJSON.');
    });
