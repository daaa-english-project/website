// Enhanced Timeline Data with Dates, Images, Videos, and Bibliography
const timelineEvents = [
    { 
        id: 'troc', 
        title: 'Barter', 
        date: '10,000 BCE',
        description: 'Bartering was the earliest form of trade, where goods and services were exchanged without money.',
        image: ['image/commerce/frise/bartering.jpg'],
        video: null,
        bibliography: null,
        content: [],
        extraImage: null // Pas d'image supplémentaire
    },
    { 
        id: 'monnaie', 
        title: 'Creation of Money', 
        date: '3,000 BCE',
        description: 'The invention of money revolutionized trade, making it easier to value and exchange goods.',
        image: ['image/commerce/frise/money.png'],
        video: null,
        bibliography: 'https://lifemathmoney.com/the-history-and-evolution-of-money/',
        content: [],
        extraImage: null // Pas d'image supplémentaire

    },
    { 
        id: 'route_soie', 
        title: 'Silk Road', 
        date: '130 BCE - 1453 CE',
        description: 'The Silk Road connected Asia and Europe, facilitating trade in silk, spices, and other goods.',
        image: ['image/commerce/frise/silkroad.jpg'],
        video: 'https://www.youtube.com/watch?v=Q7xp1-VvtZ0',
        bibliography: 'https://www.britannica.com/topic/Silk-Road-trade-route',
         content: [
        {
            subtitle: 'What was the Silk Road?',
            text: 'The Silk Road was an ancient trade route that linked the Western world with the Middle East and Asia. It was a major conduit for trade between the Roman Empire and China, and later between medieval European kingdoms and China.'
        },
        {
            subtitle: 'Where did the Silk Road start and end?',
            text: 'The Silk Road began in north-central China in Xi’an (in modern Shaanxi province). A caravan track stretched west along the Great Wall of China, across the Pamirs, through Afghanistan, and into the Levant and Anatolia. Its length was about 4,000 miles (more than 6,400 km). Goods were then shipped to Europe via the Mediterranean Sea.'
        },
        {
            subtitle: 'What major goods traveled along the Silk Road?',
            text: 'Chinese merchants exported silk to Western buyers. From Rome and later from Christian kingdoms, wools, gold, and silver traveled eastward. The route also facilitated the exchange of ideas, including the spread of Nestorian Christianity and Buddhism.'
        },
        {
            subtitle: 'Historical Highlights',
            text: `Originating at Xi’an, the 4,000-mile road followed the Great Wall of China to the northwest, bypassed the Takla Makan Desert, climbed the Pamirs mountains, crossed Afghanistan, and reached the Levant. Few people traveled the entire route; goods were exchanged in stages by middlemen. 
            
            During the Roman Empire's decline and the rise of Arabian power, the route became unsafe. It saw a revival in the 13th and 14th centuries under the Mongols, and Marco Polo famously used it to travel to China. The Silk Road also played a role in spreading the Black Death pandemic to Europe in the mid-14th century.`
        }
    ],
        extraImage: null // Pas d'image supplémentaire

    },
    { 
        id: 'colonial', 
        title: 'Colonial Trade', 
        date: '16th - 19th Century',
        description: 'Colonial powers established trade routes to exploit resources and spread goods globally.',
        image: ['image/commerce/frise/world18th.png'],
        video: null,
        bibliography: 'https://mapsforwhap.weebly.com/imperialism.html',
         content: [
        {
            subtitle:'Europe Colonial territories',
            text : 'Europe’s relatively advanced technology and superior weaponry enabled it to explore the world with ease, subjugate native populations, establish colonial settlements, and produce goods on an unprecedented scale in human history.'},
{
            subtitle:'Types of Goods Exchanged Between Continents',
             text : 'During this era of exploration and colonization, a vast array of goods was exchanged across continents, shaping global trade networks. Europe exported manufactured goods such as textiles, weapons, and metal tools. From the Americas, they imported agricultural products like sugar, tobacco, cotton, and later, coffee. Africa contributed primarily human labor through the transatlantic slave trade, while also supplying gold and ivory. Asia provided luxury goods like spices, silk, and porcelain, which became highly sought after in European markets. This extensive exchange profoundly transformed economies and societies worldwide.'}
],
        extraImage: ['image/commerce/frise/routecolonie.jpg'] // Pas d'image supplémentaire

    },
     { 
        id: 'mercantilism', 
        title: 'Mercantilism and Specialization', 
        date: '17th - 18th Century',
        description: 'Nations began focusing on producing goods they could trade efficiently, boosting global trade.',
        image: 'image/commerce/frise/mercantilism.png',
        video: null,
        bibliography: 'https://www.economicsonline.co.uk/definitions/what-is-mercantilism.html/',
        content: [
        {
            subtitle: "Mercantilism: A System of Self-Sufficiency",
            text: "Mercantilism focused on maximizing exports, minimizing imports, and increasing a country's supply of gold. This system relied heavily on self-sufficiency and was the dominant economic approach for most European countries before the 19th century."
        },
        {
            subtitle: "The Shift Towards Trade and Specialization",
            text: "As time progressed, people began to value increased trade and exchange between countries. The concept of comparative advantage emerged, emphasizing that countries could benefit by specializing in the production of goods they were most efficient at making. This idea revolutionized international trade and fostered specialization."
        },
        {
            subtitle: "Modern Economic Measures: GDP Over Gold",
            text: "Today, a country's value is no longer judged by the amount of gold it amasses. Instead, productivity is the key metric, measured by Gross Domestic Product (GDP). GDP represents the total value of all final goods and services produced within a country in a year, reflecting its economic output and efficiency."
        }
    ],
        extraImage: null 
    },
{
    id: 'revolution_industrielle',
    title: 'Industrial Revolution',
    date: '18th - 19th Century',
    description: 'Mass production and new technologies accelerated trade during the Industrial Revolution.',
    image: ['image/commerce/frise/spreadindustrialisation.png'],
    video: null,
    bibliography: 'https://historyvista.com/how-did-the-industrial-revolution-spread/',
    content: [
        {
            subtitle: "Overview of the Industrial Revolution",
            text: "The Industrial Revolution began in the late 18th century in Britain and quickly spread to other European countries and beyond. It marked a period of dramatic technological advancements, including the invention of the steam engine, mechanized factories, and mass production processes."
        },
        {
            subtitle: "Rapid Development Across Europe",
            text: "The Industrial Revolution's innovations spread rapidly to other European countries, such as France, Germany, and Belgium. This expansion was driven by the adoption of mechanized industry, increasing productivity, and improved infrastructure, which allowed nations to compete in the global market."
        },
        {
            subtitle: "Transformation of Trade Flows",
            text: "The revolution significantly transformed trade both intercontinentally and within Europe. Steam-powered ships and the development of railroads revolutionized transportation, enabling goods to move faster, cheaper, and in greater quantities. Railways connected industrial hubs across Europe, facilitating the movement of raw materials and finished products. Intercontinental trade also surged as European powers exported industrial goods and imported raw materials from their colonies."
        },
        {
            subtitle: "Impact of Railroads on Commerce",
            text: "The expansion of railway networks played a pivotal role in the Industrial Revolution. Trains drastically reduced travel time for goods and people, allowing industries to expand their reach. This not only boosted trade within Europe but also supported the growing global trade network by connecting ports and inland regions more efficiently."
        }
    ],
    extraImage: ['image/commerce/frise/industrialurbanisation.jpeg']
},

   
{
    id: 'mondialisation',
    title: 'Globalization',
    date: '20th Century - Present',
    description: 'Globalization expanded trade further, connecting markets and enhancing interdependence.',
    image: ['image/commerce/frise/globalization.png'],
    video: null,
    bibliography: 'https://maseconomics.com/what-is-globalization/#elementor-toc__heading-anchor-0',
    content: [
        {
            subtitle: 'What is Globalization?',
            text: 'Globalization refers to the increasing interconnectedness of nations through trade, technology, and cultural exchange. It has created a global marketplace where goods, services, and resources move freely across borders. By enabling countries to specialize in what they produce best, globalization boosts efficiency and lowers costs for consumers worldwide.'
        },
        {
            subtitle: 'Trade Flows and Economic Interdependence',
            text: 'Globalization has vastly expanded trade flows, connecting markets and fostering economic interdependence. Countries now rely on each other for raw materials, manufactured goods, and essential services. However, this interdependence means that economic crises or disruptions in one region can quickly spread to others, amplifying global vulnerabilities.'
        },
        {
            subtitle: 'Challenges and Opportunities',
            text: 'While globalization drives economic growth and access to new products, it also poses challenges. The transport of goods contributes to greenhouse gas emissions, and the reliance on global supply chains can be risky during crises. Despite these challenges, globalization has strengthened international cooperation and created opportunities for technological and cultural exchange.'
        }
    ],
    extraImage: null
},

    
    {
        id: 'wto_ifm_world_bank',
        title: 'WTO, IMF, and World Bank',
        date: '20th Century - Present',
        description: 'Organizations like the WTO and IMF were established to regulate and promote international trade.',
        image: 'image/commerce/frise/wto.png',
        video: 'https://www.youtube.com/watch?v=0NSwdtAfWm4&list=WL&index=3&pp=gAQBiAQB' ,
        bibliography: 'https://www.wto.org/english/thewto_e/whatis_e/inbrief_e/inbr_e.htm',
        extraImage:null,
        extraVideo: null,
       content: [
    {
        subtitle: 'World Trade Organization (WTO)',
        text: `
            <ul>
                <li><strong>Date of Creation:</strong> 1995 (evolved from the General Agreement on Tariffs and Trade, GATT, 1948).</li>
                <li><strong>Role:</strong>
                    <ul>
                        <li>Ensures that international trade flows smoothly, predictably, and freely.</li>
                        <li>Resolves disputes between member countries.</li>
                        <li>Promotes fair competition by reducing trade barriers.</li>
                    </ul>
                </li>
                <li><strong>Relevance:</strong> The WTO fosters cooperation among nations, ensuring that trade disputes are addressed diplomatically rather than through conflict.</li>
            </ul>
        `
    },
    {
        subtitle: 'International Monetary Fund (IMF)',
        text: `
            <ul>
                <li><strong>Date of Creation:</strong> 1944 (Bretton Woods Conference).</li>
                <li><strong>Role:</strong>
                    <ul>
                        <li>Provides financial assistance to countries facing balance of payment crises.</li>
                        <li>Supports economic stability by monitoring global financial trends.</li>
                        <li>Encourages policies that promote international trade and economic growth.</li>
                    </ul>
                </li>
                <li><strong>Relevance:</strong> The IMF stabilizes economies, ensuring countries remain active participants in global trade.</li>
            </ul>
        `
    },
    {
        subtitle: 'World Bank',
        text: `
            <ul>
                <li><strong>Date of Creation:</strong> 1944 (Bretton Woods Conference).</li>
                <li><strong>Role:</strong>
                    <ul>
                        <li>Provides long-term loans and grants to developing countries for infrastructure and development projects.</li>
                        <li>Aims to reduce poverty and improve living standards globally.</li>
                    </ul>
                </li>
                <li><strong>Relevance:</strong> By funding key projects (e.g., ports, railways, and digital connectivity), the World Bank strengthens trade infrastructure in developing nations.</li>
            </ul>
        `
    }
]
    }
];

