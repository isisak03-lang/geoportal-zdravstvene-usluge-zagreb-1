var wms_layers = [];

var lyr_DigitalniortofotoZagreb2022_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoportal.zagreb.hr/Public/Ortofoto2022_Public/MapServer/WMSServer",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ZG_CDOF2022",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Digitalni ortofoto Zagreb 2022.',
                            popuplayertitle: 'Digitalni ortofoto Zagreb 2022.',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_DigitalniortofotoZagreb2022_0, 0]);
var format_Podrujedostupnodoljekarniu5minutavonje_1 = new ol.format.GeoJSON();
var features_Podrujedostupnodoljekarniu5minutavonje_1 = format_Podrujedostupnodoljekarniu5minutavonje_1.readFeatures(json_Podrujedostupnodoljekarniu5minutavonje_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Podrujedostupnodoljekarniu5minutavonje_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Podrujedostupnodoljekarniu5minutavonje_1.addFeatures(features_Podrujedostupnodoljekarniu5minutavonje_1);
var lyr_Podrujedostupnodoljekarniu5minutavonje_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Podrujedostupnodoljekarniu5minutavonje_1, 
                style: style_Podrujedostupnodoljekarniu5minutavonje_1,
                popuplayertitle: 'Područje dostupno do ljekarni u 5 minuta vožnje',
                interactive: true,
                title: '<img src="styles/legend/Podrujedostupnodoljekarniu5minutavonje_1.png" /> Područje dostupno do ljekarni u 5 minuta vožnje'
            });
var format_Podrujedostupnodozdravstvenihustanovau10minutavonje_2 = new ol.format.GeoJSON();
var features_Podrujedostupnodozdravstvenihustanovau10minutavonje_2 = format_Podrujedostupnodozdravstvenihustanovau10minutavonje_2.readFeatures(json_Podrujedostupnodozdravstvenihustanovau10minutavonje_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Podrujedostupnodozdravstvenihustanovau10minutavonje_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Podrujedostupnodozdravstvenihustanovau10minutavonje_2.addFeatures(features_Podrujedostupnodozdravstvenihustanovau10minutavonje_2);
var lyr_Podrujedostupnodozdravstvenihustanovau10minutavonje_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Podrujedostupnodozdravstvenihustanovau10minutavonje_2, 
                style: style_Podrujedostupnodozdravstvenihustanovau10minutavonje_2,
                popuplayertitle: 'Područje dostupno do zdravstvenih ustanova u 10 minuta vožnje',
                interactive: true,
                title: '<img src="styles/legend/Podrujedostupnodozdravstvenihustanovau10minutavonje_2.png" /> Područje dostupno do zdravstvenih ustanova u 10 minuta vožnje'
            });
var format_Podrujedostupnododomovazdravljau5minutavonje_3 = new ol.format.GeoJSON();
var features_Podrujedostupnododomovazdravljau5minutavonje_3 = format_Podrujedostupnododomovazdravljau5minutavonje_3.readFeatures(json_Podrujedostupnododomovazdravljau5minutavonje_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Podrujedostupnododomovazdravljau5minutavonje_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Podrujedostupnododomovazdravljau5minutavonje_3.addFeatures(features_Podrujedostupnododomovazdravljau5minutavonje_3);
var lyr_Podrujedostupnododomovazdravljau5minutavonje_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Podrujedostupnododomovazdravljau5minutavonje_3, 
                style: style_Podrujedostupnododomovazdravljau5minutavonje_3,
                popuplayertitle: 'Područje dostupno do domova zdravlja u 5 minuta vožnje',
                interactive: true,
                title: '<img src="styles/legend/Podrujedostupnododomovazdravljau5minutavonje_3.png" /> Područje dostupno do domova zdravlja u 5 minuta vožnje'
            });
var format_Brojljekarnidostupanu6minutahoda_4 = new ol.format.GeoJSON();
var features_Brojljekarnidostupanu6minutahoda_4 = format_Brojljekarnidostupanu6minutahoda_4.readFeatures(json_Brojljekarnidostupanu6minutahoda_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brojljekarnidostupanu6minutahoda_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brojljekarnidostupanu6minutahoda_4.addFeatures(features_Brojljekarnidostupanu6minutahoda_4);
var lyr_Brojljekarnidostupanu6minutahoda_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brojljekarnidostupanu6minutahoda_4, 
                style: style_Brojljekarnidostupanu6minutahoda_4,
                popuplayertitle: 'Broj ljekarni dostupan u 6 minuta hoda',
                interactive: true,
    title: 'Broj ljekarni dostupan u 6 minuta hoda<br />\
    <img src="styles/legend/Brojljekarnidostupanu6minutahoda_4_0.png" /> 1<br />\
    <img src="styles/legend/Brojljekarnidostupanu6minutahoda_4_1.png" /> 2<br />\
    <img src="styles/legend/Brojljekarnidostupanu6minutahoda_4_2.png" /> 3<br />\
    <img src="styles/legend/Brojljekarnidostupanu6minutahoda_4_3.png" /> 4<br />\
    <img src="styles/legend/Brojljekarnidostupanu6minutahoda_4_4.png" /> 5<br />\
    <img src="styles/legend/Brojljekarnidostupanu6minutahoda_4_5.png" /> 6 - 7<br />\
    <img src="styles/legend/Brojljekarnidostupanu6minutahoda_4_6.png" /> 8 - 10<br />\
    <img src="styles/legend/Brojljekarnidostupanu6minutahoda_4_7.png" /> 11 - 15<br />\
    <img src="styles/legend/Brojljekarnidostupanu6minutahoda_4_8.png" /> 16 - 22<br />' });
var format_Brojljekarnidostupanu25minutehoda_5 = new ol.format.GeoJSON();
var features_Brojljekarnidostupanu25minutehoda_5 = format_Brojljekarnidostupanu25minutehoda_5.readFeatures(json_Brojljekarnidostupanu25minutehoda_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brojljekarnidostupanu25minutehoda_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brojljekarnidostupanu25minutehoda_5.addFeatures(features_Brojljekarnidostupanu25minutehoda_5);
var lyr_Brojljekarnidostupanu25minutehoda_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brojljekarnidostupanu25minutehoda_5, 
                style: style_Brojljekarnidostupanu25minutehoda_5,
                popuplayertitle: 'Broj ljekarni dostupan u 2.5 minute hoda',
                interactive: true,
    title: 'Broj ljekarni dostupan u 2.5 minute hoda<br />\
    <img src="styles/legend/Brojljekarnidostupanu25minutehoda_5_0.png" /> 1<br />\
    <img src="styles/legend/Brojljekarnidostupanu25minutehoda_5_1.png" /> 2<br />\
    <img src="styles/legend/Brojljekarnidostupanu25minutehoda_5_2.png" /> 3<br />\
    <img src="styles/legend/Brojljekarnidostupanu25minutehoda_5_3.png" /> 4<br />\
    <img src="styles/legend/Brojljekarnidostupanu25minutehoda_5_4.png" /> 5<br />\
    <img src="styles/legend/Brojljekarnidostupanu25minutehoda_5_5.png" /> 6<br />\
    <img src="styles/legend/Brojljekarnidostupanu25minutehoda_5_6.png" /> 7<br />' });
var format_Brojzdravstvenihustanovadostupanu6minutahoda_6 = new ol.format.GeoJSON();
var features_Brojzdravstvenihustanovadostupanu6minutahoda_6 = format_Brojzdravstvenihustanovadostupanu6minutahoda_6.readFeatures(json_Brojzdravstvenihustanovadostupanu6minutahoda_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brojzdravstvenihustanovadostupanu6minutahoda_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brojzdravstvenihustanovadostupanu6minutahoda_6.addFeatures(features_Brojzdravstvenihustanovadostupanu6minutahoda_6);
var lyr_Brojzdravstvenihustanovadostupanu6minutahoda_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brojzdravstvenihustanovadostupanu6minutahoda_6, 
                style: style_Brojzdravstvenihustanovadostupanu6minutahoda_6,
                popuplayertitle: 'Broj zdravstvenih ustanova dostupan u 6 minuta hoda',
                interactive: true,
    title: 'Broj zdravstvenih ustanova dostupan u 6 minuta hoda<br />\
    <img src="styles/legend/Brojzdravstvenihustanovadostupanu6minutahoda_6_0.png" /> 1<br />\
    <img src="styles/legend/Brojzdravstvenihustanovadostupanu6minutahoda_6_1.png" /> 2<br />\
    <img src="styles/legend/Brojzdravstvenihustanovadostupanu6minutahoda_6_2.png" /> 3<br />\
    <img src="styles/legend/Brojzdravstvenihustanovadostupanu6minutahoda_6_3.png" /> 4<br />\
    <img src="styles/legend/Brojzdravstvenihustanovadostupanu6minutahoda_6_4.png" /> 5<br />\
    <img src="styles/legend/Brojzdravstvenihustanovadostupanu6minutahoda_6_5.png" /> 6<br />\
    <img src="styles/legend/Brojzdravstvenihustanovadostupanu6minutahoda_6_6.png" /> 8<br />' });
var format_Brojzdravstvenihustanovadostupanu25minutehoda_7 = new ol.format.GeoJSON();
var features_Brojzdravstvenihustanovadostupanu25minutehoda_7 = format_Brojzdravstvenihustanovadostupanu25minutehoda_7.readFeatures(json_Brojzdravstvenihustanovadostupanu25minutehoda_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brojzdravstvenihustanovadostupanu25minutehoda_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brojzdravstvenihustanovadostupanu25minutehoda_7.addFeatures(features_Brojzdravstvenihustanovadostupanu25minutehoda_7);
var lyr_Brojzdravstvenihustanovadostupanu25minutehoda_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brojzdravstvenihustanovadostupanu25minutehoda_7, 
                style: style_Brojzdravstvenihustanovadostupanu25minutehoda_7,
                popuplayertitle: 'Broj zdravstvenih ustanova dostupan u 2.5 minute hoda',
                interactive: true,
    title: 'Broj zdravstvenih ustanova dostupan u 2.5 minute hoda<br />\
    <img src="styles/legend/Brojzdravstvenihustanovadostupanu25minutehoda_7_0.png" /> 1<br />\
    <img src="styles/legend/Brojzdravstvenihustanovadostupanu25minutehoda_7_1.png" /> 2<br />\
    <img src="styles/legend/Brojzdravstvenihustanovadostupanu25minutehoda_7_2.png" /> 3<br />\
    <img src="styles/legend/Brojzdravstvenihustanovadostupanu25minutehoda_7_3.png" /> 4<br />' });
