// Initialisation de la carte
const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let currentLayer; // Couche actuelle sur la carte
let timeline = { min: 1950, max: 2023, step: 1 }; // Plage par défaut (Refugees)
let year = timeline.min;

// Fonction pour charger et lier les GeoJSON
function loadAndLinkGeoJSON(countriesFile, migrationFile) {
    Promise.all([
        fetch(countriesFile).then(res => res.json()),
        fetch(migrationFile).then(res => res.json())
    ])
        .then(([countriesData, migrationData]) => {
            // Lier les données d'émigration à chaque pays
            const migrationMap = {};
            migrationData.features.forEach(feature => {
                if (feature.properties.year == year) { // Filtrer par année
                    const isoA3 = feature.properties.ISO_A3;
                    const emigrants = feature.properties.emigrants;
                    migrationMap[isoA3] = emigrants;
                }
            });

            // Ajouter les données d'émigration aux pays
            countriesData.features.forEach(feature => {
                const isoA3 = feature.properties.ISO_A3;
                feature.properties.emigrants = migrationMap[isoA3] || 0; // 0 si aucune donnée
            });

            // Mettre à jour la carte avec les données enrichies
            updateMapWithGeoJSON(countriesData);
        })
        .catch(error => console.error('Erreur lors du chargement des fichiers GeoJSON:', error));
}

// Fonction pour déterminer la couleur selon le nombre d'émigrants
function getColor(emigrants) {
    return emigrants > 1000000 ? '#08306b' :
           emigrants > 500000  ? '#08519c' :
           emigrants > 100000  ? '#3182bd' :
           emigrants > 50000   ? '#6baed6' :
           emigrants > 10000   ? '#bdd7e7' :
           emigrants > 0       ? '#deebf7' :
           emigrants < 0       ? '#ff4d4d' : // Rouge pour les valeurs négatives
                                '#f7fbff'; // Blanc pour les données manquantes
}

// Style pour chaque pays
function style(feature) {
    const emigrants = feature.properties.emigrants || 0;
    return {
        fillColor: getColor(emigrants),
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

// Mettre à jour la carte avec les données GeoJSON
function updateMapWithGeoJSON(data) {
    if (currentLayer) {
        map.removeLayer(currentLayer);
    }

    currentLayer = L.geoJSON(data, {
        style: style,
        onEachFeature: (feature, layer) => {
            const props = feature.properties || {};
            layer.bindPopup(
                `<h3>${props.ADMIN || 'Unknown Country'}</h3>` +
                `<p>Emigrants: ${props.emigrants || 'No data'}</p>`
            );
        }
    }).addTo(map);
}

// Mettre à jour les données en fonction de l'année et de l'onglet
function updateMap() {
    const migrationType = document.getElementById('migration-type').value; // Type de migration sélectionné

    // Associe chaque type de migration à un fichier GeoJSON
    const fileMap = {
        refugeesorigin: 'refugee_origin.geojson',
        refugeesdestination: 'Refugees_destination.geojson',
        internal: 'internal.geojson',
        afghanistan:'afghanistan.geojson',
        ukraine:'ukraine.geojson',
        syria:'syria.geojson'

    };

    const geojsonFile = fileMap[migrationType];
    loadAndLinkGeoJSON('countries.geojson', geojsonFile);
}

// Mettre à jour la plage temporelle en fonction de l'onglet sélectionné
function updateTimeline() {
    const migrationType = document.getElementById('migration-type').value;

    if (migrationType === 'internal') {
        timeline = { min: 2018, max: 2023, step: 1 };
    } else if (['afghanistan', 'ukraine', 'syria'].includes(migrationType)) {
        timeline = { min: 1990, max: 2020, step: 5 };
    } else {
        timeline = { min: 1950, max: 2023, step: 1 };
    }

    const slider = document.getElementById('year-slider');
    slider.min = timeline.min;
    slider.max = timeline.max;
    slider.step = timeline.step;
    slider.value = timeline.min;
    year = timeline.min;

    document.getElementById('current-year').textContent = year;
    updateMap(); // Mettre à jour la carte
}

// Ajout d'une légende à la carte
const legend = L.control({ position: 'bottomright' });

legend.onAdd = function () {
    const div = L.DomUtil.create('div', 'info legend');
    const grades = [0, 0, 10000, 50000, 100000, 500000, 1000000];

    grades.forEach((grade, i) => {
        div.innerHTML +=
            `<i style="background:${getColor(grade + 1)}"></i> ` +
            `${grade}${grades[i + 1] ? '&ndash;' + grades[i + 1] : '+'}<br>`;
    });

    return div;
};

legend.addTo(map);

// Gestion des événements pour les contrôles
document.getElementById('migration-type').addEventListener('change', updateTimeline);

document.getElementById('year-slider').addEventListener('input', (e) => {
    year = e.target.value;
    document.getElementById('current-year').textContent = year;
    updateMap(); // Recharge les données pour l'année sélectionnée
});

// Initialisation
updateTimeline();
