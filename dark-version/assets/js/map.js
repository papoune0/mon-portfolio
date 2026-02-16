/*******************************************************
    Template Name    : Maslin - Personal Portfolio HTML Template
    Author           : aam-developer
    Version          : 1.0
    Created          : 2020
*******************************************************/

function initMap() {

// Specify features and elements to define styles.
var styleArray = [
 {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#fcfcfc"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#fcfcfc"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#dddddd"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#dddddd"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#dddddd"
            }
        ]
    }
];

// Création de la carte centrée sur AFORP Paris Nord 2 (Roissy-en-France)
var latlng = new google.maps.LatLng(48.9895, 2.5122);
var map = new google.maps.Map(document.getElementById("map"), {
  center: latlng, 
  scrollwheel: false,
// Apply the map style array to the map.
// How zoomed in you want the map to start at (always required)
styles: styleArray,
zoom: 14
});
var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    title: 'AFORP Paris Nord 2'
});

}
