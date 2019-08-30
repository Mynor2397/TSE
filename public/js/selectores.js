$(document).ready(main);


var objDepartamentos = [
    { "ID": "0", "NAME": "NIVEL NACIONAL" },
    { "ID": "1", "NAME": "GUATEMALA" },
    { "ID": "2", "NAME": "SACATEP\u00c9QUEZ" },
    { "ID": "3", "NAME": "CHIMALTENANGO" },
    { "ID": "4", "NAME": "EL PROGRESO" },
    { "ID": "5", "NAME": "ESCUINTLA" },
    { "ID": "6", "NAME": "SANTA ROSA" },
    { "ID": "7", "NAME": "SOLOL\u00c1" },
    { "ID": "8", "NAME": "TOTONICAP\u00c1N" },
    { "ID": "9", "NAME": "QUETZALTENANGO" },
    { "ID": "10", "NAME": "SUCHITEP\u00c9QUEZ" },
    { "ID": "11", "NAME": "RETALHULEU" },
    { "ID": "12", "NAME": "SAN MARCOS" },
    { "ID": "13", "NAME": "HUEHUETENANGO" },
    { "ID": "14", "NAME": "QUICH\u00c9" },
    { "ID": "15", "NAME": "BAJA VERAPAZ" },
    { "ID": "16", "NAME": "ALTA VERAPAZ" },
    { "ID": "17", "NAME": "PET\u00c9N" },
    { "ID": "18", "NAME": "IZABAL" },
    { "ID": "19", "NAME": "ZACAPA" },
    { "ID": "20", "NAME": "CHIQUIMULA" },
    { "ID": "21", "NAME": "JALAPA" },
    { "ID": "22", "NAME": "JUTIAPA" },
    { "ID": "23", "NAME": "GUATEMALTECOS EN ESTADOS UNIDOS" }
];