var format_Brojdomovazdravljadostupanu6minutahoda_8 = new ol.format.GeoJSON();
var features_Brojdomovazdravljadostupanu6minutahoda_8 = format_Brojdomovazdravljadostupanu6minutahoda_8.readFeatures(json_Brojdomovazdravljadostupanu6minutahoda_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brojdomovazdravljadostupanu6minutahoda_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brojdomovazdravljadostupanu6minutahoda_8.addFeatures(features_Brojdomovazdravljadostupanu6minutahoda_8);
var lyr_Brojdomovazdravljadostupanu6minutahoda_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brojdomovazdravljadostupanu6minutahoda_8, 
                style: style_Brojdomovazdravljadostupanu6minutahoda_8,
                popuplayertitle: 'Broj domova zdravlja dostupan u 6 minuta hoda',
                interactive: true,
    title: 'Broj domova zdravlja dostupan u 6 minuta hoda<br />\
    <img src="styles/legend/Brojdomovazdravljadostupanu6minutahoda_8_0.png" /> 1<br />\
    <img src="styles/legend/Brojdomovazdravljadostupanu6minutahoda_8_1.png" /> 2<br />\
    <img src="styles/legend/Brojdomovazdravljadostupanu6minutahoda_8_2.png" /> 3<br />\
    <img src="styles/legend/Brojdomovazdravljadostupanu6minutahoda_8_3.png" /> 4<br />\
    <img src="styles/legend/Brojdomovazdravljadostupanu6minutahoda_8_4.png" /> 5<br />\
    <img src="styles/legend/Brojdomovazdravljadostupanu6minutahoda_8_5.png" /> 6<br />\
    <img src="styles/legend/Brojdomovazdravljadostupanu6minutahoda_8_6.png" /> 7<br />\
    <img src="styles/legend/Brojdomovazdravljadostupanu6minutahoda_8_7.png" /> 8<br />\
    <img src="styles/legend/Brojdomovazdravljadostupanu6minutahoda_8_8.png" /> 9<br />\
    <img src="styles/legend/Brojdomovazdravljadostupanu6minutahoda_8_9.png" /> 10<br />\
    <img src="styles/legend/Brojdomovazdravljadostupanu6minutahoda_8_10.png" /> 12<br />' });
var format_Brojdomovazdravljadostupanu25minutehoda_9 = new ol.format.GeoJSON();
var features_Brojdomovazdravljadostupanu25minutehoda_9 = format_Brojdomovazdravljadostupanu25minutehoda_9.readFeatures(json_Brojdomovazdravljadostupanu25minutehoda_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brojdomovazdravljadostupanu25minutehoda_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brojdomovazdravljadostupanu25minutehoda_9.addFeatures(features_Brojdomovazdravljadostupanu25minutehoda_9);
var lyr_Brojdomovazdravljadostupanu25minutehoda_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brojdomovazdravljadostupanu25minutehoda_9, 
                style: style_Brojdomovazdravljadostupanu25minutehoda_9,
                popuplayertitle: 'Broj domova zdravlja dostupan u 2.5 minute hoda',
                interactive: true,
    title: 'Broj domova zdravlja dostupan u 2.5 minute hoda<br />\
    <img src="styles/legend/Brojdomovazdravljadostupanu25minutehoda_9_0.png" /> 1<br />\
    <img src="styles/legend/Brojdomovazdravljadostupanu25minutehoda_9_1.png" /> 2<br />\
    <img src="styles/legend/Brojdomovazdravljadostupanu25minutehoda_9_2.png" /> 3<br />\
    <img src="styles/legend/Brojdomovazdravljadostupanu25minutehoda_9_3.png" /> 4<br />' });
var format_Tramvajskastajalitaudaljenado6minutahodaodljekarni_10 = new ol.format.GeoJSON();
var features_Tramvajskastajalitaudaljenado6minutahodaodljekarni_10 = format_Tramvajskastajalitaudaljenado6minutahodaodljekarni_10.readFeatures(json_Tramvajskastajalitaudaljenado6minutahodaodljekarni_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tramvajskastajalitaudaljenado6minutahodaodljekarni_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tramvajskastajalitaudaljenado6minutahodaodljekarni_10.addFeatures(features_Tramvajskastajalitaudaljenado6minutahodaodljekarni_10);
var lyr_Tramvajskastajalitaudaljenado6minutahodaodljekarni_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tramvajskastajalitaudaljenado6minutahodaodljekarni_10, 
                style: style_Tramvajskastajalitaudaljenado6minutahodaodljekarni_10,
                popuplayertitle: 'Tramvajska stajališta udaljena do 6 minuta hoda od ljekarni',
                interactive: true,
                title: '<img src="styles/legend/Tramvajskastajalitaudaljenado6minutahodaodljekarni_10.png" /> Tramvajska stajališta udaljena do 6 minuta hoda od ljekarni'
            });
var format_Tramvajskastajalitaudaljenado25minutehodaodljekarni_11 = new ol.format.GeoJSON();
var features_Tramvajskastajalitaudaljenado25minutehodaodljekarni_11 = format_Tramvajskastajalitaudaljenado25minutehodaodljekarni_11.readFeatures(json_Tramvajskastajalitaudaljenado25minutehodaodljekarni_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tramvajskastajalitaudaljenado25minutehodaodljekarni_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tramvajskastajalitaudaljenado25minutehodaodljekarni_11.addFeatures(features_Tramvajskastajalitaudaljenado25minutehodaodljekarni_11);
var lyr_Tramvajskastajalitaudaljenado25minutehodaodljekarni_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tramvajskastajalitaudaljenado25minutehodaodljekarni_11, 
                style: style_Tramvajskastajalitaudaljenado25minutehodaodljekarni_11,
                popuplayertitle: 'Tramvajska stajališta udaljena do 2.5 minute hoda od ljekarni',
                interactive: true,
                title: '<img src="styles/legend/Tramvajskastajalitaudaljenado25minutehodaodljekarni_11.png" /> Tramvajska stajališta udaljena do 2.5 minute hoda od ljekarni'
            });
var format_Tramvajskastajalitaudaljenado6minutahodaodzdravstvenihustanova_12 = new ol.format.GeoJSON();
var features_Tramvajskastajalitaudaljenado6minutahodaodzdravstvenihustanova_12 = format_Tramvajskastajalitaudaljenado6minutahodaodzdravstvenihustanova_12.readFeatures(json_Tramvajskastajalitaudaljenado6minutahodaodzdravstvenihustanova_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tramvajskastajalitaudaljenado6minutahodaodzdravstvenihustanova_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tramvajskastajalitaudaljenado6minutahodaodzdravstvenihustanova_12.addFeatures(features_Tramvajskastajalitaudaljenado6minutahodaodzdravstvenihustanova_12);
var lyr_Tramvajskastajalitaudaljenado6minutahodaodzdravstvenihustanova_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tramvajskastajalitaudaljenado6minutahodaodzdravstvenihustanova_12, 
                style: style_Tramvajskastajalitaudaljenado6minutahodaodzdravstvenihustanova_12,
                popuplayertitle: 'Tramvajska stajališta udaljena do 6 minuta hoda od zdravstvenih ustanova',
                interactive: true,
                title: '<img src="styles/legend/Tramvajskastajalitaudaljenado6minutahodaodzdravstvenihustanova_12.png" /> Tramvajska stajališta udaljena do 6 minuta hoda od zdravstvenih ustanova'
            });
var format_Tramvajskastajalitaudaljenado25minutehodaodzdravstvenihustanova_13 = new ol.format.GeoJSON();
var features_Tramvajskastajalitaudaljenado25minutehodaodzdravstvenihustanova_13 = format_Tramvajskastajalitaudaljenado25minutehodaodzdravstvenihustanova_13.readFeatures(json_Tramvajskastajalitaudaljenado25minutehodaodzdravstvenihustanova_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tramvajskastajalitaudaljenado25minutehodaodzdravstvenihustanova_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tramvajskastajalitaudaljenado25minutehodaodzdravstvenihustanova_13.addFeatures(features_Tramvajskastajalitaudaljenado25minutehodaodzdravstvenihustanova_13);
var lyr_Tramvajskastajalitaudaljenado25minutehodaodzdravstvenihustanova_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tramvajskastajalitaudaljenado25minutehodaodzdravstvenihustanova_13, 
                style: style_Tramvajskastajalitaudaljenado25minutehodaodzdravstvenihustanova_13,
                popuplayertitle: 'Tramvajska stajališta udaljena do 2.5 minute hoda od zdravstvenih ustanova',
                interactive: true,
                title: '<img src="styles/legend/Tramvajskastajalitaudaljenado25minutehodaodzdravstvenihustanova_13.png" /> Tramvajska stajališta udaljena do 2.5 minute hoda od zdravstvenih ustanova'
            });
