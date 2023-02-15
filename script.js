mapboxgl.accessToken = 'pk.eyJ1IjoienNnZ3I0NzJoMSIsImEiOiJjbGU2MHQ4ZTYwaTZoM25xbDRnNXNhYWRvIn0.DOkNRgk75AzyG_TGFXMLqA'
//accessToken generated from my MapBox

const map = new mapboxgl.Map({
    container: 'torontomap', //name of my map
    style: 'mapbox://styles/zsggr472h1/cldm11hr0000g01t10scgbyli',
    center:[ -79.37, 43.65 ], //I choose downtown coordiante as my start point.
    zoom: 12, //after checking several values, I find that 12 is the most suitable one
                //not zooming too out/in.
});


map.on('load', () => {
    //I choose two data sources for my layers, the first one is COVID19 Immunization Clinics in Toronto.
    //And second source is the Fire Station locations in Toronto.
    //both sources come as the GeoJSON files.
    //From City of Toronto Open data Library.

    map.addSource('covid19immclinics', {
        type: 'geojson',
        data: 'https://zs106.github.io/ggr472lab2/covid-19-immunization-clinics.geojson'
   
    });
    map.addSource('firestation', {
        type: 'geojson',
        data: 'https://zs106.github.io/ggr472lab2/fire-station-locations.geojson'
   
    });


    //I draw GeoJSON point geometry as circles
    map.addLayer({
        'id': 'covid19immclinicslayer',
        'type': 'circle',
        'source': 'covid19immclinics',
        'paint': {
            'circle-radius': 5,//5 is suitable radius (not too large/small)
            'circle-color': 'blue' //blue is a typical color for hospital.
        }

    });
    //Draw GeoJSON point geometry as circles
    map.addLayer({
        'id': 'firestationlayer',
        'type': 'circle',
        'source': 'firestation',
        'paint': {
            'circle-radius': 5,
            'circle-color': 'red' //red is a typical color for fire department.
        }

    });

})
