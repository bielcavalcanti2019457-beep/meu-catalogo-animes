// 1. Pegamos os elementos da barra de pesquisa e os cards do site
const searchInput = document.getElementById('search-input');
const animeCards = document.querySelectorAll('.anime-card');
const imagesElements = document.querySelectorAll('.anime-img');

// 2. LOGICA NOVA: Percorre as imagens e injeta os gráficos do arquivo 'imagens.js'
imagesElements.forEach(img => {
    const animeKey = img.getAttribute('data-anime');
    if (bancoImagens[animeKey]) {
        img.src = bancoImagens[animeKey];
    }
});

// 3. Sistema de filtro da barra de buscas em tempo real
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    animeCards.forEach(function(card) {
        const animeTitle = card.querySelector('h2').textContent.toLowerCase();

        if (animeTitle.includes(searchTerm)) {
            card.style.display = 'flex'; // Mantém o card alinhado com o CSS Flexbox
        } else {
            card.style.display = 'none';  // Esconde o card
        }
    });
});