// Populate the timeline with dates and enhanced visuals
const timelineContainer = document.getElementById('timeline');

timelineEvents.forEach(event => {
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('timeline-event');

    // Add a title and date
    eventDiv.innerHTML = `
        <div class="event-title">${event.title}</div>
        <div class="event-date">${event.date}</div>
    `;
    eventDiv.dataset.id = event.id;

    // Append event to timeline
    timelineContainer.appendChild(eventDiv);
});

// Popup logic with images, videos, and bibliography
const popupOverlay = document.getElementById('popup-overlay');
const popupContent = document.getElementById('popup-content');
const closePopupButton = document.getElementById('close-popup');

// Function to extract YouTube video ID from the URL
function extractYouTubeId(url) {
    const regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^/]+\/[^\s]+\/|(?:v|e(?:mbed)?)\/|(?:.*[?&]v=)))([a-zA-Z0-9_-]{11})(?:[^\w\s]|$)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

// Event listener to open popup
timelineContainer.addEventListener('click', e => {
    const eventDiv = e.target.closest('.timeline-event');
    if (eventDiv) {
        const eventId = eventDiv.dataset.id;
        const event = timelineEvents.find(ev => ev.id === eventId);
        if (event) {
             // If there are multiple images, display them one below the other
            let images = '';
           if (event.image && Array.isArray(event.image)) {
                images = event.image.map(img => `
                    <img src="${img}" alt="${event.title}" style="max-width: 100%; margin-bottom: 10px;">
                `).join('');
            }
            // If there's a YouTube video URL, extract the video ID and embed it
            let videoEmbed = '';
            if (event.video) {
                const youtubeId = extractYouTubeId(event.video);
                if (youtubeId) {
                    videoEmbed = `
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${youtubeId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    `;
                } else {
                    // Fallback to regular video player if not a YouTube link
                    videoEmbed = `
                        <video controls style="max-width: 100%;">
                            <source src="${event.video}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    `;
                }

            }
 // Générer le contenu avec sous-titres et paragraphes
            let content = '';
            if (event.content) {
                content = event.content.map(section => `
                    <h3>${section.subtitle}</h3>
                    <p>${section.text}</p>
                `).join('');
            }

            // Ajouter l'image supplémentaire si elle existe
            let extraImage = '';
            if (event.extraImage) {
                extraImage = `<img src="${event.extraImage}" alt="${event.title} Extra" style="max-width: 100%; margin-top: 20px;">`;
            }
                        // Ajouter des vidéos supplémentaires
            const extraVideos = event.extraVideo ? event.extraVideo.map(video => `
                <div>
                    <h4>${video.title}</h4>
                    <iframe width="100%" height="315" src="${video.url.replace('watch?v=', 'embed/')}" 
                        title="${video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                </div>
            `).join('') : '';



            popupContent.innerHTML = `
                <h2>${event.title}</h2>
                <p>${event.description}</p>
                ${event.image ? `<img src="${event.image}" alt="${event.title}" style="max-width: 100%;">` : ''}
                ${videoEmbed}
                <p><strong>Bibliography:</strong> <a href="${event.bibliography}" target="_blank">Learn more</a></p>
                ${event.content ? event.content.map(section => `
                    <h3>${section.subtitle}</h3>
                    <p>${section.text}</p>
                `).join('') : ''}
                ${extraImage} <!-- Ajout conditionnel de l'image supplémentaire -->
               
                ${extraVideos}
                
            `;
            popupOverlay.style.display = 'flex';
        }
    }
});