var format_Tramvajskastajalitaudaljenado6minutahodaoddomovazdravlja_14 = new ol.format.GeoJSON();
var features_Tramvajskastajalitaudaljenado6minutahodaoddomovazdravlja_14 = format_Tramvajskastajalitaudaljenado6minutahodaoddomovazdravlja_14.readFeatures(json_Tramvajskastajalitaudaljenado6minutahodaoddomovazdravlja_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tramvajskastajalitaudaljenado6minutahodaoddomovazdravlja_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tramvajskastajalitaudaljenado6minutahodaoddomovazdravlja_14.addFeatures(features_Tramvajskastajalitaudaljenado6minutahodaoddomovazdravlja_14);
var lyr_Tramvajskastajalitaudaljenado6minutahodaoddomovazdravlja_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tramvajskastajalitaudaljenado6minutahodaoddomovazdravlja_14, 
                style: style_Tramvajskastajalitaudaljenado6minutahodaoddomovazdravlja_14,
                popuplayertitle: 'Tramvajska stajališta udaljena do 6 minuta hoda od domova zdravlja',
                interactive: true,
                title: '<img src="styles/legend/Tramvajskastajalitaudaljenado6minutahodaoddomovazdravlja_14.png" /> Tramvajska stajališta udaljena do 6 minuta hoda od domova zdravlja'
            });
var format_Tramvajskastajalitaudaljenado25minutehodaoddomovazdravlja_15 = new ol.format.GeoJSON();
var features_Tramvajskastajalitaudaljenado25minutehodaoddomovazdravlja_15 = format_Tramvajskastajalitaudaljenado25minutehodaoddomovazdravlja_15.readFeatures(json_Tramvajskastajalitaudaljenado25minutehodaoddomovazdravlja_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tramvajskastajalitaudaljenado25minutehodaoddomovazdravlja_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tramvajskastajalitaudaljenado25minutehodaoddomovazdravlja_15.addFeatures(features_Tramvajskastajalitaudaljenado25minutehodaoddomovazdravlja_15);
var lyr_Tramvajskastajalitaudaljenado25minutehodaoddomovazdravlja_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tramvajskastajalitaudaljenado25minutehodaoddomovazdravlja_15, 
                style: style_Tramvajskastajalitaudaljenado25minutehodaoddomovazdravlja_15,
                popuplayertitle: 'Tramvajska stajališta udaljena do 2.5 minute hoda od domova zdravlja',
                interactive: true,
                title: '<img src="styles/legend/Tramvajskastajalitaudaljenado25minutehodaoddomovazdravlja_15.png" /> Tramvajska stajališta udaljena do 2.5 minute hoda od domova zdravlja'
            });
var format_Autobusnastajalitaudaljenado6minutahodaodljekarni_16 = new ol.format.GeoJSON();
var features_Autobusnastajalitaudaljenado6minutahodaodljekarni_16 = format_Autobusnastajalitaudaljenado6minutahodaodljekarni_16.readFeatures(json_Autobusnastajalitaudaljenado6minutahodaodljekarni_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autobusnastajalitaudaljenado6minutahodaodljekarni_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autobusnastajalitaudaljenado6minutahodaodljekarni_16.addFeatures(features_Autobusnastajalitaudaljenado6minutahodaodljekarni_16);
var lyr_Autobusnastajalitaudaljenado6minutahodaodljekarni_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Autobusnastajalitaudaljenado6minutahodaodljekarni_16, 
                style: style_Autobusnastajalitaudaljenado6minutahodaodljekarni_16,
                popuplayertitle: 'Autobusna stajališta udaljena do 6 minuta hoda od ljekarni',
                interactive: true,
                title: '<img src="styles/legend/Autobusnastajalitaudaljenado6minutahodaodljekarni_16.png" /> Autobusna stajališta udaljena do 6 minuta hoda od ljekarni'
            });
var format_Autobusnastajalitaudaljenado25minutehodaodljekarni_17 = new ol.format.GeoJSON();
var features_Autobusnastajalitaudaljenado25minutehodaodljekarni_17 = format_Autobusnastajalitaudaljenado25minutehodaodljekarni_17.readFeatures(json_Autobusnastajalitaudaljenado25minutehodaodljekarni_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autobusnastajalitaudaljenado25minutehodaodljekarni_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autobusnastajalitaudaljenado25minutehodaodljekarni_17.addFeatures(features_Autobusnastajalitaudaljenado25minutehodaodljekarni_17);
var lyr_Autobusnastajalitaudaljenado25minutehodaodljekarni_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Autobusnastajalitaudaljenado25minutehodaodljekarni_17, 
                style: style_Autobusnastajalitaudaljenado25minutehodaodljekarni_17,
                popuplayertitle: 'Autobusna stajališta udaljena do 2.5 minute hoda od ljekarni',
                interactive: true,
                title: '<img src="styles/legend/Autobusnastajalitaudaljenado25minutehodaodljekarni_17.png" /> Autobusna stajališta udaljena do 2.5 minute hoda od ljekarni'
            });
var format_Autobusnastajalitaudaljena6minutahodaodzdravstvenihustanova_18 = new ol.format.GeoJSON();
var features_Autobusnastajalitaudaljena6minutahodaodzdravstvenihustanova_18 = format_Autobusnastajalitaudaljena6minutahodaodzdravstvenihustanova_18.readFeatures(json_Autobusnastajalitaudaljena6minutahodaodzdravstvenihustanova_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autobusnastajalitaudaljena6minutahodaodzdravstvenihustanova_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autobusnastajalitaudaljena6minutahodaodzdravstvenihustanova_18.addFeatures(features_Autobusnastajalitaudaljena6minutahodaodzdravstvenihustanova_18);
var lyr_Autobusnastajalitaudaljena6minutahodaodzdravstvenihustanova_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Autobusnastajalitaudaljena6minutahodaodzdravstvenihustanova_18, 
                style: style_Autobusnastajalitaudaljena6minutahodaodzdravstvenihustanova_18,
                popuplayertitle: 'Autobusna stajališta udaljena 6 minuta hoda od zdravstvenih ustanova',
                interactive: true,
                title: '<img src="styles/legend/Autobusnastajalitaudaljena6minutahodaodzdravstvenihustanova_18.png" /> Autobusna stajališta udaljena 6 minuta hoda od zdravstvenih ustanova'
            });
var format_Autobusnastajalitaudaljenado25minutehodaodzdravstvenihustanova_19 = new ol.format.GeoJSON();
var features_Autobusnastajalitaudaljenado25minutehodaodzdravstvenihustanova_19 = format_Autobusnastajalitaudaljenado25minutehodaodzdravstvenihustanova_19.readFeatures(json_Autobusnastajalitaudaljenado25minutehodaodzdravstvenihustanova_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autobusnastajalitaudaljenado25minutehodaodzdravstvenihustanova_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autobusnastajalitaudaljenado25minutehodaodzdravstvenihustanova_19.addFeatures(features_Autobusnastajalitaudaljenado25minutehodaodzdravstvenihustanova_19);
var lyr_Autobusnastajalitaudaljenado25minutehodaodzdravstvenihustanova_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Autobusnastajalitaudaljenado25minutehodaodzdravstvenihustanova_19, 
                style: style_Autobusnastajalitaudaljenado25minutehodaodzdravstvenihustanova_19,
                popuplayertitle: 'Autobusna stajališta udaljena do 2.5 minute hoda od zdravstvenih ustanova',
                interactive: true,
                title: '<img src="styles/legend/Autobusnastajalitaudaljenado25minutehodaodzdravstvenihustanova_19.png" /> Autobusna stajališta udaljena do 2.5 minute hoda od zdravstvenih ustanova'
            });
var format_Autobusnastajalitaudaljenado6minutahodaoddomovazdravlja_20 = new ol.format.GeoJSON();
var features_Autobusnastajalitaudaljenado6minutahodaoddomovazdravlja_20 = format_Autobusnastajalitaudaljenado6minutahodaoddomovazdravlja_20.readFeatures(json_Autobusnastajalitaudaljenado6minutahodaoddomovazdravlja_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autobusnastajalitaudaljenado6minutahodaoddomovazdravlja_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autobusnastajalitaudaljenado6minutahodaoddomovazdravlja_20.addFeatures(features_Autobusnastajalitaudaljenado6minutahodaoddomovazdravlja_20);
var lyr_Autobusnastajalitaudaljenado6minutahodaoddomovazdravlja_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Autobusnastajalitaudaljenado6minutahodaoddomovazdravlja_20, 
                style: style_Autobusnastajalitaudaljenado6minutahodaoddomovazdravlja_20,
                popuplayertitle: 'Autobusna stajališta udaljena do 6 minuta hoda od domova zdravlja',
                interactive: true,
                title: '<img src="styles/legend/Autobusnastajalitaudaljenado6minutahodaoddomovazdravlja_20.png" /> Autobusna stajališta udaljena do 6 minuta hoda od domova zdravlja'
            });
var format_Autobusnastajalitaudaljenado25minutehodaoddomovazdravlja_21 = new ol.format.GeoJSON();
var features_Autobusnastajalitaudaljenado25minutehodaoddomovazdravlja_21 = format_Autobusnastajalitaudaljenado25minutehodaoddomovazdravlja_21.readFeatures(json_Autobusnastajalitaudaljenado25minutehodaoddomovazdravlja_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autobusnastajalitaudaljenado25minutehodaoddomovazdravlja_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autobusnastajalitaudaljenado25minutehodaoddomovazdravlja_21.addFeatures(features_Autobusnastajalitaudaljenado25minutehodaoddomovazdravlja_21);
var lyr_Autobusnastajalitaudaljenado25minutehodaoddomovazdravlja_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Autobusnastajalitaudaljenado25minutehodaoddomovazdravlja_21, 
                style: style_Autobusnastajalitaudaljenado25minutehodaoddomovazdravlja_21,
                popuplayertitle: 'Autobusna stajališta udaljena do 2.5 minute hoda od domova zdravlja',
                interactive: true,
                title: '<img src="styles/legend/Autobusnastajalitaudaljenado25minutehodaoddomovazdravlja_21.png" /> Autobusna stajališta udaljena do 2.5 minute hoda od domova zdravlja'
            });