var objDepExepion = [
    { "ID": "5", "NAME": "ESCUINTLA" },
    { "ID": "12", "NAME": "SAN MARCOS" },
    { "ID": "14", "NAME": "QUICH\u00c9" },
    { "ID": "19", "NAME": "ZACAPA" }
];
var NACIONAL = [{ "ID": "0", "NAME": "NIVEL NACIONAL" }]
var GUATEMALA = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "DISTRITO CENTRAL" }, { "ID": "2", "NAME": "SANTA CATARINA PINULA" }, { "ID": "3", "NAME": "SAN JOS\u00c9 PINULA" }, { "ID": "4", "NAME": "SAN JOS\u00c9 DEL GOLFO" }, { "ID": "5", "NAME": "PALENCIA" }, { "ID": "6", "NAME": "CHINAUTLA" }, { "ID": "7", "NAME": "SAN PEDRO AYAMPUC" }, { "ID": "8", "NAME": "MIXCO" }, { "ID": "9", "NAME": "SAN PEDRO SACATEP\u00c9QUEZ" }, { "ID": "10", "NAME": "SAN JUAN SACATEP\u00c9QUEZ" }, { "ID": "11", "NAME": "SAN RAIMUNDO" }, { "ID": "12", "NAME": "CHUARRANCHO" }, { "ID": "13", "NAME": "FRAIJANES" }, { "ID": "14", "NAME": "AMATITL\u00c1N" }, { "ID": "15", "NAME": "VILLA NUEVA" }, { "ID": "16", "NAME": "VILLA CANALES" }, { "ID": "17", "NAME": "PETAPA" }]
var SACATEPEQUEZ = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "ANTIGUA GUATEMALA" }, { "ID": "2", "NAME": "JOCOTENANGO" }, { "ID": "3", "NAME": "PASTORES" }, { "ID": "4", "NAME": "SUMPANGO" }, { "ID": "5", "NAME": "SANTO DOMINGO XENACOJ" }, { "ID": "6", "NAME": "SANTIAGO SACATEP\u00c9QUEZ" }, { "ID": "7", "NAME": "SAN BARTOLOM\u00c9 MILPAS ALTAS" }, { "ID": "8", "NAME": "SAN LUCAS SACATEP\u00c9QUEZ" }, { "ID": "9", "NAME": "SANTA LUC\u00cdA MILPAS ALTAS" }, { "ID": "10", "NAME": "MAGDALENA MILPAS ALTAS" }, { "ID": "11", "NAME": "SANTA MAR\u00cdA DE JES\u00daS" }, { "ID": "12", "NAME": "CIUDAD VIEJA" }, { "ID": "13", "NAME": "SAN MIGUEL DUE\u00d1AS" }, { "ID": "14", "NAME": "ALOTENANGO" }, { "ID": "15", "NAME": "SAN ANTONIO AGUAS CALIENTES" }, { "ID": "16", "NAME": "SANTA CATARINA BARAHONA" }];
var CHIMALTENANGO = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "CHIMALTENANGO" }, { "ID": "2", "NAME": "SAN JOS\u00c9 POAQUIL" }, { "ID": "3", "NAME": "SAN MART\u00cdN JILOTEPEQUE" }, { "ID": "4", "NAME": "COMALAPA" }, { "ID": "5", "NAME": "SANTA APOLONIA" }, { "ID": "6", "NAME": "TECP\u00c1N GUATEMALA" }, { "ID": "7", "NAME": "PATZ\u00daN" }, { "ID": "8", "NAME": "POCHUTA" }, { "ID": "9", "NAME": "PATZIC\u00cdA" }, { "ID": "10", "NAME": "SANTA CRUZ BALANY\u00c1" }, { "ID": "11", "NAME": "ACATENANGO" }, { "ID": "12", "NAME": "YEPOCAPA" }, { "ID": "13", "NAME": "SAN ANDR\u00c9S ITZAPA" }, { "ID": "14", "NAME": "PARRAMOS" }, { "ID": "15", "NAME": "ZARAGOZA" }, { "ID": "16", "NAME": "EL TEJAR" }]
var ELPROGRESO = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "GUASTATOYA" }, { "ID": "2", "NAME": "MORAZ\u00c1N" }, { "ID": "3", "NAME": "SAN AGUST\u00cdN ACASAGUASTL\u00c1N" }, { "ID": "4", "NAME": "SAN CRIST\u00d3BAL ACASAGUASTL\u00c1N" }, { "ID": "5", "NAME": "EL J\u00cdCARO" }, { "ID": "6", "NAME": "SANSARE" }, { "ID": "7", "NAME": "SANARATE" }, { "ID": "8", "NAME": "SAN ANTONIO LA PAZ" }];
var ESCUINTLA = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "ESCUINTLA" }, { "ID": "2", "NAME": "SANTA LUC\u00cdA COTZUMALGUAPA" }, { "ID": "3", "NAME": "LA DEMOCRACIA" }, { "ID": "4", "NAME": "SIQUINAL\u00c1" }, { "ID": "5", "NAME": "MASAGUA" }, { "ID": "6", "NAME": "TIQUISATE" }, { "ID": "7", "NAME": "LA GOMERA" }, { "ID": "8", "NAME": "GUANAGAZAPA" }, { "ID": "9", "NAME": "SAN JOS\u00c9" }, { "ID": "10", "NAME": "IZTAPA" }, { "ID": "11", "NAME": "PAL\u00cdN" }, { "ID": "12", "NAME": "SAN VICENTE PACAYA" }, { "ID": "13", "NAME": "NUEVA CONCEPCI\u00d3N" }, { "ID": "14", "NAME": "SIPACATE" }]
var SANTAROSA = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "CUILAPA" }, { "ID": "2", "NAME": "BARBERENA" }, { "ID": "3", "NAME": "SANTA ROSA DE LIMA" }, { "ID": "4", "NAME": "CASILLAS" }, { "ID": "5", "NAME": "SAN RAFAEL LAS FLORES" }, { "ID": "6", "NAME": "ORATORIO" }, { "ID": "7", "NAME": "SAN JUAN TECUACO" }, { "ID": "8", "NAME": "CHIQUIMULILLA" }, { "ID": "9", "NAME": "TAXISCO" }, { "ID": "10", "NAME": "SANTA MAR\u00cdA IXHUAT\u00c1N" }, { "ID": "11", "NAME": "GUAZACAP\u00c1N" }, { "ID": "12", "NAME": "SANTA CRUZ NARANJO" }, { "ID": "13", "NAME": "PUEBLO NUEVO VI\u00d1AS" }, { "ID": "14", "NAME": "NUEVA SANTA ROSA" }]
var SOLOLA = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "SOLOL\u00c1" }, { "ID": "2", "NAME": "SAN JOS\u00c9 CHACAY\u00c1" }, { "ID": "3", "NAME": "SANTA MAR\u00cdA VISITACI\u00d3N" }, { "ID": "4", "NAME": "SANTA LUC\u00cdA UTATL\u00c1N" }, { "ID": "5", "NAME": "NAHUAL\u00c1" }, { "ID": "6", "NAME": "SANTA CATARINA IXTAHUAC\u00c1N" }, { "ID": "7", "NAME": "SANTA CLARA LA LAGUNA" }, { "ID": "8", "NAME": "CONCEPCI\u00d3N" }, { "ID": "9", "NAME": "SAN ANDR\u00c9S SEMETABAJ" }, { "ID": "10", "NAME": "PANAJACHEL" }, { "ID": "11", "NAME": "SANTA CATARINA PALOP\u00d3" }, { "ID": "12", "NAME": "SAN ANTONIO PALOP\u00d3" }, { "ID": "13", "NAME": "SAN LUCAS TOLIM\u00c1N" }, { "ID": "14", "NAME": "SANTA CRUZ LA LAGUNA" }, { "ID": "15", "NAME": "SAN PABLO LA LAGUNA" }, { "ID": "16", "NAME": "SAN MARCOS LA LAGUNA" }, { "ID": "17", "NAME": "SAN JUAN LA LAGUNA" }, { "ID": "18", "NAME": "SAN PEDRO LA LAGUNA" }, { "ID": "19", "NAME": "SANTIAGO ATITL\u00c1N" }]
var TOTONICAPAN = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "TOTONICAP\u00c1N" }, { "ID": "2", "NAME": "SAN CRIST\u00d3BAL TOTONICAP\u00c1N" }, { "ID": "3", "NAME": "SAN FRANCISCO EL ALTO" }, { "ID": "4", "NAME": "SAN ANDR\u00c9S XECUL" }, { "ID": "5", "NAME": "MOMOSTENANGO" }, { "ID": "6", "NAME": "SANTA MAR\u00cdA CHIQUIMULA" }, { "ID": "7", "NAME": "SANTA LUC\u00cdA LA REFORMA" }, { "ID": "8", "NAME": "SAN BARTOLO" }]
var QUETZALTENANGO = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "QUETZALTENANGO" }, { "ID": "2", "NAME": "SALCAJ\u00c1" }, { "ID": "3", "NAME": "OLINTEPEQUE" }, { "ID": "4", "NAME": "SAN CARLOS SIJA" }, { "ID": "5", "NAME": "SIBILIA" }, { "ID": "6", "NAME": "CABRIC\u00c1N" }, { "ID": "7", "NAME": "CAJOL\u00c1" }, { "ID": "8", "NAME": "SAN MIGUEL SIG\u00dcIL\u00c1" }, { "ID": "9", "NAME": "OSTUNCALCO" }, { "ID": "10", "NAME": "SAN MATEO" }, { "ID": "11", "NAME": "CONCEPCI\u00d3N CHIQUIRICHAPA" }, { "ID": "12", "NAME": "SAN MART\u00cdN SACATEP\u00c9QUEZ" }, { "ID": "13", "NAME": "ALMOLONGA" }, { "ID": "14", "NAME": "CANTEL" }, { "ID": "15", "NAME": "HUIT\u00c1N" }, { "ID": "16", "NAME": "ZUNIL" }, { "ID": "17", "NAME": "COLOMBA" }, { "ID": "18", "NAME": "SAN FRANCISCO LA UNI\u00d3N" }, { "ID": "19", "NAME": "EL PALMAR" }, { "ID": "20", "NAME": "COATEPEQUE" }, { "ID": "21", "NAME": "G\u00c9NOVA" }, { "ID": "22", "NAME": "FLORES COSTA CUCA" }, { "ID": "23", "NAME": "LA ESPERANZA" }, { "ID": "24", "NAME": "PALESTINA DE LOS ALTOS" }]
var SUCHITEPEQUEZ = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "MAZATENANGO" }, { "ID": "2", "NAME": "CUYOTENANGO" }, { "ID": "3", "NAME": "SAN FRANCISCO ZAPOTITL\u00c1N" }, { "ID": "4", "NAME": "SAN BERNARDINO" }, { "ID": "5", "NAME": "SAN JOS\u00c9 EL \u00cdDOLO" }, { "ID": "6", "NAME": "SANTO DOMINGO SUCHITEP\u00c9QUEZ" }, { "ID": "7", "NAME": "SAN LORENZO" }, { "ID": "8", "NAME": "SAMAYAC" }, { "ID": "9", "NAME": "SAN PABLO JOCOPILAS" }, { "ID": "10", "NAME": "SAN ANTONIO SUCHITEP\u00c9QUEZ" }, { "ID": "11", "NAME": "SAN MIGUEL PAN\u00c1N" }, { "ID": "12", "NAME": "SAN GABRIEL" }, { "ID": "13", "NAME": "CHICACAO" }, { "ID": "14", "NAME": "PATULUL" }, { "ID": "15", "NAME": "SANTA B\u00c1RBARA" }, { "ID": "16", "NAME": "SAN JUAN BAUTISTA" }, { "ID": "17", "NAME": "SANTO TOM\u00c1S LA UNI\u00d3N" }, { "ID": "18", "NAME": "ZUNILITO" }, { "ID": "19", "NAME": "PUEBLO NUEVO" }, { "ID": "20", "NAME": "R\u00cdO BRAVO" }, { "ID": "21", "NAME": "SAN JOS\u00c9 LA M\u00c1QUINA" }]
var RETALHULEU = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "RETALHULEU" }, { "ID": "2", "NAME": "SAN SEBASTI\u00c1N" }, { "ID": "3", "NAME": "SANTA CRUZ MULU\u00c1" }, { "ID": "4", "NAME": "SAN MART\u00cdN ZAPOTITL\u00c1N" }, { "ID": "5", "NAME": "SAN FELIPE" }, { "ID": "6", "NAME": "SAN ANDR\u00c9S VILLA SECA" }, { "ID": "7", "NAME": "CHAMPERICO" }, { "ID": "8", "NAME": "NUEVO SAN CARLOS" }, { "ID": "9", "NAME": "EL ASINTAL" }]
var SANMARCOS = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "SAN MARCOS" }, { "ID": "2", "NAME": "SAN PEDRO SACATEP\u00c9QUEZ" }, { "ID": "3", "NAME": "SAN ANTONIO SACATEP\u00c9QUEZ" }, { "ID": "4", "NAME": "COMITANCILLO" }, { "ID": "5", "NAME": "SAN MIGUEL IXTAHUAC\u00c1N" }, { "ID": "6", "NAME": "CONCEPCI\u00d3N TUTUAPA" }, { "ID": "7", "NAME": "TACAN\u00c1" }, { "ID": "8", "NAME": "SIBINAL" }, { "ID": "9", "NAME": "TAJUMULCO" }, { "ID": "10", "NAME": "TEJUTLA" }, { "ID": "11", "NAME": "SAN RAFAEL PIE DE LA CUESTA" }, { "ID": "12", "NAME": "NUEVO PROGRESO" }, { "ID": "13", "NAME": "EL TUMBADOR" }, { "ID": "14", "NAME": "EL RODEO" }, { "ID": "15", "NAME": "MALACAT\u00c1N" }, { "ID": "16", "NAME": "CATARINA" }, { "ID": "17", "NAME": "AYUTLA" }, { "ID": "18", "NAME": "OC\u00d3S" }, { "ID": "19", "NAME": "SAN PABLO" }, { "ID": "20", "NAME": "EL QUETZAL" }, { "ID": "21", "NAME": "LA REFORMA" }, { "ID": "22", "NAME": "PAJAPITA" }, { "ID": "23", "NAME": "IXCHIGU\u00c1N" }, { "ID": "24", "NAME": "SAN JOS\u00c9 OJETENAM" }, { "ID": "25", "NAME": "SAN CRIST\u00d3BAL CUCHO" }, { "ID": "26", "NAME": "SIPACAPA" }, { "ID": "27", "NAME": "ESQUIPULAS PALO GORDO" }, { "ID": "28", "NAME": "R\u00cdO BLANCO" }, { "ID": "29", "NAME": "SAN LORENZO" }, { "ID": "30", "NAME": "LA BLANCA" }]
var HUEHUETENANGO = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "HUEHUETENANGO" }, { "ID": "2", "NAME": "CHIANTLA" }, { "ID": "3", "NAME": "MALACATANCITO" }, { "ID": "4", "NAME": "CUILCO" }, { "ID": "5", "NAME": "NENT\u00d3N" }, { "ID": "6", "NAME": "SAN PEDRO NECTA" }, { "ID": "7", "NAME": "JACALTENANGO" }, { "ID": "8", "NAME": "SOLOMA" }, { "ID": "9", "NAME": "IXTAHUAC\u00c1N" }, { "ID": "10", "NAME": "SANTA B\u00c1RBARA" }, { "ID": "11", "NAME": "LA LIBERTAD" }, { "ID": "12", "NAME": "LA DEMOCRACIA" }, { "ID": "13", "NAME": "SAN MIGUEL ACAT\u00c1N" }, { "ID": "14", "NAME": "SAN RAFAEL LA INDEPENDENCIA" }, { "ID": "15", "NAME": "TODOS SANTOS CUCHUMAT\u00c1N" }, { "ID": "16", "NAME": "SAN JUAN ATIT\u00c1N" }, { "ID": "17", "NAME": "SANTA EULALIA" }, { "ID": "18", "NAME": "SAN MATEO IXTAT\u00c1N" }, { "ID": "19", "NAME": "COLOTENANGO" }, { "ID": "20", "NAME": "SAN SEBASTI\u00c1N HUEHUETENANGO" }, { "ID": "21", "NAME": "TECTIT\u00c1N" }, { "ID": "22", "NAME": "CONCEPCI\u00d3N HUISTA" }, { "ID": "23", "NAME": "SAN JUAN IXCOY" }, { "ID": "24", "NAME": "SAN ANTONIO HUISTA" }, { "ID": "25", "NAME": "SAN SEBASTI\u00c1N COAT\u00c1N" }, { "ID": "26", "NAME": "BARILLAS" }, { "ID": "27", "NAME": "AGUACAT\u00c1N" }, { "ID": "28", "NAME": "SAN RAFAEL PETZAL" }, { "ID": "29", "NAME": "SAN GASPAR IXCHIL" }, { "ID": "30", "NAME": "SANTIAGO CHIMALTENANGO" }, { "ID": "31", "NAME": "SANTA ANA HUISTA" }, { "ID": "32", "NAME": "UNI\u00d3N CANTINIL" }, { "ID": "33", "NAME": "PETAT\u00c1N" }]
var QUICHE = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "SANTA CRUZ DEL QUICH\u00c9" }, { "ID": "2", "NAME": "CHICH\u00c9" }, { "ID": "3", "NAME": "CHINIQUE" }, { "ID": "4", "NAME": "ZACUALPA" }, { "ID": "5", "NAME": "CHAJUL" }, { "ID": "6", "NAME": "CHICHICASTENANGO" }, { "ID": "7", "NAME": "PATZIT\u00c9" }, { "ID": "8", "NAME": "SAN ANTONIO ILOTENANGO" }, { "ID": "9", "NAME": "SAN PEDRO JOCOPILAS" }, { "ID": "10", "NAME": "CUN\u00c9N" }, { "ID": "11", "NAME": "SAN JUAN COTZAL" }, { "ID": "12", "NAME": "JOYABAJ" }, { "ID": "13", "NAME": "NEBAJ" }, { "ID": "14", "NAME": "SAN ANDR\u00c9S SAJCABAJ\u00c1" }, { "ID": "15", "NAME": "USPANT\u00c1N" }, { "ID": "16", "NAME": "SACAPULAS" }, { "ID": "17", "NAME": "SAN BARTOLOM\u00c9 JOCOTENANGO" }, { "ID": "18", "NAME": "CANILL\u00c1" }, { "ID": "19", "NAME": "CHICAM\u00c1N" }, { "ID": "20", "NAME": "IXC\u00c1N" }, { "ID": "21", "NAME": "PACHALUM" }]
var BAJAVERAPAZ = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "SALAM\u00c1" }, { "ID": "2", "NAME": "SAN MIGUEL CHICAJ" }, { "ID": "3", "NAME": "RABINAL" }, { "ID": "4", "NAME": "CUBULCO" }, { "ID": "5", "NAME": "GRANADOS" }, { "ID": "6", "NAME": "EL CHOL" }, { "ID": "7", "NAME": "SAN JER\u00d3NIMO" }, { "ID": "8", "NAME": "PURULH\u00c1" }]
var ALTAVERAPAZ = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "COB\u00c1N" }, { "ID": "2", "NAME": "SANTA CRUZ VERAPAZ" }, { "ID": "3", "NAME": "SAN CRIST\u00d3BAL VERAPAZ" }, { "ID": "4", "NAME": "TACTIC" }, { "ID": "5", "NAME": "TAMAH\u00da" }, { "ID": "6", "NAME": "TUCUR\u00da" }, { "ID": "7", "NAME": "PANZ\u00d3S" }, { "ID": "8", "NAME": "SENAH\u00da" }, { "ID": "9", "NAME": "SAN PEDRO CARCH\u00c1" }, { "ID": "10", "NAME": "SAN JUAN CHAMELCO" }, { "ID": "11", "NAME": "LANQU\u00cdN" }, { "ID": "12", "NAME": "CAHAB\u00d3N" }, { "ID": "13", "NAME": "CHISEC" }, { "ID": "14", "NAME": "CHAHAL" }, { "ID": "15", "NAME": "FRAY BARTOLOM\u00c9 DE LAS CASAS" }, { "ID": "16", "NAME": "SANTA CATALINA LA TINTA" }, { "ID": "17", "NAME": "RAXRUH\u00c1" }]
var PETEN = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "FLORES" }, { "ID": "2", "NAME": "SAN JOS\u00c9" }, { "ID": "3", "NAME": "SAN BENITO" }, { "ID": "4", "NAME": "SAN ANDR\u00c9S" }, { "ID": "5", "NAME": "LA LIBERTAD" }, { "ID": "6", "NAME": "SAN FRANCISCO" }, { "ID": "7", "NAME": "SANTA ANA" }, { "ID": "8", "NAME": "DOLORES" }, { "ID": "9", "NAME": "SAN LUIS" }, { "ID": "10", "NAME": "SAYAXCH\u00c9" }, { "ID": "11", "NAME": "MELCHOR DE MENCOS" }, { "ID": "12", "NAME": "POPT\u00daN" }, { "ID": "13", "NAME": "LAS CRUCES" }, { "ID": "14", "NAME": "EL CHAL" }]
var IZABAL = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "PUERTO BARRIOS" }, { "ID": "2", "NAME": "L\u00cdVINGSTON" }, { "ID": "3", "NAME": "EL ESTOR" }, { "ID": "4", "NAME": "MORALES" }, { "ID": "5", "NAME": "LOS AMATES" }]
var ZACAPA = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "ZACAPA" }, { "ID": "2", "NAME": "ESTANZUELA" }, { "ID": "3", "NAME": "R\u00cdO HONDO" }, { "ID": "4", "NAME": "GUAL\u00c1N" }, { "ID": "5", "NAME": "TECULUT\u00c1N" }, { "ID": "6", "NAME": "USUMATL\u00c1N" }, { "ID": "7", "NAME": "CABA\u00d1AS" }, { "ID": "8", "NAME": "SAN DIEGO" }, { "ID": "9", "NAME": "LA UNI\u00d3N" }, { "ID": "10", "NAME": "HUIT\u00c9" }, { "ID": "11", "NAME": "SAN JORGE" }]
var CHIQUIMULA = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "CHIQUIMULA" }, { "ID": "2", "NAME": "SAN JOS\u00c9 LA ARADA" }, { "ID": "3", "NAME": "SAN JUAN ERMITA" }, { "ID": "4", "NAME": "JOCOT\u00c1N" }, { "ID": "5", "NAME": "CAMOT\u00c1N" }, { "ID": "6", "NAME": "OLOPA" }, { "ID": "7", "NAME": "ESQUIPULAS" }, { "ID": "8", "NAME": "CONCEPCI\u00d3N LAS MINAS" }, { "ID": "9", "NAME": "QUEZALTEPEQUE" }, { "ID": "10", "NAME": "SAN JACINTO" }, { "ID": "11", "NAME": "IPALA" }]
var JALAPA = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "JALAPA" }, { "ID": "2", "NAME": "SAN PEDRO PINULA" }, { "ID": "3", "NAME": "SAN LUIS JILOTEPEQUE" }, { "ID": "4", "NAME": "SAN MANUEL CHAPARR\u00d3N" }, { "ID": "5", "NAME": "SAN CARLOS ALZATATE" }, { "ID": "6", "NAME": "MONJAS" }, { "ID": "7", "NAME": "MATAQUESCUINTLA" }]
var JUTIAPA = [{ "ID": "0", "NAME": "NIVEL DEPARTAMENTAL" }, { "ID": "1", "NAME": "JUTIAPA" }, { "ID": "2", "NAME": "EL PROGRESO" }, { "ID": "3", "NAME": "SANTA CATARINA MITA" }, { "ID": "4", "NAME": "AGUA BLANCA" }, { "ID": "5", "NAME": "ASUNCI\u00d3N MITA" }, { "ID": "6", "NAME": "YUPILTEPEQUE" }, { "ID": "7", "NAME": "ATESCATEMPA" }, { "ID": "8", "NAME": "JEREZ" }, { "ID": "9", "NAME": "EL ADELANTO" }, { "ID": "10", "NAME": "ZAPOTITL\u00c1N" }, { "ID": "11", "NAME": "COMAPA" }, { "ID": "12", "NAME": "JALPATAGUA" }, { "ID": "13", "NAME": "CONGUACO" }, { "ID": "14", "NAME": "MOYUTA" }, { "ID": "15", "NAME": "PASACO" }, { "ID": "16", "NAME": "SAN JOS\u00c9 ACATEMPA" }, { "ID": "17", "NAME": "QUESADA" }]
var USA = [{ "ID": "0", "NAME": "TODAS LAS CIUDADES" }, { "ID": "1", "NAME": "LOS ANGELES - CALIFORNIA" }, { "ID": "2", "NAME": "SILVER SPRING - MARYLAND" }, { "ID": "3", "NAME": "NEW YORK - NEW YORK" }, { "ID": "4", "NAME": "HOUSTON - TEXAS" }]

