
$(document).ready(function(){
    
    // Geojson data vars... inefficient code for now, but it works.

    //function to make ajax call to optain json string.
    function getJSON_data(url)
    {
        var json_ret = (function () {
            var json = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': url,
                'dataType': "json",
                'success': function (data) {
                    json = data;
                }
            });
            return json;
        })(); 
        return json_ret
    }

    //Selective Maryland county boundary data.
    var countyData = getJSON_data("http://localhost:8080/Congressional-Redistricting/maryland_counties.json")
    console.log('loaded json for county')
    console.log(countyData)
    // Selective precinct data.
    var precinctData = getJSON_data("http://localhost:8080/Congressional-Redistricting/maryland_precincts.json")
    console.log('loaded json for precinct')
    console.log(countyData)
    // State boundaries.
    var statesData = getJSON_data("http://localhost:8080/Congressional-Redistricting/us_states.json")
    console.log('loaded json for states')
    console.log(countyData)
    //Park data
    var parkData = getJSON_data("http://localhost:8080/Congressional-Redistricting/maryland_parks.json")
    console.log('loaded json for parks')
    console.log(parkData)
    
    // Init map.
        //define map type and initial view location.
        var map = L.map('leaflet-div', {drawControl: true}).setView([37.8, -96], 4);
        // get mapbox map layers.
//        var primary_layer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamxvdWdobGluIiwiYSI6ImNrN2JjMDRsZTAxaWszbG56dTN6NzBlcjQifQ.SDYDAlazcFCETZRLqQhnFg',{
//            id: 'mapbox/light-v9',
//            tileSize: 512,
//            zoomOffset: -1 
//        });
    map.createPane('labels');
    map.getPane('labels').style.zIndex = 650;
    map.getPane('labels').style.pointerEvents = 'none';
    var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
          attribution: '©OpenStreetMap, ©CartoDB'
    }).addTo(map);
    var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
    }).addTo(map);

        //init primarylayer (map)
        //map.addLayer(primary_layer);
    
        // styling options...
        function getColor(d) {
            return d > 1000 ? '#800026' :
                   d > 500  ? '#BD0026' :
                   d > 200  ? '#E31A1C' :
                   d > 100  ? '#FC4E2A' :
                   d > 50   ? '#FD8D3C' :
                   d > 20   ? '#FEB24C' :
                   d > 10   ? '#FED976' :
                              '#FFEDA0';
        }
        function style(feature) {
            return {
                fillColor: getColor(feature.properties.density),
                weight: .5,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7
            };
        }
        var countyStyle = {
            "color": "#ff7800",
            "weight": .5,
            "opacity": 0.65
        };
        
        function highlightFeature(e) {
        var layer = e.target;
    
        layer.setStyle({
            weight: 1,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });
    }
    function resetHighlight(e) {
        geojson_s.resetStyle(e.target);
    }
    // event handler when user clicks on a polygon. <Generic>
    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
    }
    
    function onStateSelect(e){
        map.fitBounds(e.target.getBounds());
        selectStateFromMenu(e);
        map.setMaxBounds(e.target.getBounds());
    }
    
    //dropdown menu event handlers.
        function selectStateFromMenu(e) {
            console.log(e);
            if(e.target.feature.properties.NAME.localeCompare("Georgia") == 0) {
                $("#dropdown-state-select").text("Georgia");
                $("#state-info").css("display", "inline");
                $("#dropdown-Georgia").css("display", "none");
                $("#dropdown-" + currentStateSelection).css("display", "block");
                $("#state-info-header").text("Georgia")
                currentStateSelection = "Georgia";
                
                $("#dropdown-Maryland").hide();
                $("#dropdown-Texas").hide();
                map.options.minZoom = 7;
            }
            else if(e.target.feature.properties.NAME.localeCompare("Maryland") == 0) {
                $("#dropdown-state-select").text("Maryland");
                $("#state-info").css("display", "inline");
                $("#dropdown-Maryland").css("display", "none");
                $("#dropdown-" + currentStateSelection).css("display", "block");
                $("#state-info-header").text("Maryland")
                currentStateSelection = "Maryland";
                
                $("#dropdown-Georgia").hide();
                $("#dropdown-Texas").hide();
                map.options.minZoom = 8;

            }
            else if(e.target.feature.properties.NAME.localeCompare("Texas") == 0) {
                $("#dropdown-state-select").text("Texas");
                $("#state-info").css("display", "inline");
                $("#dropdown-Texas").css("display", "none");
                $("#dropdown-" + currentStateSelection).css("display", "block");
                $("#state-info-header").text("Texas")
                currentStateSelection = "Texas";
                
                $("#dropdown-Maryland").hide();
                $("#dropdown-Georgia").hide();
                map.options.minZoom = 6;

            }
        };
    
        
        $("#dropdown-USA").on("click", function () {
            map.setMaxBounds(null);
            map.options.minZoom = null;
            
            map.setView([37.8, -96], 4);


            $("#dropdown-state-select").text("Select State");
            $("#dropdown-USA").css("display", "none");
            $("#dropdown-" + currentStateSelection).css("display", "block");
            $("#state-info").css("display", "none");
            currentStateSelection = "USA";
            console.log(map._layers);
    
            $("#dropdown-Texas").show();
            $("#dropdown-Georgia").show();
            $("#dropdown-Maryland").show();
        });
    
        $("#dropdown-Georgia").on("click", function () {
            map._layers["Georgia"].fire('click');
        });
    
        $("#dropdown-Maryland").on("click", function () {
            map._layers["Maryland"].fire('click');
    
        });
    
        $("#dropdown-Texas").on("click", function () {
            map._layers["Texas"].fire('click');
        });
    
    // Interaction behaviors.
    function onEachFeature(feature, layer) {
        layer._leaflet_id = feature.properties.NAME;
       // layer.bindPopup('<h1>'+"some data"+'</h1><p>name: '+"information"+'</p>');
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
    }
    
        function onEachFeatureS(feature, layer) {
            layer._leaflet_id = feature.properties.NAME;
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: onStateSelect
            });
    
        }
    
        function onEachFeatureP(feature, layer) {
            layer.bindPopup('<p>JURIS: '+feature.properties.JURIS+'</p>'+'<p>NAME: '+feature.properties.NAME+'</p>Republican:'+feature.properties.G16PRERTru+'</p>'+'</p>Democratic:'+feature.properties.G16PREDCli+'</p>');
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: zoomToFeature
            });
    
        }
    
        function clickOnMapItem(itemId) {
            var id = parseInt(itemId);
            //get target layer by it's id
            var layer = geojson.getLayer(id);
            //fire event 'click' on target layer
            layer.fireEvent('click');
        };
    