var format_Ljekarne_22 = new ol.format.GeoJSON();
var features_Ljekarne_22 = format_Ljekarne_22.readFeatures(json_Ljekarne_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ljekarne_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ljekarne_22.addFeatures(features_Ljekarne_22);
var lyr_Ljekarne_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ljekarne_22, 
                style: style_Ljekarne_22,
                popuplayertitle: 'Ljekarne',
                interactive: true,
                title: '<img src="styles/legend/Ljekarne_22.png" /> Ljekarne'
            });
var format_Zdravstveneustanove_23 = new ol.format.GeoJSON();
var features_Zdravstveneustanove_23 = format_Zdravstveneustanove_23.readFeatures(json_Zdravstveneustanove_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zdravstveneustanove_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zdravstveneustanove_23.addFeatures(features_Zdravstveneustanove_23);
var lyr_Zdravstveneustanove_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zdravstveneustanove_23, 
                style: style_Zdravstveneustanove_23,
                popuplayertitle: 'Zdravstvene ustanove',
                interactive: true,
                title: '<img src="styles/legend/Zdravstveneustanove_23.png" /> Zdravstvene ustanove'
            });
var format_Domovizdravlja_24 = new ol.format.GeoJSON();
var features_Domovizdravlja_24 = format_Domovizdravlja_24.readFeatures(json_Domovizdravlja_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Domovizdravlja_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Domovizdravlja_24.addFeatures(features_Domovizdravlja_24);
var lyr_Domovizdravlja_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Domovizdravlja_24, 
                style: style_Domovizdravlja_24,
                popuplayertitle: 'Domovi zdravlja',
                interactive: true,
                title: '<img src="styles/legend/Domovizdravlja_24.png" /> Domovi zdravlja'
            });

