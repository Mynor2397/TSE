$(document).ready(Consultar);

function Consultar() {

    var _TIPOELECCION = $("#TIPOELECCION").val();
    var _DEP = $("#DEP").val();
    var _MUN = $("#MUN").val();

    console.log('TIPO DE ELECCTION: ' + _TIPOELECCION);
    console.log('DEPARTAMENTO: ' + _DEP);
    console.log('MUNICIPIO: ' + _MUN);

    let VAMOS = 0;
    let UNE = 0;

    //para segunda grafica
    let PROCESADO =0;
    let NOPROCESADO=0;


    $.post("https://ws2v.tse.org.gt/api/tse/resultados", {
        PROCESO: "201902",
        TIPOELECCION: _TIPOELECCION,
        DEP: _DEP,
        MUN: _MUN
    },
        function (data, status) {
            let datos = JSON.stringify(data.data)
            datos = JSON.parse(datos)
            console.log(datos);

            datos.forEach(element => {
                $('#tiempo').html(element.FECHAHORA)
                $('#VAMOS').html(element.V1)
                $('#VAMOSP').html(element.P1.toFixed(2) + '%')
                $('#UNE').html(element.V2)
                $('#UNEP').html(element.P2.toFixed(2) + '%')
                $('#VOTOSVALIDOS').html(element.VOTOSVALIDOS)
                $('#NULOS').html(element.NULOS)
                $('#BLANCOS').html(element.BLANCOS)
                $('#TOTALVOTOS').html(element.TOTALVOTOS)
                $('#INVALIDOS').html(element.INVALIDOS)
                $('#CNTIMPUGNA').html(element.CNTIMPUGNA)
                $('#PVOTOSVALIDOS').html(element.PVOTOSVALIDOS.toFixed(2) + '%')
                $('#PNULOS').html(element.PNULOS.toFixed(2) + '%')
                $('#PBLANCOS').html(element.PBLANCOS.toFixed(2) + '%')
                $('#PTOTALVOTOS').html(element.PTOTALVOTOS.toFixed(2) + '%')
                $('#PINVALIDOS').html(element.PINVALIDOS.toFixed(2) + '%')
                $('#PCNTIMPUGNA').html(element.PCNTIMPUGNA.toFixed(2) + '%')

                //segundo form
                $('#CNTMESAS').html(element.CNTMESAS)
                $('#MESASPRO').html(element.MESASPRO + '(' + (element.PMESASPRO.toFixed(2)) + '%)')
                $('#MESASFALT').html(element.MESASFALT + '(' + (element.PMESASFALT.toFixed(2)) + '%)')
                $('#CNTVOTANTES').html(element.CNTVOTANTES)
                $('#ABSTENCIONISMO').html(element.ABSTENCIONISMO)

                //para grafica 1
                VAMOS = element.V1;
                UNE = element.V2;

                //para grafica 2
                PROCESADO=element.PMESASPRO.toFixed(2)
                NOPROCESADO=element.PMESASFALT.toFixed(2)
            });

            //primera grafica
            console.log(VAMOS, UNE);
            var vamos = parseInt(VAMOS)
            var une = parseInt(UNE)
            console.log(vamos, une);

            //alert(porcentajeva)
            var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['VAMOS', 'UNE'],
                    datasets: [{
                        label: "votos",
                        data: [vamos, une],
                        backgroundColor: [
                            'rgba(5, 9, 251, 0.835)',
                            'rgba(37, 250, 9, 0.835)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(8, 44, 248, 0.835)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
            //------------------------------------------------

            //segunda grafica
            var oilCanvas = document.getElementById("oilChart");

            Chart.defaults.global.defaultFontFamily = "Lato";
            Chart.defaults.global.defaultFontSize = 18;

            var oilData = {
                labels: [
                    "Procesado",
                    "No procesado"
                ],
                datasets: [
                    {
                        data: [PROCESADO, NOPROCESADO],
                        backgroundColor: [
                            "#63FF84",
                            "#FF6384"                    
                        ]
                    }]
            };

            var pieChart = new Chart(oilCanvas, {
                type: 'pie',
                data: oilData
            });


        }
    );


}

