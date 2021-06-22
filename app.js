require(["esri/config","esri/Map","esri/views/MapView"], function(esriConfig,Map,MapView){
    esriConfig.apiKey = "AAPK7af4eb9791ac4c80ae6edd41e765d672DtB6DaIk8Xd2ggSVoK7LaqjNvfBxUOfkFEmuqUF1pfmIU1Oqv6FUjKX-V6PVqlej";
    const map = new Map({
        basemap : "arcgis-topographic"
    });
    const view = new MapView({
        map : map,
        center : [73.856,18.520],
        zoom : 13,
        container : "viewDiv"
    })
})