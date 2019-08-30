/*google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}*/


var chartSerial = AmCharts.makeChart("idChartSerial", {
    type: "serial",
    rotate: !1,
    startEffect: "easeOutSine",
    fontFamily: "Lato",
    marginTop: 25,
    marginBottom: 1,
    marginLeft: 1,
    marginRight: 25,
    categoryField: "S",
    startDuration: 1,
    categoryAxis: {
        gridPosition: "start",
        labelRotation: 45,
        fontSize: 12
    },
    valueAxes: [{
        position: "left",
        title: "Votos",
        fontSize: 12,
        minorGridEnabled: !0,
        minimum: 0
    }],
    graphs: [{
        type: "column",
        title: "Votos",
        valueField: "V",
        lineAlpha: .1,
        fillAlphas: 1,
        balloonText: "[[category]]<br><span style='font-size:14px'><b>[[value]]</b> votos<br>[[P]]%</span>",
        labelText: "[[value]]",
        labelPosition: "top",
        customBulletField: "bullet",
        bulletOffset: 48,
        bulletSize: 32,
        colorField: "C"
    }]
}),
chartMesasProcesadas = AmCharts.makeChart("idChartMesasProcesadas", {
    type: "serial",
    startEffect: "easeOutSine",
    rotate: !0,
    categoryField: "D",
    fontFamily: "Lato",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    startDuration: 1,
    handDrawScatter: 0,
    categoryAxis: {
        gridPosition: "start",
        fontSize: 12
    },
    valueAxes: [{
        stackType: "100%",
        position: "bottom",
        title: "",
        fontSize: 12,
        minorGridEnabled: !0,
        minimum: 0
    }],
    graphs: [{
        type: "column",
        valueField: "MESASPRO",
        showOnAxis: !0,
        lineAlpha: .1,
        fillAlphas: 1,
        balloonText: "Mesas procesadas <br><span style='font-size:14px'><b>[[value]]</b> mesas<br>[[percents]]%</span>",
        labelText: "Mesas procesadas<br>[[value]]<br>([[percents]]%)",
        labelPosition: "middle",
        labelColor: "#ffffff",
        customBulletField: "bullet",
        colorField: "CPRO",
        title: "Mesas procesadas"
    }, {
        type: "column",
        valueField: "MESASFALT",
        showOnAxis: !0,
        lineAlpha: .1,
        fillAlphas: 1,
        balloonText: "Mesas no procesadas <br><span style='font-size:14px'><b>[[value]]</b> mesas<br>[[percents]]%</span>",
        labelText: "Mesas no procesadas<br>[[value]]<br>([[percents]]%)",
        labelPosition: "middle",
        labelColor: "#ffffff",
        customBulletField: "bullet",
        colorField: "CFALT",
        title: "Mesas no procesadas"
    }]
});

function fnFillCmb(a, e) {
if (a.options.length = 0, e)
    for (var t = 0; t < e.length; t++) a.options.add(new Option(e[t].NAME, e[t].ID))
}
var tableToExcel = function(a, e) {
a.nodeType || (a = document.getElementById(a));
var t, o = {
    worksheet: e || "Worksheet",
    table: a.innerHTML
};
window.location.href = "data:application/vnd.ms-excel;base64," + function(a) {
    return window.btoa(unescape(encodeURIComponent(a)))
}((t = o, '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head>\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'.replace(/{(\w+)}/g, function(a, e) {
    return t[e]
})))
};