lyr_DigitalniortofotoZagreb2022_0.setVisible(true);lyr_Podrujedostupnodoljekarniu5minutavonje_1.setVisible(true);lyr_Podrujedostupnodozdravstvenihustanovau10minutavonje_2.setVisible(true);lyr_Podrujedostupnododomovazdravljau5minutavonje_3.setVisible(true);lyr_Brojljekarnidostupanu6minutahoda_4.setVisible(true);lyr_Brojljekarnidostupanu25minutehoda_5.setVisible(true);lyr_Brojzdravstvenihustanovadostupanu6minutahoda_6.setVisible(true);lyr_Brojzdravstvenihustanovadostupanu25minutehoda_7.setVisible(true);lyr_Brojdomovazdravljadostupanu6minutahoda_8.setVisible(true);lyr_Brojdomovazdravljadostupanu25minutehoda_9.setVisible(true);lyr_Tramvajskastajalitaudaljenado6minutahodaodljekarni_10.setVisible(true);lyr_Tramvajskastajalitaudaljenado25minutehodaodljekarni_11.setVisible(true);lyr_Tramvajskastajalitaudaljenado6minutahodaodzdravstvenihustanova_12.setVisible(true);lyr_Tramvajskastajalitaudaljenado25minutehodaodzdravstvenihustanova_13.setVisible(true);lyr_Tramvajskastajalitaudaljenado6minutahodaoddomovazdravlja_14.setVisible(true);lyr_Tramvajskastajalitaudaljenado25minutehodaoddomovazdravlja_15.setVisible(true);lyr_Autobusnastajalitaudaljenado6minutahodaodljekarni_16.setVisible(true);lyr_Autobusnastajalitaudaljenado25minutehodaodljekarni_17.setVisible(true);lyr_Autobusnastajalitaudaljena6minutahodaodzdravstvenihustanova_18.setVisible(true);lyr_Autobusnastajalitaudaljenado25minutehodaodzdravstvenihustanova_19.setVisible(true);lyr_Autobusnastajalitaudaljenado6minutahodaoddomovazdravlja_20.setVisible(true);lyr_Autobusnastajalitaudaljenado25minutehodaoddomovazdravlja_21.setVisible(true);lyr_Ljekarne_22.setVisible(true);lyr_Zdravstveneustanove_23.setVisible(true);lyr_Domovizdravlja_24.setVisible(true);
var layersList = [lyr_DigitalniortofotoZagreb2022_0,lyr_Podrujedostupnodoljekarniu5minutavonje_1,lyr_Podrujedostupnodozdravstvenihustanovau10minutavonje_2,lyr_Podrujedostupnododomovazdravljau5minutavonje_3,lyr_Brojljekarnidostupanu6minutahoda_4,lyr_Brojljekarnidostupanu25minutehoda_5,lyr_Brojzdravstvenihustanovadostupanu6minutahoda_6,lyr_Brojzdravstvenihustanovadostupanu25minutehoda_7,lyr_Brojdomovazdravljadostupanu6minutahoda_8,lyr_Brojdomovazdravljadostupanu25minutehoda_9,lyr_Tramvajskastajalitaudaljenado6minutahodaodljekarni_10,lyr_Tramvajskastajalitaudaljenado25minutehodaodljekarni_11,lyr_Tramvajskastajalitaudaljenado6minutahodaodzdravstvenihustanova_12,lyr_Tramvajskastajalitaudaljenado25minutehodaodzdravstvenihustanova_13,lyr_Tramvajskastajalitaudaljenado6minutahodaoddomovazdravlja_14,lyr_Tramvajskastajalitaudaljenado25minutehodaoddomovazdravlja_15,lyr_Autobusnastajalitaudaljenado6minutahodaodljekarni_16,lyr_Autobusnastajalitaudaljenado25minutehodaodljekarni_17,lyr_Autobusnastajalitaudaljena6minutahodaodzdravstvenihustanova_18,lyr_Autobusnastajalitaudaljenado25minutehodaodzdravstvenihustanova_19,lyr_Autobusnastajalitaudaljenado6minutahodaoddomovazdravlja_20,lyr_Autobusnastajalitaudaljenado25minutehodaoddomovazdravlja_21,lyr_Ljekarne_22,lyr_Zdravstveneustanove_23,lyr_Domovizdravlja_24];
lyr_Podrujedostupnodoljekarniu5minutavonje_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', });
lyr_Podrujedostupnodozdravstvenihustanovau10minutavonje_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', });
lyr_Podrujedostupnododomovazdravljau5minutavonje_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', });
lyr_Brojljekarnidostupanu6minutahoda_4.set('fieldAliases', {'COUNT_coun': 'COUNT_coun', });
lyr_Brojljekarnidostupanu25minutehoda_5.set('fieldAliases', {'count_coun': 'count_coun', });
lyr_Brojzdravstvenihustanovadostupanu6minutahoda_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COUNT_coun': 'COUNT_coun', });
lyr_Brojzdravstvenihustanovadostupanu25minutehoda_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COUNT_coun': 'COUNT_coun', });
lyr_Brojdomovazdravljadostupanu6minutahoda_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COUNT_coun': 'COUNT_coun', });
lyr_Brojdomovazdravljadostupanu25minutehoda_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COUNT_coun': 'COUNT_coun', });
lyr_Tramvajskastajalitaudaljenado6minutahodaodljekarni_10.set('fieldAliases', {'Naziv_staj': 'Naziv_staj', 'Linije': 'Linije', 'Opis': 'Opis', 'Napomena': 'Napomena', 'PMUzObjekt': 'PMUzObjekt', 'Parking': 'Parking', 'PristupRaz': 'PristupRaz', 'PristupRam': 'PristupRam', 'Rampa': 'Rampa', 'PristupPla': 'PristupPla', 'PristupSte': 'PristupSte', 'DimenzijaS': 'DimenzijaS', 'Stajaliste': 'Stajaliste', 'UzdignutaP': 'UzdignutaP', 'TaktilnaCr': 'TaktilnaCr', 'Displej': 'Displej', 'KosZaOtpad': 'KosZaOtpad', 'Klupa': 'Klupa', 'CityLight': 'CityLight', 'Nadstresni': 'Nadstresni', 'Teren': 'Teren', 'Teren_napo': 'Teren_napo', 'QC': 'QC', 'ZvucnaSign': 'ZvucnaSign', 'Pothodnik': 'Pothodnik', 'PristupLif': 'PristupLif', 'VozniRed': 'VozniRed', });
lyr_Tramvajskastajalitaudaljenado25minutehodaodljekarni_11.set('fieldAliases', {'Naziv_staj': 'Naziv_staj', 'Linije': 'Linije', 'Opis': 'Opis', 'Napomena': 'Napomena', 'PMUzObjekt': 'PMUzObjekt', 'Parking': 'Parking', 'PristupRaz': 'PristupRaz', 'PristupRam': 'PristupRam', 'Rampa': 'Rampa', 'PristupPla': 'PristupPla', 'PristupSte': 'PristupSte', 'DimenzijaS': 'DimenzijaS', 'Stajaliste': 'Stajaliste', 'UzdignutaP': 'UzdignutaP', 'TaktilnaCr': 'TaktilnaCr', 'Displej': 'Displej', 'KosZaOtpad': 'KosZaOtpad', 'Klupa': 'Klupa', 'CityLight': 'CityLight', 'Nadstresni': 'Nadstresni', 'Teren': 'Teren', 'Teren_napo': 'Teren_napo', 'QC': 'QC', 'ZvucnaSign': 'ZvucnaSign', 'Pothodnik': 'Pothodnik', 'PristupLif': 'PristupLif', 'VozniRed': 'VozniRed', });
lyr_Tramvajskastajalitaudaljenado6minutahodaodzdravstvenihustanova_12.set('fieldAliases', {'Naziv_staj': 'Naziv_staj', 'Linije': 'Linije', 'Opis': 'Opis', 'Napomena': 'Napomena', 'PMUzObjekt': 'PMUzObjekt', 'Parking': 'Parking', 'PristupRaz': 'PristupRaz', 'PristupRam': 'PristupRam', 'Rampa': 'Rampa', 'PristupPla': 'PristupPla', 'PristupSte': 'PristupSte', 'DimenzijaS': 'DimenzijaS', 'Stajaliste': 'Stajaliste', 'UzdignutaP': 'UzdignutaP', 'TaktilnaCr': 'TaktilnaCr', 'Displej': 'Displej', 'KosZaOtpad': 'KosZaOtpad', 'Klupa': 'Klupa', 'CityLight': 'CityLight', 'Nadstresni': 'Nadstresni', 'Teren': 'Teren', 'Teren_napo': 'Teren_napo', 'QC': 'QC', 'ZvucnaSign': 'ZvucnaSign', 'Pothodnik': 'Pothodnik', 'PristupLif': 'PristupLif', 'VozniRed': 'VozniRed', });
lyr_Tramvajskastajalitaudaljenado25minutehodaodzdravstvenihustanova_13.set('fieldAliases', {'Naziv_staj': 'Naziv_staj', 'Linije': 'Linije', 'Opis': 'Opis', 'Napomena': 'Napomena', 'PMUzObjekt': 'PMUzObjekt', 'Parking': 'Parking', 'PristupRaz': 'PristupRaz', 'PristupRam': 'PristupRam', 'Rampa': 'Rampa', 'PristupPla': 'PristupPla', 'PristupSte': 'PristupSte', 'DimenzijaS': 'DimenzijaS', 'Stajaliste': 'Stajaliste', 'UzdignutaP': 'UzdignutaP', 'TaktilnaCr': 'TaktilnaCr', 'Displej': 'Displej', 'KosZaOtpad': 'KosZaOtpad', 'Klupa': 'Klupa', 'CityLight': 'CityLight', 'Nadstresni': 'Nadstresni', 'Teren': 'Teren', 'Teren_napo': 'Teren_napo', 'QC': 'QC', 'ZvucnaSign': 'ZvucnaSign', 'Pothodnik': 'Pothodnik', 'PristupLif': 'PristupLif', 'VozniRed': 'VozniRed', });
lyr_Tramvajskastajalitaudaljenado6minutahodaoddomovazdravlja_14.set('fieldAliases', {'Naziv_staj': 'Naziv_staj', 'Linije': 'Linije', 'Opis': 'Opis', 'Napomena': 'Napomena', 'PMUzObjekt': 'PMUzObjekt', 'Parking': 'Parking', 'PristupRaz': 'PristupRaz', 'PristupRam': 'PristupRam', 'Rampa': 'Rampa', 'PristupPla': 'PristupPla', 'PristupSte': 'PristupSte', 'DimenzijaS': 'DimenzijaS', 'Stajaliste': 'Stajaliste', 'UzdignutaP': 'UzdignutaP', 'TaktilnaCr': 'TaktilnaCr', 'Displej': 'Displej', 'KosZaOtpad': 'KosZaOtpad', 'Klupa': 'Klupa', 'CityLight': 'CityLight', 'Nadstresni': 'Nadstresni', 'Teren': 'Teren', 'Teren_napo': 'Teren_napo', 'QC': 'QC', 'ZvucnaSign': 'ZvucnaSign', 'Pothodnik': 'Pothodnik', 'PristupLif': 'PristupLif', 'VozniRed': 'VozniRed', });
lyr_Tramvajskastajalitaudaljenado25minutehodaoddomovazdravlja_15.set('fieldAliases', {'Naziv_staj': 'Naziv_staj', 'Linije': 'Linije', 'Opis': 'Opis', 'Napomena': 'Napomena', 'PMUzObjekt': 'PMUzObjekt', 'Parking': 'Parking', 'PristupRaz': 'PristupRaz', 'PristupRam': 'PristupRam', 'Rampa': 'Rampa', 'PristupPla': 'PristupPla', 'PristupSte': 'PristupSte', 'DimenzijaS': 'DimenzijaS', 'Stajaliste': 'Stajaliste', 'UzdignutaP': 'UzdignutaP', 'TaktilnaCr': 'TaktilnaCr', 'Displej': 'Displej', 'KosZaOtpad': 'KosZaOtpad', 'Klupa': 'Klupa', 'CityLight': 'CityLight', 'Nadstresni': 'Nadstresni', 'Teren': 'Teren', 'Teren_napo': 'Teren_napo', 'QC': 'QC', 'ZvucnaSign': 'ZvucnaSign', 'Pothodnik': 'Pothodnik', 'PristupLif': 'PristupLif', 'VozniRed': 'VozniRed', });
lyr_Autobusnastajalitaudaljenado6minutahodaodljekarni_16.set('fieldAliases', {'Naziv_staj': 'Naziv_staj', 'Linije': 'Linije', 'Opis': 'Opis', 'Napomena': 'Napomena', 'PMUzObjekt': 'PMUzObjekt', 'Parking': 'Parking', 'PristupRaz': 'PristupRaz', 'PristupRam': 'PristupRam', 'Rampa': 'Rampa', 'PristupPla': 'PristupPla', 'PristupSte': 'PristupSte', 'DimenzijaS': 'DimenzijaS', 'Stajaliste': 'Stajaliste', 'UzdignutaP': 'UzdignutaP', 'TaktilnaCr': 'TaktilnaCr', 'Nadstresni': 'Nadstresni', 'Displej': 'Displej', 'KosZaOtpad': 'KosZaOtpad', 'Klupa': 'Klupa', 'CityLight': 'CityLight', 'Teren': 'Teren', 'Teren_napo': 'Teren_napo', });
lyr_Autobusnastajalitaudaljenado25minutehodaodljekarni_17.set('fieldAliases', {'Naziv_staj': 'Naziv_staj', 'Linije': 'Linije', 'Opis': 'Opis', 'Napomena': 'Napomena', 'PMUzObjekt': 'PMUzObjekt', 'Parking': 'Parking', 'PristupRaz': 'PristupRaz', 'PristupRam': 'PristupRam', 'Rampa': 'Rampa', 'PristupPla': 'PristupPla', 'PristupSte': 'PristupSte', 'DimenzijaS': 'DimenzijaS', 'Stajaliste': 'Stajaliste', 'UzdignutaP': 'UzdignutaP', 'TaktilnaCr': 'TaktilnaCr', 'Nadstresni': 'Nadstresni', 'Displej': 'Displej', 'KosZaOtpad': 'KosZaOtpad', 'Klupa': 'Klupa', 'CityLight': 'CityLight', 'Teren': 'Teren', 'Teren_napo': 'Teren_napo', });
lyr_Autobusnastajalitaudaljena6minutahodaodzdravstvenihustanova_18.set('fieldAliases', {'Naziv_staj': 'Naziv_staj', 'Linije': 'Linije', 'Opis': 'Opis', 'Napomena': 'Napomena', 'PMUzObjekt': 'PMUzObjekt', 'Parking': 'Parking', 'PristupRaz': 'PristupRaz', 'PristupRam': 'PristupRam', 'Rampa': 'Rampa', 'PristupPla': 'PristupPla', 'PristupSte': 'PristupSte', 'DimenzijaS': 'DimenzijaS', 'Stajaliste': 'Stajaliste', 'UzdignutaP': 'UzdignutaP', 'TaktilnaCr': 'TaktilnaCr', 'Nadstresni': 'Nadstresni', 'Displej': 'Displej', 'KosZaOtpad': 'KosZaOtpad', 'Klupa': 'Klupa', 'CityLight': 'CityLight', 'Teren': 'Teren', 'Teren_napo': 'Teren_napo', });
lyr_Autobusnastajalitaudaljenado25minutehodaodzdravstvenihustanova_19.set('fieldAliases', {'Naziv_staj': 'Naziv_staj', 'Linije': 'Linije', 'Opis': 'Opis', 'Napomena': 'Napomena', 'PMUzObjekt': 'PMUzObjekt', 'Parking': 'Parking', 'PristupRaz': 'PristupRaz', 'PristupRam': 'PristupRam', 'Rampa': 'Rampa', 'PristupPla': 'PristupPla', 'PristupSte': 'PristupSte', 'DimenzijaS': 'DimenzijaS', 'Stajaliste': 'Stajaliste', 'UzdignutaP': 'UzdignutaP', 'TaktilnaCr': 'TaktilnaCr', 'Nadstresni': 'Nadstresni', 'Displej': 'Displej', 'KosZaOtpad': 'KosZaOtpad', 'Klupa': 'Klupa', 'CityLight': 'CityLight', 'Teren': 'Teren', 'Teren_napo': 'Teren_napo', });
lyr_Autobusnastajalitaudaljenado6minutahodaoddomovazdravlja_20.set('fieldAliases', {'Naziv_staj': 'Naziv_staj', 'Linije': 'Linije', 'Opis': 'Opis', 'Napomena': 'Napomena', 'PMUzObjekt': 'PMUzObjekt', 'Parking': 'Parking', 'PristupRaz': 'PristupRaz', 'PristupRam': 'PristupRam', 'Rampa': 'Rampa', 'PristupPla': 'PristupPla', 'PristupSte': 'PristupSte', 'DimenzijaS': 'DimenzijaS', 'Stajaliste': 'Stajaliste', 'UzdignutaP': 'UzdignutaP', 'TaktilnaCr': 'TaktilnaCr', 'Nadstresni': 'Nadstresni', 'Displej': 'Displej', 'KosZaOtpad': 'KosZaOtpad', 'Klupa': 'Klupa', 'CityLight': 'CityLight', 'Teren': 'Teren', 'Teren_napo': 'Teren_napo', });
lyr_Autobusnastajalitaudaljenado25minutehodaoddomovazdravlja_21.set('fieldAliases', {'Naziv_staj': 'Naziv_staj', 'Linije': 'Linije', 'Opis': 'Opis', 'Napomena': 'Napomena', 'PMUzObjekt': 'PMUzObjekt', 'Parking': 'Parking', 'PristupRaz': 'PristupRaz', 'PristupRam': 'PristupRam', 'Rampa': 'Rampa', 'PristupPla': 'PristupPla', 'PristupSte': 'PristupSte', 'DimenzijaS': 'DimenzijaS', 'Stajaliste': 'Stajaliste', 'UzdignutaP': 'UzdignutaP', 'TaktilnaCr': 'TaktilnaCr', 'Nadstresni': 'Nadstresni', 'Displej': 'Displej', 'KosZaOtpad': 'KosZaOtpad', 'Klupa': 'Klupa', 'CityLight': 'CityLight', 'Teren': 'Teren', 'Teren_napo': 'Teren_napo', });
lyr_Ljekarne_22.set('fieldAliases', {'naziv': 'naziv', 'adresa': 'adresa', 'telefon': 'telefon', 'email': 'email', 'web': 'web', 'nadlezan': 'nadlezan', 'izvor': 'izvor', 'izradio': 'izradio', });
lyr_Zdravstveneustanove_23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'naziv': 'naziv', 'adresa': 'adresa', 'telefon': 'telefon', 'fax': 'fax', 'email': 'email', 'web': 'web', });
lyr_Domovizdravlja_24.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Domovi_zdr': 'Domovi_zdr', 'Domovi_z_1': 'Domovi_z_1', 'Domovi_z_2': 'Domovi_z_2', 'Domovi_z_3': 'Domovi_z_3', 'Domovi_z_4': 'Domovi_z_4', });
lyr_Podrujedostupnodoljekarniu5minutavonje_1.set('fieldImages', {'Shape_Leng': 'TextEdit', });
lyr_Podrujedostupnodozdravstvenihustanovau10minutavonje_2.set('fieldImages', {'Shape_Leng': 'TextEdit', });
lyr_Podrujedostupnododomovazdravljau5minutavonje_3.set('fieldImages', {'Shape_Leng': 'TextEdit', });
lyr_Brojljekarnidostupanu6minutahoda_4.set('fieldImages', {'COUNT_coun': 'Range', });
lyr_Brojljekarnidostupanu25minutehoda_5.set('fieldImages', {'count_coun': 'TextEdit', });
lyr_Brojzdravstvenihustanovadostupanu6minutahoda_6.set('fieldImages', {'OBJECTID': 'Range', 'COUNT_coun': 'TextEdit', });
lyr_Brojzdravstvenihustanovadostupanu25minutehoda_7.set('fieldImages', {'OBJECTID': 'Range', 'COUNT_coun': 'Range', });
lyr_Brojdomovazdravljadostupanu6minutahoda_8.set('fieldImages', {'OBJECTID': 'Range', 'COUNT_coun': 'Range', });
lyr_Brojdomovazdravljadostupanu25minutehoda_9.set('fieldImages', {'OBJECTID': 'Range', 'COUNT_coun': 'Range', });
lyr_Tramvajskastajalitaudaljenado6minutahodaodljekarni_10.set('fieldImages', {'Naziv_staj': 'TextEdit', 'Linije': 'TextEdit', 'Opis': 'TextEdit', 'Napomena': 'TextEdit', 'PMUzObjekt': 'TextEdit', 'Parking': 'TextEdit', 'PristupRaz': 'TextEdit', 'PristupRam': 'TextEdit', 'Rampa': 'TextEdit', 'PristupPla': 'TextEdit', 'PristupSte': 'TextEdit', 'DimenzijaS': 'TextEdit', 'Stajaliste': 'TextEdit', 'UzdignutaP': 'TextEdit', 'TaktilnaCr': 'TextEdit', 'Displej': 'TextEdit', 'KosZaOtpad': 'TextEdit', 'Klupa': 'TextEdit', 'CityLight': 'TextEdit', 'Nadstresni': 'TextEdit', 'Teren': 'TextEdit', 'Teren_napo': 'TextEdit', 'QC': 'TextEdit', 'ZvucnaSign': 'TextEdit', 'Pothodnik': 'TextEdit', 'PristupLif': 'TextEdit', 'VozniRed': 'TextEdit', });
lyr_Tramvajskastajalitaudaljenado25minutehodaodljekarni_11.set('fieldImages', {'Naziv_staj': 'TextEdit', 'Linije': 'TextEdit', 'Opis': 'TextEdit', 'Napomena': 'TextEdit', 'PMUzObjekt': 'TextEdit', 'Parking': 'TextEdit', 'PristupRaz': 'TextEdit', 'PristupRam': 'TextEdit', 'Rampa': 'TextEdit', 'PristupPla': 'TextEdit', 'PristupSte': 'TextEdit', 'DimenzijaS': 'TextEdit', 'Stajaliste': 'TextEdit', 'UzdignutaP': 'TextEdit', 'TaktilnaCr': 'TextEdit', 'Displej': 'TextEdit', 'KosZaOtpad': 'TextEdit', 'Klupa': 'TextEdit', 'CityLight': 'TextEdit', 'Nadstresni': 'TextEdit', 'Teren': 'TextEdit', 'Teren_napo': 'TextEdit', 'QC': 'TextEdit', 'ZvucnaSign': 'TextEdit', 'Pothodnik': 'TextEdit', 'PristupLif': 'TextEdit', 'VozniRed': 'TextEdit', });
lyr_Tramvajskastajalitaudaljenado6minutahodaodzdravstvenihustanova_12.set('fieldImages', {'Naziv_staj': 'TextEdit', 'Linije': 'TextEdit', 'Opis': 'TextEdit', 'Napomena': 'TextEdit', 'PMUzObjekt': 'TextEdit', 'Parking': 'TextEdit', 'PristupRaz': 'TextEdit', 'PristupRam': 'TextEdit', 'Rampa': 'TextEdit', 'PristupPla': 'TextEdit', 'PristupSte': 'TextEdit', 'DimenzijaS': 'TextEdit', 'Stajaliste': 'TextEdit', 'UzdignutaP': 'TextEdit', 'TaktilnaCr': 'TextEdit', 'Displej': 'TextEdit', 'KosZaOtpad': 'TextEdit', 'Klupa': 'TextEdit', 'CityLight': 'TextEdit', 'Nadstresni': 'TextEdit', 'Teren': 'TextEdit', 'Teren_napo': 'TextEdit', 'QC': 'TextEdit', 'ZvucnaSign': 'TextEdit', 'Pothodnik': 'TextEdit', 'PristupLif': 'TextEdit', 'VozniRed': 'TextEdit', });
lyr_Tramvajskastajalitaudaljenado25minutehodaodzdravstvenihustanova_13.set('fieldImages', {'Naziv_staj': 'TextEdit', 'Linije': 'TextEdit', 'Opis': 'TextEdit', 'Napomena': 'TextEdit', 'PMUzObjekt': 'TextEdit', 'Parking': 'TextEdit', 'PristupRaz': 'TextEdit', 'PristupRam': 'TextEdit', 'Rampa': 'TextEdit', 'PristupPla': 'TextEdit', 'PristupSte': 'TextEdit', 'DimenzijaS': 'TextEdit', 'Stajaliste': 'TextEdit', 'UzdignutaP': 'TextEdit', 'TaktilnaCr': 'TextEdit', 'Displej': 'TextEdit', 'KosZaOtpad': 'TextEdit', 'Klupa': 'TextEdit', 'CityLight': 'TextEdit', 'Nadstresni': 'TextEdit', 'Teren': 'TextEdit', 'Teren_napo': 'TextEdit', 'QC': 'TextEdit', 'ZvucnaSign': 'TextEdit', 'Pothodnik': 'TextEdit', 'PristupLif': 'TextEdit', 'VozniRed': 'TextEdit', });
lyr_Tramvajskastajalitaudaljenado6minutahodaoddomovazdravlja_14.set('fieldImages', {'Naziv_staj': 'TextEdit', 'Linije': 'TextEdit', 'Opis': 'TextEdit', 'Napomena': 'TextEdit', 'PMUzObjekt': 'TextEdit', 'Parking': 'TextEdit', 'PristupRaz': 'TextEdit', 'PristupRam': 'TextEdit', 'Rampa': 'TextEdit', 'PristupPla': 'TextEdit', 'PristupSte': 'TextEdit', 'DimenzijaS': 'TextEdit', 'Stajaliste': 'TextEdit', 'UzdignutaP': 'TextEdit', 'TaktilnaCr': 'TextEdit', 'Displej': 'TextEdit', 'KosZaOtpad': 'TextEdit', 'Klupa': 'TextEdit', 'CityLight': 'TextEdit', 'Nadstresni': 'TextEdit', 'Teren': 'TextEdit', 'Teren_napo': 'TextEdit', 'QC': 'TextEdit', 'ZvucnaSign': 'TextEdit', 'Pothodnik': 'TextEdit', 'PristupLif': 'TextEdit', 'VozniRed': 'TextEdit', });
lyr_Tramvajskastajalitaudaljenado25minutehodaoddomovazdravlja_15.set('fieldImages', {'Naziv_staj': 'TextEdit', 'Linije': 'TextEdit', 'Opis': 'TextEdit', 'Napomena': 'TextEdit', 'PMUzObjekt': 'TextEdit', 'Parking': 'TextEdit', 'PristupRaz': 'TextEdit', 'PristupRam': 'TextEdit', 'Rampa': 'TextEdit', 'PristupPla': 'TextEdit', 'PristupSte': 'TextEdit', 'DimenzijaS': 'TextEdit', 'Stajaliste': 'TextEdit', 'UzdignutaP': 'TextEdit', 'TaktilnaCr': 'TextEdit', 'Displej': 'TextEdit', 'KosZaOtpad': 'TextEdit', 'Klupa': 'TextEdit', 'CityLight': 'TextEdit', 'Nadstresni': 'TextEdit', 'Teren': 'TextEdit', 'Teren_napo': 'TextEdit', 'QC': 'TextEdit', 'ZvucnaSign': 'TextEdit', 'Pothodnik': 'TextEdit', 'PristupLif': 'TextEdit', 'VozniRed': 'TextEdit', });
lyr_Autobusnastajalitaudaljenado6minutahodaodljekarni_16.set('fieldImages', {'Naziv_staj': 'TextEdit', 'Linije': 'TextEdit', 'Opis': 'TextEdit', 'Napomena': 'TextEdit', 'PMUzObjekt': 'TextEdit', 'Parking': 'TextEdit', 'PristupRaz': 'TextEdit', 'PristupRam': 'TextEdit', 'Rampa': 'TextEdit', 'PristupPla': 'TextEdit', 'PristupSte': 'TextEdit', 'DimenzijaS': 'TextEdit', 'Stajaliste': 'TextEdit', 'UzdignutaP': 'TextEdit', 'TaktilnaCr': 'TextEdit', 'Nadstresni': 'TextEdit', 'Displej': 'TextEdit', 'KosZaOtpad': 'TextEdit', 'Klupa': 'TextEdit', 'CityLight': 'TextEdit', 'Teren': 'TextEdit', 'Teren_napo': 'TextEdit', });
lyr_Autobusnastajalitaudaljenado25minutehodaodljekarni_17.set('fieldImages', {'Naziv_staj': 'TextEdit', 'Linije': 'TextEdit', 'Opis': 'TextEdit', 'Napomena': 'TextEdit', 'PMUzObjekt': 'TextEdit', 'Parking': 'TextEdit', 'PristupRaz': 'TextEdit', 'PristupRam': 'TextEdit', 'Rampa': 'TextEdit', 'PristupPla': 'TextEdit', 'PristupSte': 'TextEdit', 'DimenzijaS': 'TextEdit', 'Stajaliste': 'TextEdit', 'UzdignutaP': 'TextEdit', 'TaktilnaCr': 'TextEdit', 'Nadstresni': 'TextEdit', 'Displej': 'TextEdit', 'KosZaOtpad': 'TextEdit', 'Klupa': 'TextEdit', 'CityLight': 'TextEdit', 'Teren': 'TextEdit', 'Teren_napo': 'TextEdit', });
lyr_Autobusnastajalitaudaljena6minutahodaodzdravstvenihustanova_18.set('fieldImages', {'Naziv_staj': 'TextEdit', 'Linije': 'TextEdit', 'Opis': 'TextEdit', 'Napomena': 'TextEdit', 'PMUzObjekt': 'TextEdit', 'Parking': 'TextEdit', 'PristupRaz': 'TextEdit', 'PristupRam': 'TextEdit', 'Rampa': 'TextEdit', 'PristupPla': 'TextEdit', 'PristupSte': 'TextEdit', 'DimenzijaS': 'TextEdit', 'Stajaliste': 'TextEdit', 'UzdignutaP': 'TextEdit', 'TaktilnaCr': 'TextEdit', 'Nadstresni': 'TextEdit', 'Displej': 'TextEdit', 'KosZaOtpad': 'TextEdit', 'Klupa': 'TextEdit', 'CityLight': 'TextEdit', 'Teren': 'TextEdit', 'Teren_napo': 'TextEdit', });
lyr_Autobusnastajalitaudaljenado25minutehodaodzdravstvenihustanova_19.set('fieldImages', {'Naziv_staj': 'TextEdit', 'Linije': 'TextEdit', 'Opis': 'TextEdit', 'Napomena': 'TextEdit', 'PMUzObjekt': 'TextEdit', 'Parking': 'TextEdit', 'PristupRaz': 'TextEdit', 'PristupRam': 'TextEdit', 'Rampa': 'TextEdit', 'PristupPla': 'TextEdit', 'PristupSte': 'TextEdit', 'DimenzijaS': 'TextEdit', 'Stajaliste': 'TextEdit', 'UzdignutaP': 'TextEdit', 'TaktilnaCr': 'TextEdit', 'Nadstresni': 'TextEdit', 'Displej': 'TextEdit', 'KosZaOtpad': 'TextEdit', 'Klupa': 'TextEdit', 'CityLight': 'TextEdit', 'Teren': 'TextEdit', 'Teren_napo': 'TextEdit', });
lyr_Autobusnastajalitaudaljenado6minutahodaoddomovazdravlja_20.set('fieldImages', {'Naziv_staj': 'TextEdit', 'Linije': 'TextEdit', 'Opis': 'TextEdit', 'Napomena': 'TextEdit', 'PMUzObjekt': 'TextEdit', 'Parking': 'TextEdit', 'PristupRaz': 'TextEdit', 'PristupRam': 'TextEdit', 'Rampa': 'TextEdit', 'PristupPla': 'TextEdit', 'PristupSte': 'TextEdit', 'DimenzijaS': 'TextEdit', 'Stajaliste': 'TextEdit', 'UzdignutaP': 'TextEdit', 'TaktilnaCr': 'TextEdit', 'Nadstresni': 'TextEdit', 'Displej': 'TextEdit', 'KosZaOtpad': 'TextEdit', 'Klupa': 'TextEdit', 'CityLight': 'TextEdit', 'Teren': 'TextEdit', 'Teren_napo': 'TextEdit', });
lyr_Autobusnastajalitaudaljenado25minutehodaoddomovazdravlja_21.set('fieldImages', {'Naziv_staj': 'TextEdit', 'Linije': 'TextEdit', 'Opis': 'TextEdit', 'Napomena': 'TextEdit', 'PMUzObjekt': 'TextEdit', 'Parking': 'TextEdit', 'PristupRaz': 'TextEdit', 'PristupRam': 'TextEdit', 'Rampa': 'TextEdit', 'PristupPla': 'TextEdit', 'PristupSte': 'TextEdit', 'DimenzijaS': 'TextEdit', 'Stajaliste': 'TextEdit', 'UzdignutaP': 'TextEdit', 'TaktilnaCr': 'TextEdit', 'Nadstresni': 'TextEdit', 'Displej': 'TextEdit', 'KosZaOtpad': 'TextEdit', 'Klupa': 'TextEdit', 'CityLight': 'TextEdit', 'Teren': 'TextEdit', 'Teren_napo': 'TextEdit', });
lyr_Ljekarne_22.set('fieldImages', {'naziv': 'TextEdit', 'adresa': 'TextEdit', 'telefon': 'TextEdit', 'email': 'TextEdit', 'web': 'TextEdit', 'nadlezan': 'TextEdit', 'izvor': 'TextEdit', 'izradio': 'TextEdit', });
lyr_Zdravstveneustanove_23.set('fieldImages', {'OBJECTID': 'Range', 'naziv': 'TextEdit', 'adresa': 'TextEdit', 'telefon': 'TextEdit', 'fax': 'TextEdit', 'email': 'TextEdit', 'web': 'TextEdit', });
lyr_Domovizdravlja_24.set('fieldImages', {'OBJECTID': 'Range', 'Domovi_zdr': 'TextEdit', 'Domovi_z_1': 'TextEdit', 'Domovi_z_2': 'TextEdit', 'Domovi_z_3': 'TextEdit', 'Domovi_z_4': 'TextEdit', });
lyr_Podrujedostupnodoljekarniu5minutavonje_1.set('fieldLabels', {'Shape_Leng': 'no label', });
lyr_Podrujedostupnodozdravstvenihustanovau10minutavonje_2.set('fieldLabels', {'Shape_Leng': 'no label', });
lyr_Podrujedostupnododomovazdravljau5minutavonje_3.set('fieldLabels', {'Shape_Leng': 'no label', });
lyr_Brojljekarnidostupanu6minutahoda_4.set('fieldLabels', {'COUNT_coun': 'no label', });
lyr_Brojljekarnidostupanu25minutehoda_5.set('fieldLabels', {'count_coun': 'no label', });
lyr_Brojzdravstvenihustanovadostupanu6minutahoda_6.set('fieldLabels', {'OBJECTID': 'no label', 'COUNT_coun': 'no label', });
lyr_Brojzdravstvenihustanovadostupanu25minutehoda_7.set('fieldLabels', {'OBJECTID': 'no label', 'COUNT_coun': 'no label', });
lyr_Brojdomovazdravljadostupanu6minutahoda_8.set('fieldLabels', {'OBJECTID': 'no label', 'COUNT_coun': 'no label', });
lyr_Brojdomovazdravljadostupanu25minutehoda_9.set('fieldLabels', {'OBJECTID': 'no label', 'COUNT_coun': 'no label', });
lyr_Tramvajskastajalitaudaljenado6minutahodaodljekarni_10.set('fieldLabels', {'Naziv_staj': 'no label', 'Linije': 'no label', 'Opis': 'no label', 'Napomena': 'no label', 'PMUzObjekt': 'no label', 'Parking': 'no label', 'PristupRaz': 'no label', 'PristupRam': 'no label', 'Rampa': 'no label', 'PristupPla': 'no label', 'PristupSte': 'no label', 'DimenzijaS': 'no label', 'Stajaliste': 'no label', 'UzdignutaP': 'no label', 'TaktilnaCr': 'no label', 'Displej': 'no label', 'KosZaOtpad': 'no label', 'Klupa': 'no label', 'CityLight': 'no label', 'Nadstresni': 'no label', 'Teren': 'no label', 'Teren_napo': 'no label', 'QC': 'no label', 'ZvucnaSign': 'no label', 'Pothodnik': 'no label', 'PristupLif': 'no label', 'VozniRed': 'no label', });
lyr_Tramvajskastajalitaudaljenado25minutehodaodljekarni_11.set('fieldLabels', {'Naziv_staj': 'no label', 'Linije': 'no label', 'Opis': 'no label', 'Napomena': 'no label', 'PMUzObjekt': 'no label', 'Parking': 'no label', 'PristupRaz': 'no label', 'PristupRam': 'no label', 'Rampa': 'no label', 'PristupPla': 'no label', 'PristupSte': 'no label', 'DimenzijaS': 'no label', 'Stajaliste': 'no label', 'UzdignutaP': 'no label', 'TaktilnaCr': 'no label', 'Displej': 'no label', 'KosZaOtpad': 'no label', 'Klupa': 'no label', 'CityLight': 'no label', 'Nadstresni': 'no label', 'Teren': 'no label', 'Teren_napo': 'no label', 'QC': 'no label', 'ZvucnaSign': 'no label', 'Pothodnik': 'no label', 'PristupLif': 'no label', 'VozniRed': 'no label', });
lyr_Tramvajskastajalitaudaljenado6minutahodaodzdravstvenihustanova_12.set('fieldLabels', {'Naziv_staj': 'no label', 'Linije': 'no label', 'Opis': 'no label', 'Napomena': 'no label', 'PMUzObjekt': 'no label', 'Parking': 'no label', 'PristupRaz': 'no label', 'PristupRam': 'no label', 'Rampa': 'no label', 'PristupPla': 'no label', 'PristupSte': 'no label', 'DimenzijaS': 'no label', 'Stajaliste': 'no label', 'UzdignutaP': 'no label', 'TaktilnaCr': 'no label', 'Displej': 'no label', 'KosZaOtpad': 'no label', 'Klupa': 'no label', 'CityLight': 'no label', 'Nadstresni': 'no label', 'Teren': 'no label', 'Teren_napo': 'no label', 'QC': 'no label', 'ZvucnaSign': 'no label', 'Pothodnik': 'no label', 'PristupLif': 'no label', 'VozniRed': 'no label', });
lyr_Tramvajskastajalitaudaljenado25minutehodaodzdravstvenihustanova_13.set('fieldLabels', {'Naziv_staj': 'no label', 'Linije': 'no label', 'Opis': 'no label', 'Napomena': 'no label', 'PMUzObjekt': 'no label', 'Parking': 'no label', 'PristupRaz': 'no label', 'PristupRam': 'no label', 'Rampa': 'no label', 'PristupPla': 'no label', 'PristupSte': 'no label', 'DimenzijaS': 'no label', 'Stajaliste': 'no label', 'UzdignutaP': 'no label', 'TaktilnaCr': 'no label', 'Displej': 'no label', 'KosZaOtpad': 'no label', 'Klupa': 'no label', 'CityLight': 'no label', 'Nadstresni': 'no label', 'Teren': 'no label', 'Teren_napo': 'no label', 'QC': 'no label', 'ZvucnaSign': 'no label', 'Pothodnik': 'no label', 'PristupLif': 'no label', 'VozniRed': 'no label', });
lyr_Tramvajskastajalitaudaljenado6minutahodaoddomovazdravlja_14.set('fieldLabels', {'Naziv_staj': 'no label', 'Linije': 'no label', 'Opis': 'no label', 'Napomena': 'no label', 'PMUzObjekt': 'no label', 'Parking': 'no label', 'PristupRaz': 'no label', 'PristupRam': 'no label', 'Rampa': 'no label', 'PristupPla': 'no label', 'PristupSte': 'no label', 'DimenzijaS': 'no label', 'Stajaliste': 'no label', 'UzdignutaP': 'no label', 'TaktilnaCr': 'no label', 'Displej': 'no label', 'KosZaOtpad': 'no label', 'Klupa': 'no label', 'CityLight': 'no label', 'Nadstresni': 'no label', 'Teren': 'no label', 'Teren_napo': 'no label', 'QC': 'no label', 'ZvucnaSign': 'no label', 'Pothodnik': 'no label', 'PristupLif': 'no label', 'VozniRed': 'no label', });
lyr_Tramvajskastajalitaudaljenado25minutehodaoddomovazdravlja_15.set('fieldLabels', {'Naziv_staj': 'no label', 'Linije': 'no label', 'Opis': 'no label', 'Napomena': 'no label', 'PMUzObjekt': 'no label', 'Parking': 'no label', 'PristupRaz': 'no label', 'PristupRam': 'no label', 'Rampa': 'no label', 'PristupPla': 'no label', 'PristupSte': 'no label', 'DimenzijaS': 'no label', 'Stajaliste': 'no label', 'UzdignutaP': 'no label', 'TaktilnaCr': 'no label', 'Displej': 'no label', 'KosZaOtpad': 'no label', 'Klupa': 'no label', 'CityLight': 'no label', 'Nadstresni': 'no label', 'Teren': 'no label', 'Teren_napo': 'no label', 'QC': 'no label', 'ZvucnaSign': 'no label', 'Pothodnik': 'no label', 'PristupLif': 'no label', 'VozniRed': 'no label', });
lyr_Autobusnastajalitaudaljenado6minutahodaodljekarni_16.set('fieldLabels', {'Naziv_staj': 'no label', 'Linije': 'no label', 'Opis': 'no label', 'Napomena': 'no label', 'PMUzObjekt': 'no label', 'Parking': 'no label', 'PristupRaz': 'no label', 'PristupRam': 'no label', 'Rampa': 'no label', 'PristupPla': 'no label', 'PristupSte': 'no label', 'DimenzijaS': 'no label', 'Stajaliste': 'no label', 'UzdignutaP': 'no label', 'TaktilnaCr': 'no label', 'Nadstresni': 'no label', 'Displej': 'no label', 'KosZaOtpad': 'no label', 'Klupa': 'no label', 'CityLight': 'no label', 'Teren': 'no label', 'Teren_napo': 'no label', });
lyr_Autobusnastajalitaudaljenado25minutehodaodljekarni_17.set('fieldLabels', {'Naziv_staj': 'no label', 'Linije': 'no label', 'Opis': 'no label', 'Napomena': 'no label', 'PMUzObjekt': 'no label', 'Parking': 'no label', 'PristupRaz': 'no label', 'PristupRam': 'no label', 'Rampa': 'no label', 'PristupPla': 'no label', 'PristupSte': 'no label', 'DimenzijaS': 'no label', 'Stajaliste': 'no label', 'UzdignutaP': 'no label', 'TaktilnaCr': 'no label', 'Nadstresni': 'no label', 'Displej': 'no label', 'KosZaOtpad': 'no label', 'Klupa': 'no label', 'CityLight': 'no label', 'Teren': 'no label', 'Teren_napo': 'no label', });
lyr_Autobusnastajalitaudaljena6minutahodaodzdravstvenihustanova_18.set('fieldLabels', {'Naziv_staj': 'no label', 'Linije': 'no label', 'Opis': 'no label', 'Napomena': 'no label', 'PMUzObjekt': 'no label', 'Parking': 'no label', 'PristupRaz': 'no label', 'PristupRam': 'no label', 'Rampa': 'no label', 'PristupPla': 'no label', 'PristupSte': 'no label', 'DimenzijaS': 'no label', 'Stajaliste': 'no label', 'UzdignutaP': 'no label', 'TaktilnaCr': 'no label', 'Nadstresni': 'no label', 'Displej': 'no label', 'KosZaOtpad': 'no label', 'Klupa': 'no label', 'CityLight': 'no label', 'Teren': 'no label', 'Teren_napo': 'no label', });
lyr_Autobusnastajalitaudaljenado25minutehodaodzdravstvenihustanova_19.set('fieldLabels', {'Naziv_staj': 'no label', 'Linije': 'no label', 'Opis': 'no label', 'Napomena': 'no label', 'PMUzObjekt': 'no label', 'Parking': 'no label', 'PristupRaz': 'no label', 'PristupRam': 'no label', 'Rampa': 'no label', 'PristupPla': 'no label', 'PristupSte': 'no label', 'DimenzijaS': 'no label', 'Stajaliste': 'no label', 'UzdignutaP': 'no label', 'TaktilnaCr': 'no label', 'Nadstresni': 'no label', 'Displej': 'no label', 'KosZaOtpad': 'no label', 'Klupa': 'no label', 'CityLight': 'no label', 'Teren': 'no label', 'Teren_napo': 'no label', });
lyr_Autobusnastajalitaudaljenado6minutahodaoddomovazdravlja_20.set('fieldLabels', {'Naziv_staj': 'no label', 'Linije': 'no label', 'Opis': 'no label', 'Napomena': 'no label', 'PMUzObjekt': 'no label', 'Parking': 'no label', 'PristupRaz': 'no label', 'PristupRam': 'no label', 'Rampa': 'no label', 'PristupPla': 'no label', 'PristupSte': 'no label', 'DimenzijaS': 'no label', 'Stajaliste': 'no label', 'UzdignutaP': 'no label', 'TaktilnaCr': 'no label', 'Nadstresni': 'no label', 'Displej': 'no label', 'KosZaOtpad': 'no label', 'Klupa': 'no label', 'CityLight': 'no label', 'Teren': 'no label', 'Teren_napo': 'no label', });
lyr_Autobusnastajalitaudaljenado25minutehodaoddomovazdravlja_21.set('fieldLabels', {'Naziv_staj': 'no label', 'Linije': 'no label', 'Opis': 'no label', 'Napomena': 'no label', 'PMUzObjekt': 'no label', 'Parking': 'no label', 'PristupRaz': 'no label', 'PristupRam': 'no label', 'Rampa': 'no label', 'PristupPla': 'no label', 'PristupSte': 'no label', 'DimenzijaS': 'no label', 'Stajaliste': 'no label', 'UzdignutaP': 'no label', 'TaktilnaCr': 'no label', 'Nadstresni': 'no label', 'Displej': 'no label', 'KosZaOtpad': 'no label', 'Klupa': 'no label', 'CityLight': 'no label', 'Teren': 'no label', 'Teren_napo': 'no label', });
lyr_Ljekarne_22.set('fieldLabels', {'naziv': 'no label', 'adresa': 'no label', 'telefon': 'no label', 'email': 'no label', 'web': 'no label', 'nadlezan': 'no label', 'izvor': 'no label', 'izradio': 'no label', });
lyr_Zdravstveneustanove_23.set('fieldLabels', {'OBJECTID': 'no label', 'naziv': 'no label', 'adresa': 'no label', 'telefon': 'no label', 'fax': 'no label', 'email': 'no label', 'web': 'no label', });
lyr_Domovizdravlja_24.set('fieldLabels', {'OBJECTID': 'no label', 'Domovi_zdr': 'no label', 'Domovi_z_1': 'no label', 'Domovi_z_2': 'no label', 'Domovi_z_3': 'no label', 'Domovi_z_4': 'no label', });
lyr_Domovizdravlja_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});