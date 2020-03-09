
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
    //error data
    var errorData = getJSON_data("http://localhost:8080/Congressional-Redistricting/err_list.json")
    console.log('loaded json for errors')
    console.log(errorData)

    
    // Init map.
        //define map type and initial view location.
        var map = L.map('leaflet-div', {drawControl: true}).setView([37.8, -96], 5);
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

        var errorStyle = {
            "color": "black",
            "weight": .5,
            "opacity": .5
        }
        
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
        $("#state-info-header").text(e.target.feature.properties.NAME);
    }
    
    function onStateSelect(e){
        map.fitBounds(e.target.getBounds());
        selectStateFromMenu(e);
        map.setMaxBounds(e.target.getBounds());
        
        $("#dropdown-Georgia").hide();
        $("#dropdown-Maryland").hide();
        $("#dropdown-Texas").hide();
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
             
                map.options.minZoom = 7;
            }
            else if(e.target.feature.properties.NAME.localeCompare("Maryland") == 0) {
                $("#dropdown-state-select").text("Maryland");
                $("#state-info").css("display", "inline");
                $("#dropdown-Maryland").css("display", "none");
                $("#dropdown-" + currentStateSelection).css("display", "block");
                $("#state-info-header").text("Maryland")
                currentStateSelection = "Maryland";
                              
                map.options.minZoom = 8;

            }
            else if(e.target.feature.properties.NAME.localeCompare("Texas") == 0) {
                $("#dropdown-state-select").text("Texas");
                $("#state-info").css("display", "inline");
                $("#dropdown-Texas").css("display", "none");
                $("#dropdown-" + currentStateSelection).css("display", "block");
                $("#state-info-header").text("Texas")
                currentStateSelection = "Texas";
                
               
                map.options.minZoom = 6;

            }
        };
    
        
        $("#dropdown-USA").on("click", function () {
            map.setMaxBounds(null);
            map.options.minZoom = null;
            
            map.setView([37.8, -96], 5);


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
        featureByName={};
        $("#error1").on("click", function () {
            map.fitBounds(featureByName["err_1"].getBounds()); 

        });
        $("#error2").on("click", function () {
            map.fitBounds(featureByName["err_2"].getBounds()); 

        });
        $("#error3").on("click", function () {
            map.fitBounds(featureByName["err_3"].getBounds()); 

        });
        $("#error4").on("click", function () {
            map.fitBounds(featureByName["err_4"].getBounds()); 

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
    
//        function onEachFeatureP(feature, layer) {
//            layer.bindPopup('<p>JURIS: '+feature.properties.JURIS+'</p>'+'<p>NAME: '+feature.properties.NAME+'</p>Republican:'+feature.properties.G16PRERTru+'</p>'+'</p>Democratic:'+feature.properties.G16PREDCli+'</p>');
//            layer.on({
//                mouseover: highlightFeature,
//                mouseout: resetHighlight,
//                click: zoomToFeature
//            });
//    
//        }
    
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
  function zoomToFeatureP(e) {
        var total=e.target.feature.properties.G16PREDCli+e.target.feature.properties.G16PRERTru+e.target.feature.properties.G16PRELJoh+e.target.feature.properties.G16PREGSte+e.target.feature.properties.G16PREOth;
        
        document.getElementById("raw-democratic-num").innerHTML=e.target.feature.properties.G16PREDCli;
        document.getElementById("raw-republican-num").innerHTML = e.target.feature.properties.G16PRERTru;
        document.getElementById("raw-thirdparty-num").innerHTML = e.target.feature.properties.G16PRELJoh+e.target.feature.properties.G16PREGSte+e.target.feature.properties.G16PREOth;
        document.getElementById("raw-democratic-num-prec").innerHTML=Math.round(e.target.feature.properties.G16PREDCli/total*100).toString()+"%";
        document.getElementById("raw-republican-num-prec").innerHTML = Math.round(e.target.feature.properties.G16PRERTru/total*100).toString()+"%";
        document.getElementById("raw-thirdparty-num-prec").innerHTML = Math.round((e.target.feature.properties.G16PRELJoh+e.target.feature.properties.G16PREGSte+e.target.feature.properties.G16PREOth)/total*100).toString()+"%";

        var max = e.target.feature.properties.G16PREDCli + e.target.feature.properties.G16PRERTru + e.target.feature.properties.G16PRELJoh+e.target.feature.properties.G16PREGSte+e.target.feature.properties.G16PREOth;
        var r0 = randombetween(1, max-4);
        var r1 = randombetween(1, max-3-r0);
        var r2 = randombetween(1, max-2-r0-r1);
        var r3 = randombetween(1, max-1-r0-r1-r2);
        var r4 = max - r0 - r1 - r2 - r3;

        document.getElementById("tot_pre_pop").innerHTML = total;
        document.getElementById("raw-nativeamerican-num").innerHTML = r4;
        document.getElementById("raw-africanamerican-num").innerHTML = r3;
        document.getElementById("raw-hispanic-num").innerHTML = r2;
        document.getElementById("raw-asian-num").innerHTML = r1;
        document.getElementById("raw-white-num").innerHTML = r0;

        document.getElementById("tot_pre_pop_perc").innerHTML = '100%';
        document.getElementById("raw-nativeamerican-num-perc").innerHTML=(Math.round(r4/total*10000)/100).toString()+"%";
        document.getElementById("raw-africanamerican-num-perc").innerHTML=(Math.round(r3/total*10000)/100).toString()+"%";
        document.getElementById("raw-hispanic-num-perc").innerHTML=(Math.round(r2/total*10000)/100).toString()+"%";
        document.getElementById("raw-asian-num-perc").innerHTML=(Math.round(r1/total*10000)/100).toString()+"%";
        document.getElementById("raw-white-num-perc").innerHTML=(Math.round(r0/total*10000)/100).toString()+"%";


function randombetween(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}
        
        map.fitBounds(e.target.getBounds());
        $("#state-info-header").text(e.target.feature.properties.NAME);
        
    }
 function onEachFeatureP(feature, layer) {
            layer.bindPopup('<p>JURIS: '+feature.properties.JURIS+'</p>'+'<p>NAME: '+feature.properties.NAME+'</p>Republican:'+feature.properties.G16PRERTru+'</p>'+'</p>Democratic:'+feature.properties.G16PREDCli+'</p>');
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlightP,
                click: zoomToFeatureP
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
                return '#ffa08f';
            } else return '#8fa4ff';

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
                //mouseover: highlightFeature,
                //mouseout: resetHighlightpark,
                //click: zoomToFeature
            });
    }
    //style errors
    function onEachFeatureErrors(feature, layer){
        featureByName[feature.properties.error_area] = layer;
        layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlightErrors,
                click: zoomToFeature
            });
    }

    function resetHighlightErrors(e) {
        geojson_errors.resetStyle(e.target);
        geojson_errors.resetStyle(errorStyle);
    }

    function resetHighlightpark(e) {
        geojson_parks.resetStyle(e.target);
        geojson_parks.resetStyle(countyStyle);
    }
    var parkStyle = {
            "color": "#98ff8f",
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

    //add errors layer, and defines behavior on interaction.
    //TODO right now: define unique interaction, and color it with bright red.
    geojson_errors = L.geoJson(errorData, {
        style: errorStyle,
        onEachFeature: onEachFeatureErrors
    });
    
    var state_layer = L.layerGroup([geojson_s]);
    state_layer.addTo(map);
    var precinct_layer = L.layerGroup();
    precinct_layer.addTo(map);
    var county_layer = L.layerGroup();
    county_layer.addTo(map);
    var park_layer = L.layerGroup();
    park_layer.addTo(map);
    // error layer is here!
    //we need event handlers to zoom into these
    var error_layer = L.layerGroup();
    error_layer.addTo(map);


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
                    error_layer.addLayer(geojson_errors);
                    
                   
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
                    error_layer.removeLayer(geojson_errors);
                    
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
    error_layer.bringToFront();
    error_layer.bringToFront();
    error_layer.bringToFront();
    error_layer.bringToFront();


    // var state_layer = new L.GeoJSON.AJAX("http://localhost:8080/Congressional-Redistricting/us_states.geojson");
    // state_layer.addTo(map);
    
    });  