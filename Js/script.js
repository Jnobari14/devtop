document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       MENU MOBILE (HAMBÚRGUER)
       ========================================================================== */
    const btnMenu = document.getElementById('btn-menu');
    const navMenu = document.getElementById('nav-menu');
    const iconMenu = btnMenu.querySelector('i');
    

    // Alterna a classe ativa do menu e troca os ícones
    btnMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            iconMenu.classList.remove('fa-bars');
            iconMenu.classList.add('fa-xmark');
        } else {
            iconMenu.classList.remove('fa-xmark');
            iconMenu.classList.add('fa-bars');
        }
    });

    // Fecha o menu automaticamente ao clicar em um link interno
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            iconMenu.classList.remove('fa-xmark');
            iconMenu.classList.add('fa-bars');
        });
    });



        const portfolio = document.getElementById('port-folio');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            iconMenu.classList.remove('fa-xmark');
            iconMenu.classList.add('fa-bars');
            // Verifica se o link clicado é o de portfólio e, se sim, rola para a seção de portfólio
            if (link.getAttribute('href') === '#portfolio') {
                portfolio.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });


    /* ==========================================================================
       MODAL DE BUSCA/CAPTURA
       ========================================================================== */
    const heroSearch = document.getElementById('hero-search');
    const searchModal = document.getElementById('search-modal');
    const closeModal = document.getElementById('close-modal');

    // Abre o modal após a submissão do formulário de busca
    heroSearch.addEventListener('submit', (e) => {
        e.preventDefault(); // Previne o reload da página
        searchModal.classList.add('active');
        heroSearch.reset(); // Limpa o campo de entrada
    });

    // Fecha o modal ao clicar no botão 'X'
    closeModal.addEventListener('click', () => {
        searchModal.classList.remove('active');
    });

    // Fecha o modal se o usuário clicar em qualquer área fora do conteúdo dele
    globalThis.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
        }
    });
});