function fnGetMap(a) {
switch (a = parseInt(a, 10)) {
    case 0:
        $(".mapcontainer").mapael({
            map: {
                name: "republica_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(0, 150, 1e3, 1800, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            },
            areas: {
                GUATEMALA: {
                    tooltip: {
                        content: "<span>Guatemala</span>"
                    }
                },
                SACATEPEQUEZ: {
                    tooltip: {
                        content: "<span>Sacatep&eacute;quez</span>"
                    }
                },
                CHIMALTENANGO: {
                    tooltip: {
                        content: "<span>Chimaltenango</span>"
                    }
                },
                ELPROGRESO: {
                    tooltip: {
                        content: "<span>El Progreso</span>"
                    }
                },
                ESCUINTLA: {
                    tooltip: {
                        content: "<span>Escuintla</span>"
                    }
                },
                SANTAROSA: {
                    tooltip: {
                        content: "<span>Santa Rosa</span>"
                    }
                },
                SOLOLA: {
                    tooltip: {
                        content: "<span>Solol&aacute;</span>"
                    }
                },
                TOTONICAPAN: {
                    tooltip: {
                        content: "<span>Totonicap&aacute;n</span>"
                    }
                },
                QUETZALTENANGO: {
                    tooltip: {
                        content: "<span>Quetzaltenango</span>"
                    }
                },
                SUCHITEPEQUEZ: {
                    tooltip: {
                        content: "<span>Suchit&eacute;pequez</span>"
                    }
                },
                RETALHULEU: {
                    tooltip: {
                        content: "<span>Retalhuleu</span>"
                    }
                },
                SANMARCOS: {
                    tooltip: {
                        content: "<span>San Marcos</span>"
                    }
                },
                HUEHUETENANGO: {
                    tooltip: {
                        content: "<span>Huehuetenango</span>"
                    }
                },
                QUICHE: {
                    tooltip: {
                        content: "<span>Quich&eacute;</span>"
                    }
                },
                BAJAVERAPAZ: {
                    tooltip: {
                        content: "<span>Baja Verapaz</span>"
                    }
                },
                ALTAVERAPAZ: {
                    tooltip: {
                        content: "<span>Alta Verapaz</span>"
                    }
                },
                PETEN: {
                    tooltip: {
                        content: "<span>Pet&eacute;n</span>"
                    }
                },
                IZABAL: {
                    tooltip: {
                        content: "<span>Izabal</span>"
                    }
                },
                ZACAPA: {
                    tooltip: {
                        content: "<span>Zacapa</span>"
                    }
                },
                CHIQUIMULA: {
                    tooltip: {
                        content: "<span>Chiquimula</span>"
                    }
                },
                JALAPA: {
                    tooltip: {
                        content: "<span>Jalapa</span>"
                    }
                },
                JUTIAPA: {
                    tooltip: {
                        content: "<span>Jutiapa</span>"
                    }
                }
            }
        });
        break;
    case 1:
        $(".mapcontainer").mapael({
            map: {
                name: "guatemala_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(-125, 125, 1e3, 2e3, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 2:
        $(".mapcontainer").mapael({
            map: {
                name: "sacatepequez_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(-125, 25, 1e3, 2500, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 3:
        $(".mapcontainer").mapael({
            map: {
                name: "chimaltenango_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(-125, 75, 1e3, 2500, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 4:
        $(".mapcontainer").mapael({
            map: {
                name: "elprogreso_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(650, 700, 50, 750, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 5:
        $(".mapcontainer").mapael({
            map: {
                name: "escuintla_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(400, 600, 50, 1250, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 6:
        $(".mapcontainer").mapael({
            map: {
                name: "santarosa_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(425, 100, 100, 2500, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 7:
        $(".mapcontainer").mapael({
            map: {
                name: "solola_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(350, 400, 100, 1750, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 8:
        $(".mapcontainer").mapael({
            map: {
                name: "totonicapan_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(350, 300, 100, 2e3, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 9:
        $(".mapcontainer").mapael({
            map: {
                name: "quetzaltenango_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(350, 300, 100, 2e3, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 10:
        $(".mapcontainer").mapael({
            map: {
                name: "suchitepequez_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(350, 175, 100, 2100, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 11:
        $(".mapcontainer").mapael({
            map: {
                name: "retalhuleu_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(350, 275, 100, 2100, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 12:
        $(".mapcontainer").mapael({
            map: {
                name: "sanmarcos_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(350, 5, 100, 2500, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 13:
        $(".mapcontainer").mapael({
            map: {
                name: "huehuetenango_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(350, 350, 100, 1750, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 14:
        $(".mapcontainer").mapael({
            map: {
                name: "quiche_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(1e3, 150, 100, 7e3, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 15:
        $(".mapcontainer").mapael({
            map: {
                name: "bajaverapaz_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(300, 600, 100, 1500, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 16:
        $(".mapcontainer").mapael({
            map: {
                name: "altaverapaz_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(300, 500, 100, 1500, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 17:
        $(".mapcontainer").mapael({
            map: {
                name: "peten_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(400, 300, 100, 2e3, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 18:
        $(".mapcontainer").mapael({
            map: {
                name: "izabal_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(850, 575, 100, 1300, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 19:
        $(".mapcontainer").mapael({
            map: {
                name: "zacapa_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(350, 450, 100, 1500, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 20:
        $(".mapcontainer").mapael({
            map: {
                name: "chiquimula_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(350, 300, 100, 1800, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 21:
        $(".mapcontainer").mapael({
            map: {
                name: "jalapa_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(350, 500, 100, 1500, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 22:
        $(".mapcontainer").mapael({
            map: {
                name: "jutiapa_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(350, 250, 100, 2e3, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            }
        });
        break;
    case 23:
        $(".mapcontainer").mapael({
            map: {
                name: "usa_map",
                beforeInit: function(a, e, t, o, l) {
                    e.setViewBox(400, -75, 100, 700, !0)
                },
                defaultArea: {
                    attrs: {
                        fill: "#bbdefb",
                        stroke: "#aaa",
                        "stroke-width": 2
                    },
                    attrsHover: {
                        fill: "#1565c0",
                        "stroke-width": 2
                    }
                }
            },
            areas: {
                CA: {
                    href: "#",
                    attrs: {
                        fill: "#1565c0"
                    },
                    tooltip: {
                        content: "<span>Los &Aacute;ngeles - California</span>"
                    }
                },
                MD: {
                    href: "#",
                    attrs: {
                        fill: "#1565c0"
                    },
                    tooltip: {
                        content: "<span>Sylver Spring - Maryland</span>"
                    }
                },
                NY: {
                    href: "#",
                    attrs: {
                        fill: "#1565c0"
                    },
                    tooltip: {
                        content: "<span>New York - New York</span>"
                    }
                },
                TX: {
                    href: "#",
                    attrs: {
                        fill: "#1565c0"
                    },
                    tooltip: {
                        content: "<span>Houston - Texas</span>"
                    }
                }
            }
        })
}
}

function ready() {
$(".ui.dropdown").dropdown();
var a = document.getElementById("cmbTipoEleccion"),
    e = document.getElementById("cmbDepartamento"),
    t = document.getElementById("cmbMunicipio"),
    o = a.options[a.selectedIndex].value;
fnFillCmb(e, objDepartamentos[o]);
var l = e.options[e.selectedIndex].value;
fnFillCmb(t, objMunicipios[o][l])
}

function fnGetValue(a, e) {
var t = Array();
switch (a) {
    case 1:
        t[1] = e.data[0].S1, t[2] = e.data[0].V1, t[3] = e.data[0].P1, t[4] = "#" + e.data[0].C1;
        break;
    case 2:
        t[1] = e.data[0].S2, t[2] = e.data[0].V2, t[3] = e.data[0].P2, t[4] = "#" + e.data[0].C2;
        break;
    case 3:
        t[1] = e.data[0].S3, t[2] = e.data[0].V3, t[3] = e.data[0].P3, t[4] = "#" + e.data[0].C3;
        break;
    case 4:
        t[1] = e.data[0].S4, t[2] = e.data[0].V4, t[3] = e.data[0].P4, t[4] = "#" + e.data[0].C4;
        break;
    case 5:
        t[1] = e.data[0].S5, t[2] = e.data[0].V5, t[3] = e.data[0].P5, t[4] = "#" + e.data[0].C5;
        break;
    case 6:
        t[1] = e.data[0].S6, t[2] = e.data[0].V6, t[3] = e.data[0].P6, t[4] = "#" + e.data[0].C6;
        break;
    case 7:
        t[1] = e.data[0].S7, t[2] = e.data[0].V7, t[3] = e.data[0].P7, t[4] = "#" + e.data[0].C7;
        break;
    case 8:
        t[1] = e.data[0].S8, t[2] = e.data[0].V8, t[3] = e.data[0].P8, t[4] = "#" + e.data[0].C8;
        break;
    case 9:
        t[1] = e.data[0].S9, t[2] = e.data[0].V9, t[3] = e.data[0].P9, t[4] = "#" + e.data[0].C9;
        break;
    case 10:
        t[1] = e.data[0].S10, t[2] = e.data[0].V10, t[3] = e.data[0].P10, t[4] = "#" + e.data[0].C10;
        break;
    case 11:
        t[1] = e.data[0].S11, t[2] = e.data[0].V11, t[3] = e.data[0].P11, t[4] = "#" + e.data[0].C11;
        break;
    default:
        t[1] = e.data[0].S1, t[2] = e.data[0].V1, t[3] = e.data[0].P1, t[4] = "#" + e.data[0].C1
}
return t
}

function fnGetMax(a) {
return Math.max.apply(null, a)
}

function getJSON(a) {
var e;
if (e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")) {
    e.onreadystatechange = function() {
        if (4 == this.readyState && 200 == this.status) try {
            var e = [];
            obj = JSON.parse(this.responseText), $("#lblTipoEleccion").text(obj.data[0].TIPOELECCION), 0 == obj.data[0].NMUN && 0 == obj.data[0].NDEP ? lblGEO = "NIVEL NACIONAL" : 0 == obj.data[0].NDEP && 1 == obj.data[0].NMUN ? lblGEO = obj.data[0].MUN : obj.data[0].NDEP > 0 && 0 == obj.data[0].NMUN ? 23 == obj.data[0].NDEP ? lblGEO = obj.data[0].DEP + ", TODAS LAS CIUDADES" : lblGEO = obj.data[0].DEP + ", NIVEL DEPARTAMENTAL" : lblGEO = obj.data[0].MUN + ", " + obj.data[0].DEP, $("#lblGEO1").text(lblGEO), $("#lblFechaHora").text(obj.data[0].FECHAHORA), $("#lblGEO2").text(lblGEO), 0 == o && 1 == l ? $.getScript("maps/1.js", function() {
                $("#megaMap").text("Cargando mapa..."), fnGetMap(1)
            }) : $.getScript("maps/" + o + ".js", function() {
                $("#megaMap").text("Cargando mapa..."), fnGetMap(o)
            });
            for (var t = Array(), s = '<table id="idTablaResultado" class="ui very compact selectable celled single line unstackable fixed table"><thead><tr><th class="left aligned eight wide"><b>Organizaciones Pol&iacute;ticas</b></th><th class="center aligned four wide"><b>Votos</b></th><th class="center aligned four wide"><b>%</b></th></tr></thead><tbody>', n = 1; n <= obj.data[0].NOP; n++) {
                var i = fnGetValue(n, obj);
                s += '<tr><td class="left aligned">' + i[1] + "</td>", s += '<td class="right aligned"><b>' + i[2].toLocaleString("es-GT", {
                    style: "decimal",
                    decimal: "0"
                }) + "</b></td>", s += '<td class="right aligned"><b>' + i[3].toFixed(2) + "%</b></td></tr>";
                var r = n - 1;
                t[r] = i[2], e[r] = [], e[r].S = i[1], e[r].V = i[2], e[r].P = i[3].toLocaleString("es-GT", {
                    style: "decimal",
                    decimal: "2"
                }), e[r].C = i[4], 1 == obj.data[0].NTIPOELECCION ? e[r].bullet = "../img/logos/" + i[1] + ".png" : e[r].bullet = ""
            }
            s += "</tbody></table>", document.getElementById("spanTablaResultado").innerHTML = s;
            var d = fnGetMax(t),
                c = d + .3 * d;
            chartSerial.dataProvider = e, 1 == obj.data[0].NTIPOELECCION ? (chartSerial.valueAxes[0].maximum = c, chartSerial.rotate = !1) : (chartSerial.valueAxes[0].maximum = c, chartSerial.rotate = !0), chartSerial.validateData(), chartSerial.animateAgain(), $("#lblTotalVotosValidos").text(obj.data[0].VOTOSVALIDOS.toLocaleString("es-GT", {
                style: "decimal",
                decimal: "0"
            })), $("#lblPtotalVotosValidos").text(obj.data[0].PVOTOSVALIDOS.toFixed(2) + "%"), $("#lblVotosNulos").text(obj.data[0].NULOS.toLocaleString("es-GT", {
                style: "decimal",
                decimal: "0"
            })), $("#lblPvotosNulos").text(obj.data[0].PNULOS.toFixed(2) + "%"), $("#lblVotosEnBlanco").text(obj.data[0].BLANCOS.toLocaleString("es-GT", {
                style: "decimal",
                decimal: "0"
            })), $("#lblPvotosEnBlanco").text(obj.data[0].PBLANCOS.toFixed(2) + "%"), $("#lblVotosValidamenteEmitidos").text(obj.data[0].TOTALVOTOS.toLocaleString("es-GT", {
                style: "decimal",
                decimal: "0"
            })), $("#lblPvotosValidamenteEmitidos").text(obj.data[0].PTOTALVOTOS.toFixed(2) + "%"), $("#lblVotosInvalidos").text(obj.data[0].INVALIDOS.toLocaleString("es-GT", {
                style: "decimal",
                decimal: "0"
            })), $("#lblPvotosInvalidos").text(obj.data[0].PINVALIDOS.toFixed(2) + "%"), $("#lblImpugnaciones").text(obj.data[0].CNTIMPUGNA.toLocaleString("es-GT", {
                style: "decimal",
                decimal: "0"
            })), $("#lblPImpugnaciones").text(obj.data[0].PCNTIMPUGNA.toFixed(2) + "%"), $("#lblVotantesInscritos").text(obj.data[0].CNTVOTANTES.toLocaleString("es-GT", {
                style: "decimal",
                decimal: "0"
            })), $("#lblAbstencionismo").text(obj.data[0].ABSTENCIONISMO.toLocaleString("es-GT", {
                style: "decimal",
                decimal: "0"
            })), (e = [])[0] = [], e[0].D = "", e[0].MESASPRO = obj.data[0].MESASPRO, e[0].MESASFALT = obj.data[0].MESASFALT, e[0].CPRO = "#1565c0", e[0].CFALT = "#bbdefb", $("#lblMesasProcesadasTotalMesas").text(obj.data[0].CNTMESAS.toLocaleString("es-GT", {
                style: "decimal",
                decimal: "0"
            })), $("#lblPmesasProcesadasHeader").text(obj.data[0].PMESASPRO.toFixed(2) + "%"), $("#lblMesasProcesadas").text(obj.data[0].MESASPRO.toLocaleString("es-GT", {
                style: "decimal",
                decimal: "0"
            }) + " (" + obj.data[0].PMESASPRO.toFixed(2) + "%)"), $("#lblMesasNoProcesadas").text(obj.data[0].MESASFALT.toLocaleString("es-GT", {
                style: "decimal",
                decimal: "0"
            }) + " (" + obj.data[0].PMESASFALT.toFixed(2) + "%)"), chartMesasProcesadas.dataProvider = e, chartMesasProcesadas.validateData(), chartMesasProcesadas.animateAgain(), 1 == a && document.getElementById("dimmer").classList.remove("active")
        } catch (e) {
            1 == a && document.getElementById("dimmer").classList.remove("active")
        }
        4 == this.readyState && this.status >= 400 && 1 == a && document.getElementById("dimmer").classList.remove("active")
    };
    var t = document.getElementById("cmbTipoEleccion").value,
        o = document.getElementById("cmbDepartamento").value,
        l = document.getElementById("cmbMunicipio").value;
    t && o && l || (t = 1, o = 0, l = 0), 1 == o && 1 == l && (o = 0);
    var s = JSON.stringify({
        PROCESO: 201902,
        TIPOELECCION: t,
        DEP: o,
        MUN: l
    });
    1 == a && document.getElementById("dimmer").classList.add("active"), e.open("POST", "https://ws2v.tse.org.gt/api/tse/resultados", !0), e.setRequestHeader("Content-Type", "application/json"), e.send(s)
}
}

function fnChange(a) {
var e = document.getElementById("cmbTipoEleccion"),
    t = document.getElementById("cmbDepartamento"),
    o = document.getElementById("cmbMunicipio");
switch (a) {
    case "TE":
        var l = e.options[e.selectedIndex].value;
        fnFillCmb(t, objDepartamentos[l]);
        var s = t.options[t.selectedIndex].value;
        fnFillCmb(o, objMunicipios[l][s]);
        break;
    case "DEP":
        l = e.options[e.selectedIndex].value, s = t.options[t.selectedIndex].value;
        fnFillCmb(o, objMunicipios[l][s])
}
}
$(".ui.dropdown").dropdown(), document.addEventListener("DOMContentLoaded", ready), window.onload = function() {
getJSON(!0)
};