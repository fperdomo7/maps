var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_CIRCUITOSMEDIATENSION_2 = new ol.format.GeoJSON();
var features_CIRCUITOSMEDIATENSION_2 = format_CIRCUITOSMEDIATENSION_2.readFeatures(json_CIRCUITOSMEDIATENSION_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CIRCUITOSMEDIATENSION_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CIRCUITOSMEDIATENSION_2.addFeatures(features_CIRCUITOSMEDIATENSION_2);
var lyr_CIRCUITOSMEDIATENSION_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CIRCUITOSMEDIATENSION_2, 
                style: style_CIRCUITOSMEDIATENSION_2,
                interactive: true,
                title: '<img src="styles/legend/CIRCUITOSMEDIATENSION_2.png" /> CIRCUITOS MEDIA TENSION'
            });
var format_CIRCUITOSBAJATENSION_3 = new ol.format.GeoJSON();
var features_CIRCUITOSBAJATENSION_3 = format_CIRCUITOSBAJATENSION_3.readFeatures(json_CIRCUITOSBAJATENSION_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CIRCUITOSBAJATENSION_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CIRCUITOSBAJATENSION_3.addFeatures(features_CIRCUITOSBAJATENSION_3);
var lyr_CIRCUITOSBAJATENSION_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CIRCUITOSBAJATENSION_3,
maxResolution:1.4002233076130983,
 
                style: style_CIRCUITOSBAJATENSION_3,
                interactive: true,
                title: '<img src="styles/legend/CIRCUITOSBAJATENSION_3.png" /> CIRCUITOS BAJA TENSION'
            });
var format_POSTESMEDIATENSION_4 = new ol.format.GeoJSON();
var features_POSTESMEDIATENSION_4 = format_POSTESMEDIATENSION_4.readFeatures(json_POSTESMEDIATENSION_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POSTESMEDIATENSION_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTESMEDIATENSION_4.addFeatures(features_POSTESMEDIATENSION_4);cluster_POSTESMEDIATENSION_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_POSTESMEDIATENSION_4
});
var lyr_POSTESMEDIATENSION_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_POSTESMEDIATENSION_4,
maxResolution:2.8004466152261966,
 
                style: style_POSTESMEDIATENSION_4,
                interactive: true,
                title: '<img src="styles/legend/POSTESMEDIATENSION_4.png" /> POSTES MEDIA TENSION'
            });
var format_POSTESBAJATENSION_5 = new ol.format.GeoJSON();
var features_POSTESBAJATENSION_5 = format_POSTESBAJATENSION_5.readFeatures(json_POSTESBAJATENSION_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POSTESBAJATENSION_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTESBAJATENSION_5.addFeatures(features_POSTESBAJATENSION_5);cluster_POSTESBAJATENSION_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_POSTESBAJATENSION_5
});
var lyr_POSTESBAJATENSION_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_POSTESBAJATENSION_5,
maxResolution:1.4002233076130983,
 
                style: style_POSTESBAJATENSION_5,
                interactive: true,
                title: '<img src="styles/legend/POSTESBAJATENSION_5.png" /> POSTES BAJA TENSION'
            });
var format_TRANSFORMADORES_6 = new ol.format.GeoJSON();
var features_TRANSFORMADORES_6 = format_TRANSFORMADORES_6.readFeatures(json_TRANSFORMADORES_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRANSFORMADORES_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRANSFORMADORES_6.addFeatures(features_TRANSFORMADORES_6);cluster_TRANSFORMADORES_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_TRANSFORMADORES_6
});
var lyr_TRANSFORMADORES_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_TRANSFORMADORES_6,
maxResolution:2.8004466152261966,
 
                style: style_TRANSFORMADORES_6,
                interactive: true,
                title: '<img src="styles/legend/TRANSFORMADORES_6.png" /> TRANSFORMADORES'
            });
var group_LFLL334 = new ol.layer.Group({
                                layers: [lyr_CIRCUITOSMEDIATENSION_2,lyr_CIRCUITOSBAJATENSION_3,lyr_POSTESMEDIATENSION_4,lyr_POSTESBAJATENSION_5,lyr_TRANSFORMADORES_6,],
                                title: "LFL-L334"});
lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_CIRCUITOSMEDIATENSION_2.setVisible(true);lyr_CIRCUITOSBAJATENSION_3.setVisible(true);lyr_POSTESMEDIATENSION_4.setVisible(true);lyr_POSTESBAJATENSION_5.setVisible(true);lyr_TRANSFORMADORES_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleMaps_1,group_LFLL334];
lyr_CIRCUITOSMEDIATENSION_2.set('fieldAliases', {'ID_TRAMOMT': 'ID_TRAMOMT', 'CIRCUITO': 'CIRCUITO', 'DESCRIP_FASE_A': 'DESCRIP_FASE_A', 'DESCRIP_FASE_B': 'DESCRIP_FASE_B', 'DESCRIP_FASE_C': 'DESCRIP_FASE_C', 'DESCRIP_GUARDA': 'DESCRIP_GUARDA', 'CANTIDAD_FASES': 'CANTIDAD_FASES', });
lyr_CIRCUITOSBAJATENSION_3.set('fieldAliases', {'ID_TRAMOBT': 'ID_TRAMOBT', 'CIRCUITO': 'CIRCUITO', 'ID_TRANSFORMADOR': 'ID_TRANSFORMADOR', 'VALORIZACION': 'VALORIZACION', 'VALORIZACION_AP': 'VALORIZACION_AP', 'VALORIZACION_N': 'VALORIZACION_N', });
lyr_POSTESMEDIATENSION_4.set('fieldAliases', {'ID_APOYO': 'ID_APOYO', 'COORD_X': 'COORD_X', 'COORD_Y': 'COORD_Y', 'CIRCUITO': 'CIRCUITO', 'PINTADO_APOYO': 'PINTADO_APOYO', 'VALORIZACION': 'VALORIZACION', });
lyr_POSTESBAJATENSION_5.set('fieldAliases', {'ID_APOYO': 'ID_APOYO', 'COORD_X': 'COORD_X', 'COORD_Y': 'COORD_Y', 'CIRCUITO': 'CIRCUITO', 'PINTADO_APOYO': 'PINTADO_APOYO', 'VALORIZACION': 'VALORIZACION', });
lyr_TRANSFORMADORES_6.set('fieldAliases', {'CODIGOTRAFODIS': 'CODIGOTRAFODIS', 'CODIGOAPOYO1': 'CODIGOAPOYO1', 'CIRCUITO': 'CIRCUITO', 'POTENCIA': 'POTENCIA', 'X': 'X', 'Y': 'Y', });
lyr_CIRCUITOSMEDIATENSION_2.set('fieldImages', {'ID_TRAMOMT': 'Range', 'CIRCUITO': 'TextEdit', 'DESCRIP_FASE_A': 'TextEdit', 'DESCRIP_FASE_B': 'TextEdit', 'DESCRIP_FASE_C': 'TextEdit', 'DESCRIP_GUARDA': 'TextEdit', 'CANTIDAD_FASES': 'Range', });
lyr_CIRCUITOSBAJATENSION_3.set('fieldImages', {'ID_TRAMOBT': 'Range', 'CIRCUITO': 'TextEdit', 'ID_TRANSFORMADOR': 'Range', 'VALORIZACION': 'TextEdit', 'VALORIZACION_AP': 'TextEdit', 'VALORIZACION_N': 'TextEdit', });
lyr_POSTESMEDIATENSION_4.set('fieldImages', {'ID_APOYO': 'Range', 'COORD_X': 'TextEdit', 'COORD_Y': 'TextEdit', 'CIRCUITO': 'TextEdit', 'PINTADO_APOYO': 'TextEdit', 'VALORIZACION': 'TextEdit', });
lyr_POSTESBAJATENSION_5.set('fieldImages', {'ID_APOYO': 'Range', 'COORD_X': 'TextEdit', 'COORD_Y': 'TextEdit', 'CIRCUITO': 'TextEdit', 'PINTADO_APOYO': 'TextEdit', 'VALORIZACION': 'TextEdit', });
lyr_TRANSFORMADORES_6.set('fieldImages', {'CODIGOTRAFODIS': 'Range', 'CODIGOAPOYO1': 'Range', 'CIRCUITO': 'TextEdit', 'POTENCIA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_CIRCUITOSMEDIATENSION_2.set('fieldLabels', {'ID_TRAMOMT': 'header label', 'CIRCUITO': 'inline label', 'DESCRIP_FASE_A': 'inline label', 'DESCRIP_FASE_B': 'inline label', 'DESCRIP_FASE_C': 'inline label', 'DESCRIP_GUARDA': 'inline label', 'CANTIDAD_FASES': 'inline label', });
lyr_CIRCUITOSBAJATENSION_3.set('fieldLabels', {'ID_TRAMOBT': 'header label', 'CIRCUITO': 'inline label', 'ID_TRANSFORMADOR': 'inline label', 'VALORIZACION': 'inline label', 'VALORIZACION_AP': 'inline label', 'VALORIZACION_N': 'inline label', });
lyr_POSTESMEDIATENSION_4.set('fieldLabels', {'ID_APOYO': 'header label', 'COORD_X': 'inline label', 'COORD_Y': 'inline label', 'CIRCUITO': 'inline label', 'PINTADO_APOYO': 'inline label', 'VALORIZACION': 'inline label', });
lyr_POSTESBAJATENSION_5.set('fieldLabels', {'ID_APOYO': 'header label', 'COORD_X': 'inline label', 'COORD_Y': 'inline label', 'CIRCUITO': 'inline label', 'PINTADO_APOYO': 'inline label', 'VALORIZACION': 'inline label', });
lyr_TRANSFORMADORES_6.set('fieldLabels', {'CODIGOTRAFODIS': 'header label', 'CODIGOAPOYO1': 'inline label', 'CIRCUITO': 'no label', 'POTENCIA': 'inline label', 'X': 'inline label', 'Y': 'inline label', });
lyr_TRANSFORMADORES_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});