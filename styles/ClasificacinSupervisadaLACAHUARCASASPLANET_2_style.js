var size = 0;
var placement = 'point';
function categories_ClasificacinSupervisadaLACAHUARCASASPLANET_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'AGUA':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,0,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CAFE':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(128,96,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CAMINO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(225,225,225,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'COCA':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(226,239,218,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'FRUTAL':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,204,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'INFRAESTRUCTURA':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(128,128,128,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LECHUGA':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(160,246,217,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'MAIZ':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,192,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'MANDARINA':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,221,188,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PLATANO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(196,197,93,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SUELO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(193,153,111,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'VEGETACION':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,188,53,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ClasificacinSupervisadaLACAHUARCASASPLANET_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Clase");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_ClasificacinSupervisadaLACAHUARCASASPLANET_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
