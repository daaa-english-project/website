// Initialisation de la carte
const map = L.map('map').setView([20, 0], 2); // Centre global, zoom niveau 2

// Ajout du fond de carte (tiles OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Charger le fichier GeoJSON et afficher les zones des pays
fetch('countries.geojson')
/*fetch('http://github.com/datasets/geo-countries/tree/main/datacountries.geojson')*/ //https://github.com/datasets/geo-countries/tree/main/data
    .then(response => {
        console.log('Statut HTTP:', response.status); // Affiche le statut HTTP
        if (!response.ok) {
            throw new Error(`Erreur HTTP détectée : ${response.status}`);
        }
        return response.json(); // Parse les données GeoJSON
    })
    .then(data => {
        console.log('GeoJSON chargé :', data); // Vérifie que les données sont bien reçues

        // Ajoute les données à la carte
        L.geoJSON(data, {
            style: feature => ({
                color: 'blue',
                weight: 1.5,
                fillColor: 'lightblue',
                fillOpacity: 0.5
            }),
            onEachFeature: (feature, layer) => {
                // Effet interactif : Surbrillance au survol
                layer.on('mouseover', () => {
                    layer.setStyle({
                        fillColor: 'yellow', // Couleur de surbrillance
                        fillOpacity: 0.8    // Augmente l'opacité
                    });
                });

                // Retour au style initial après le survol
                layer.on('mouseout', () => {
                    layer.setStyle({
                        fillColor: 'lightblue',
                        fillOpacity: 0.5
                    });
                });

                // Popup avec les informations du pays
                layer.bindPopup(`
                    <h3>${feature.properties.ADMIN}</h3>
                    <p>ISO Code: ${feature.properties.ISO_A3 || 'N/A'}</p>
                `);
            }
        }).addTo(map);
    })
    .catch(error => {
        console.error('Erreur dans le chargement ou le traitement du GeoJSON :', error);
        alert('Une erreur est survenue lors du chargement des données GeoJSON.');
    });
