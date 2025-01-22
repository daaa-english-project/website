// Initialisation de la carte
const map = L.map('map').setView([35, 15], 2); // Centre global, zoom niveau 2

// Ajout du fond de carte (tiles OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Charger les deux fichiers GeoJSON
Promise.all([
    fetch('countries.geojson').then(response => response.json()),
    fetch('import_export_layer.geojson').then(response => response.json())
])
    .then(([geometryData, infoData]) => {
        // Créer un dictionnaire à partir de import_export_layer.geojson
        const infoDict = {};
        infoData.features.forEach(feature => {
            const isoCode = feature.properties.ISO_A3; // Utilise ISO_A3 comme clé
            infoDict[isoCode] = feature.properties;    // Stocke les propriétés supplémentaires
        });

        console.log('Dictionnaire des informations supplémentaires :', infoDict);

        // Ajouter les géométries de countries.geojson à la carte
        L.geoJSON(geometryData, {
            style: feature => {
                const isoCode = feature.properties.ISO_A3; // Récupère le code ISO
                const additionalInfo = infoDict[isoCode]; // Vérifie s'il y a des infos supplémentaires

                return {
                    color: 'blue',
                    weight: 1.5,
                    fillColor: additionalInfo ? 'lightgreen' : 'lightblue', // Vert si infos supplémentaires
                    fillOpacity: 0.5
                };
            },
            onEachFeature: (feature, layer) => {
                const isoCode = feature.properties.ISO_A3;
                const additionalInfo = infoDict[isoCode]; // Récupère les infos supplémentaires

                // Contenu de la popup
                let popupContent = `<h3>${feature.properties.ADMIN || 'Nom non disponible'}</h3>`;
                popupContent += `<p><b>ISO Code :</b> ${isoCode || 'N/A'}</p>`;
                
                if (additionalInfo) {
                    popupContent += `<p><br><b>Exports :</b> ${additionalInfo.EXPORTS || 'No data'}`;
                    popupContent += `<br><br><b>Imports :</b> ${additionalInfo.IMPORTS || 'No data'}</p>`;
                } else {
                    popupContent += `<p>No additional information available.</p>`;
                }

                // Associer la popup à chaque couche
                layer.bindPopup(popupContent);

                // Effet interactif : Surbrillance au survol
                layer.on('mouseover', () => {
                    layer.setStyle({
                        fillColor: 'yellow',
                        fillOpacity: 0.8
                    });
                });

                // Retour au style initial après le survol
                layer.on('mouseout', () => {
                    layer.setStyle({
                        fillColor: additionalInfo ? 'lightgreen' : 'lightblue', // Revenir à la couleur initiale
                        fillOpacity: 0.5
                    });
                });
            }
        }).addTo(map);
    })
    .catch(error => {
        console.error('Erreur lors du chargement ou de la liaison des GeoJSON :', error);
        alert('Une erreur est survenue lors du chargement des données GeoJSON.');
    });