var mun5 = [{ "ID": "10", "NAME": "IZTAPA" }]
var mun12 = [{ "ID": "9", "NAME": "TAJUMULCO" }, { "ID": "27", "NAME": "ESQUIPULAS PALO GORDO" }]
var mun14 = [{ "ID": "8", "NAME": "SAN ANTONIO ILOTENANGO" }]
var mun19 = [{ "ID": "11", "NAME": "SAN JORGE" }]

function main() {
    var tipoeleccion = $('#TIPOELECCION').val()

    selectorVal(tipoeleccion)


    function selectorVal(tipoeleccion) {
        let template = '';
        let dept;
        let par;

        tipoeleccion = parseInt(tipoeleccion)
        if (tipoeleccion == 1) {
            //si el select trae 1 todos los departamentos
            dept = JSON.stringify(objDepartamentos)
            par = JSON.parse(dept)
            par.forEach(dep => {
                template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
            });
        }

        if (tipoeleccion == 2) {
            //si el select tiene 2 los de corporacion municipal
            dept = JSON.stringify(objDepExepion)
            par = JSON.parse(dept)
            par.forEach(dep => {
                template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
            });
        }

        $('#TIPOELECCION').change(function () {
            var tipoeleccion = $('#TIPOELECCION').val()
            tipoeleccion = parseInt(tipoeleccion)
            var template = '';
            if (tipoeleccion == 1) {
                //si el select trae 1
                dept = JSON.stringify(objDepartamentos)
                par = JSON.parse(dept)
                par.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
            }
            if (tipoeleccion == 2) {
                //si el select tiene 2
                dept = JSON.stringify(objDepExepion)
                par = JSON.parse(dept)
                par.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
            }
            //muestra los selects
            $('#DEP').html(template)

            //ejecuta la funcion para cambiar el contenido del select 3
            var departamentoID = $('select[id=DEP]').val()
            departamento(departamentoID)

        })

        //si cambia el valor del DEPARTAMENTO se ejecuta la funcion que muestra
        //el valor del id de departamento en el 3er selector
        $('#DEP').change(function(){
            var departamentoID = $('select[id=DEP]').val()
            departamento(departamentoID)
        })

        //imprimer el contenido de la consulta ya sea departamentos o municipios especiales
        $('#DEP').html(template)
    }


    //FUNCION CAMBIAR SELECT 3
    var iddepartamento = $('select[id=DEP]').val()
    departamento(iddepartamento)

    //funcion para cambiar el contenido del selector 3
    function departamento(iddepartamento) {
        var tipoeleccion = $('#TIPOELECCION').val()
        var id =0;

        let dept;
        let municipios;
        let template ='';

        tipoeleccion=parseInt(tipoeleccion)
        id = parseInt(iddepartamento);

        console.log(tipoeleccion);
        console.log(id);
        //los casos especiales son 5, 12, 14, 19 que son los que tienen elecciones municipales
        switch (id) {
            case 0:
                dept = JSON.stringify(NACIONAL)
                municipios = JSON.parse(dept)

                municipios.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
                break;
            case 1:
                dept = JSON.stringify(GUATEMALA)
                municipios = JSON.parse(dept)

                municipios.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
                break;

            case 2:
                dept = JSON.stringify(SACATEPEQUEZ)
                municipios = JSON.parse(dept)

                municipios.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
                break;

            case 3:
                dept = JSON.stringify(CHIMALTENANGO)
                municipios = JSON.parse(dept)

                municipios.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                    console.log(template);

                });
                break;

            case 4:
                dept = JSON.stringify(ELPROGRESO)
                municipios = JSON.parse(dept)

                municipios.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
                break;

            case 5:
                if (tipoeleccion == 1) {
                    dept = JSON.stringify(ESCUINTLA)
                    municipios = JSON.parse(dept)

                    municipios.forEach(dep => {
                        template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                    });
                } else {
                    parseado = JSON.stringify(mun5)
                    response = JSON.parse(parseado)

                    response.forEach(dep => {
                        template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                    });
                }
                break;

            case 6:
                dept = JSON.stringify(SANTAROSA)
                municipios = JSON.parse(dept)

                municipios.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
                break;

            case 7:
                dept = JSON.stringify(SOLOLA)
                municipios = JSON.parse(dept)

                municipios.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
                break;

            case 8:
                dept = JSON.stringify(TOTONICAPAN)
                municipios = JSON.parse(dept)

                municipios.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
                break;

            case 9:
                dept = JSON.stringify(QUETZALTENANGO)
                municipios = JSON.parse(dept)

                municipios.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
                break;

            case 10:
                dept = JSON.stringify(SUCHITEPEQUEZ)
                municipios = JSON.parse(dept)

                municipios.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
                break;

            case 11:
                dept = JSON.stringify(RETALHULEU)
                municipios = JSON.parse(dept)

                par.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
                break;

            case 12:
                if (tipoeleccion == 1) {
                    dept = JSON.stringify(SANMARCOS)
                    municipios = JSON.parse(dept)

                    municipios.forEach(dep => {
                        template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                    });
                } else {
                    parseado = JSON.stringify(mun12)
                    response = JSON.parse(parseado)

                    response.forEach(dep => {
                        template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                    });
                }

                break;
            case 13:
                dept = JSON.stringify(HUEHUETENANGO)
                municipios = JSON.parse(dept)

                municipios.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
                break;
            case 14:
                if (tipoeleccion == 1) {
                    dept = JSON.stringify(QUICHE)
                    municipios = JSON.parse(dept)

                    municipios.forEach(dep => {
                        template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                    });
                } else {
                    parseado = JSON.stringify(mun14)
                    response = JSON.parse(parseado)

                    response.forEach(dep => {
                        template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                    });
                }
                break;

            case 15:
                dept = JSON.stringify(BAJAVERAPAZ)
                municipios = JSON.parse(dept)

                municipios.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
                break;

            case 16:
                dept = JSON.stringify(ALTAVERAPAZ)
                municipios = JSON.parse(dept)

                municipios.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
                break;

            case 17:
                dept = JSON.stringify(PETEN)
                municipios = JSON.parse(dept)

                municipios.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
                break;

            case 18:
                dept = JSON.stringify(IZABAL)
                municipios = JSON.parse(dept)

                municipios.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
                break;

            case 19:
                if (tipoeleccion == 1) {
                    dept = JSON.stringify(ZACAPA)
                    municipios = JSON.parse(dept)

                    municipios.forEach(dep => {
                        template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                    });
                } else {
                    parseado = JSON.stringify(mun19)
                    response = JSON.parse(parseado)

                    response.forEach(dep => {
                        template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                    });
                }

                break;

            case 20:
                dept = JSON.stringify(CHIQUIMULA)
                municipios = JSON.parse(dept)

                municipios.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
                break;

            case 21:
                dept = JSON.stringify(JALAPA)
                municipios = JSON.parse(dept)

                municipios.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
                break;

            case 22:
                dept = JSON.stringify(JUTIAPA)
                municipios = JSON.parse(dept)

                municipios.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
                break;

            case 23:
                dept = JSON.stringify(USA)
                municipios = JSON.parse(dept)

                municipios.forEach(dep => {
                    template += `<option class="success"value="${dep.ID}">${dep.NAME}</option>`
                });
                break;
        }
        $('#MUN').html(template)

    }
}


