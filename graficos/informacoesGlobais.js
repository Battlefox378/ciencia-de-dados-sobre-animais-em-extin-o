const url = 'https://www.iucnredlist.org';

async function visualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    const especiesConservadas = (dados.total_especies_conservadas / 1e3);
    const totalEspecies = (dados.total_especies / 1e3);
    const porcentagemConservadas = ((especiesConservadas / totalEspecies) * 100).toFixed(2);

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `Você sabia que o mundo possui <span>${totalEspecies} mil</span> espécies e que aproximadamente <span>${especiesConservadas} mil</span> estão sendo conservadas? Isso significa que cerca de <span>${porcentagemConservadas}%</span> das espécies estão sob algum tipo de proteção.`;

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

visualizarInformacoesGlobais();
