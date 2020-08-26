$('.owl-carousel').owlCarousel({
    loop: true,
    // faz o efeito de loop infinito
    margin: 10,
    nav: true,
    // botao de nav/setas
    responsive: {
        // adpatacao da tela
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        } // esses numeros 0, 600, 1000 sao px
        // e os numeros abaixo sao os itens que cabem neles
    }
})