// Close popup
closePopupButton.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});


// Récupérer la timelapse-container existante dans l'HTML
const timelapseContainer = document.querySelector('.timelapse-section .timelapse-container');

const timelapseImages = [
    'image/commerce/car/2000.png', 'image/commerce/car/2001.png', 'image/commerce/car/2002.png',
    'image/commerce/car/2003.png', 'image/commerce/car/2004.png', 'image/commerce/car/2005.png',
    'image/commerce/car/2006.png', 'image/commerce/car/2007.png', 'image/commerce/car/2008.png',
    'image/commerce/car/2009.png', 'image/commerce/car/2010.png', 'image/commerce/car/2011.png',
    'image/commerce/car/2012.png', 'image/commerce/car/2013.png', 'image/commerce/car/2014.png',
    'image/commerce/car/2015.png', 'image/commerce/car/2016.png', 'image/commerce/car/2017.png',
    'image/commerce/car/2018.png', 'image/commerce/car/2019.png', 'image/commerce/car/2020.png',
    'image/commerce/car/2021.png', 'image/commerce/car/2022.png', 'image/commerce/car/2023.png'
];

let currentIndex = 0;
let interval;

timelapseContainer.innerHTML = `
    <div class="timelapse-wrapper">
        <img src="${timelapseImages[0]}" alt="Car Production Timelapse" id="timelapse-image">
    </div>
    <div class="controls">
        <button id="play">Play</button>
        <button id="stop">Stop</button>
        <input type="range" id="slider" min="0" max="${timelapseImages.length - 1}" value="0">
    </div>
`;

const timelapseImage = document.getElementById('timelapse-image');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');
const slider = document.getElementById('slider');

timelapseImage.style.objectFit = 'contain';
timelapseImage.style.width = '100%';
timelapseImage.style.height = '100%';

timelapseContainer.style.display = 'flex';
timelapseContainer.style.flexDirection = 'column';
timelapseContainer.style.alignItems = 'center';

function updateTimelapse(index) {
    timelapseImage.src = timelapseImages[index];
    slider.value = index;
}

playButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % timelapseImages.length;
        updateTimelapse(currentIndex);
    }, 500);
});

stopButton.addEventListener('click', () => {
    clearInterval(interval);
});

slider.addEventListener('input', (e) => {
    currentIndex = parseInt(e.target.value, 10);
    updateTimelapse(currentIndex);
});



