import { getCSS, tickConfig } from "./common.js";

async function quantidadeEspeciesPorHabitat() {
    const url = 'https://www.hemmersbach.com/rhino-force?gad_source=1&gclid=Cj0KCQjwjNS3BhChARIsAOxBM6qZ2U1309cIosJ__2qaQOcrCnFalOvGIloPOuOeSsDKK_10LZDbNmAaAvHmEALw_wcB'; 
    const res = await fetch(url);
    const dados = await res.json();
    const nomeDosHabitats = Object.keys(dados);
    const quantidadeDeEspecies = Object.values(dados);

    const data = [
        {
            x: nomeDosHabitats,
            y: quantidadeDeEspecies,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Espécies por Habitat',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Tipo de Habitat',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Número de Espécies',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

quantidadeEspeciesPorHabitat();
