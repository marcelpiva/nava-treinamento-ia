function generatePagination() {
    // Detectar página atual baseado no nome do arquivo
    const currentPage = parseInt(window.location.pathname.split('/').pop().replace('.html', ''));
    const totalPages = 27;
    
    const navigation = document.querySelector('.carousel-navigation');
    if (!navigation) return;
    
    // Gerar botão anterior
    const prevBtn = navigation.querySelector('a[title="Slide anterior"]');
    if (prevBtn) {
        const prevPage = currentPage - 1;
        prevBtn.href = prevPage < 1 ? '01.html' : `${String(prevPage).padStart(2, '0')}.html`;
    }
    
    // Atualizar contador
    const counter = navigation.querySelector('.slide-counter');
    if (counter) {
        counter.textContent = `${String(currentPage).padStart(2, '0')} / ${String(totalPages).padStart(2, '0')}`;
    }
    
    // Gerar botão próximo
    const nextBtn = navigation.querySelector('a[title="Próximo slide"]');
    if (nextBtn) {
        const nextPage = currentPage + 1;
        nextBtn.href = nextPage > totalPages ? `${String(totalPages).padStart(2, '0')}.html` : `${String(nextPage).padStart(2, '0')}.html`;
    }
    
    // Gerar dots
    const dotsContainer = navigation.querySelector('.dots-container');
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.onclick = () => window.location.href = `${String(i).padStart(2, '0')}.html`;
            dot.title = `Slide ${i}`;
            if (i === currentPage) {
                dot.classList.add('active');
            }
            dotsContainer.appendChild(dot);
        }
    }
}

// Executar quando a página carregar
document.addEventListener('DOMContentLoaded', generatePagination);
