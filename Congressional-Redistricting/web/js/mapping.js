$(document).ready(function(){
    
    
    var map = L.map('leaflet-div').setView([37.8, -96], 4);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamxvdWdobGluIiwiYSI6ImNrN2JjMDRsZTAxaWszbG56dTN6NzBlcjQifQ.SDYDAlazcFCETZRLqQhnFg',{
        id: 'mapbox/light-v9',
        tileSize: 512,
        zoomOffset: -1 
    }).addTo(map);
	
});  