//        map.on('zoomend', function() {
//            var zoomlevel = map.getZoom();
//    
//            if (zoomlevel >6){
//                if (precinct_layer.hasLayer(geojson_pre)){
//                    console.log("layer already added");
//                } else {
//                    precinct_layer.addLayer(geojson_pre);
//                }
//                if (state_layer.hasLayer(geojson_s)){
//                    state_layer.removeLayer(geojson_s);
//    
//                } else {
//                    console.log("layer already added");
//                }
//    
//            }
//            else {
//                if (precinct_layer.hasLayer(geojson_pre)) {
//                    precinct_layer.removeLayer(geojson_pre);
//                } else {
//                    console.log("no point layer active");
//                }
//                if (state_layer.hasLayer(geojson_s)) {
//                    console.log("no point layer active");
//                } else {
//    
//                    state_layer.addLayer(geojson_s);
//                }
//            }
//            console.log("Current Zoom Level =" + zoomlevel);
//    
//        });
    
    
    
    // Data
    // style P
 function onEachFeatureP(feature, layer) {
            layer.bindPopup('<p>JURIS: '+feature.properties.JURIS+'</p>'+'<p>NAME: '+feature.properties.NAME+'</p>Republican:'+feature.properties.G16PRERTru+'</p>'+'</p>Democratic:'+feature.properties.G16PREDCli+'</p>');
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlightP,
                click: zoomToFeature
            });
    
        }
    
        function styleP(feature) {
            return {
                fillColor: getColorP(feature),
                weight: .5,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7
            };
        }
       function getColorP(feature){
            if (feature.properties.G16PRERTru>feature.properties.G16PREDCli){
                return 'red';
            } else return 'blue';

        } 
        function resetHighlightP(e) {
            geojson_pre.resetStyle(e.target);
            geojson_pre.resetStyle(styleP);
    }
    
    //style prefr
    function onEachFeaturePrefr(feature, layer){
        layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlightPrefr,
                click: zoomToFeature
            });
    
    }
    function resetHighlightPrefr(e) {
        geojson_counties.resetStyle(e.target);
        geojson_counties.resetStyle(countyStyle);
    }
    //style park
    function onEachFeaturepark(feature, layer){
        layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlightpark,
                click: zoomToFeature
            });
    
    }
    function resetHighlightpark(e) {
        geojson_parks.resetStyle(e.target);
        geojson_parks.resetStyle(countyStyle);
    }
    var parkStyle = {
            "color": "green",
            "weight": .5,
            "opacity": 0.65
        };

    
    
        //load geodata onto map.
        // Load precinct data. define interaction behaviors.
    geojson_pre = L.geoJson(precinctData, {
        style: styleP,
        onEachFeature: onEachFeatureP
    });
    // load state boundaries, and define interaction behaviors.
    geojson_s = L.geoJson(statesData, {
        style: style,
        onEachFeature: onEachFeatureS
    });
    //load county boundaries, and define interaction behaviors.
    geojson_counties = L.geoJson(countyData, {
        style: countyStyle,
        onEachFeature: onEachFeaturePrefr
    });

    geojson_parks = L.geoJson(parkData, {
        style: parkStyle,
        onEachFeature: onEachFeaturepark
    });
    
    var state_layer = L.layerGroup([geojson_s]);
    state_layer.addTo(map);
    var precinct_layer = L.layerGroup();
    precinct_layer.addTo(map);
    var county_layer = L.layerGroup()
    county_layer.addTo(map);
    var park_layer = L.layerGroup()
    park_layer.addTo(map);
    map.on('zoomend', function() {
            var zoomlevel = map.getZoom();
            if (zoomlevel >6){
                if (county_layer.hasLayer(geojson_counties)){
                    console.log("layer already added");
                } else {
                    //layergroup2.addLayer(geojson_pre);
                    county_layer.addLayer(geojson_counties);
                }
                if (state_layer.hasLayer(geojson_s)){
                    state_layer.removeLayer(geojson_s);
    
                } else {
                    console.log("layer already added");
                }
    
            }
            else if (zoomlevel <=6){ 
                if (county_layer.hasLayer(geojson_counties)) {
                    county_layer.removeLayer(geojson_counties);
                } else {
                    console.log("no point layer active");
                }
                if (state_layer.hasLayer(geojson_s)) {
                    console.log("no point layer active");
                } else {
                    state_layer.addLayer(geojson_s);
                }
            }
            console.log("Current Zoom Level =" + zoomlevel);

            if (zoomlevel >8){
                if (precinct_layer.hasLayer(geojson_pre)){
                    console.log("layer already added");
                } else {
                    
                    precinct_layer.addLayer(geojson_pre);
                    park_layer.addLayer(geojson_parks);
                    
                   
                }
                if (county_layer.hasLayer(geojson_counties)){
                    county_layer.removeLayer(geojson_counties);
    
                } else {
                    console.log("layer already added");
                }
    
            }
            else if (zoomlevel <=8 && zoomlevel>6){
                if (precinct_layer.hasLayer(geojson_pre)) {
                    park_layer.removeLayer(geojson_parks);
                    precinct_layer.removeLayer(geojson_pre);
                    
                } else {
                    console.log("no point layer active");
                }
                if (county_layer.hasLayer(geojson_counties)) {
                    console.log("no point layer active");
                } else {
    
                    county_layer.addLayer(geojson_counties);
                }
            }});
    
    
    state_layer.bringToBack();
    county_layer.bringToFront();
    precinct_layer.bringToFront();
    precinct_layer.bringToFront();
    park_layer.bringToFront();
    park_layer.bringToFront();
    park_layer.bringToFront();


    // var state_layer = new L.GeoJSON.AJAX("http://localhost:8080/Congressional-Redistricting/us_states.geojson");
    // state_layer.addTo(map);
    
    });  