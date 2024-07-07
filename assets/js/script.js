document.addEventListener('DOMContentLoaded', function(){
    function addListener(selector, event, handler) {
        const element = document.getElementById(selector);
        if (element) {
            element.addEventListener(event, handler);
        } 
    }

    addListener('cardButton', "click", function(){
        window.location.href = '/cards.html';
    });

    addListener('home', "click", function(){
        window.location.href = '/index.html';
    });

    addListener('contato', "click", function(){
        window.location.href = 'contato.html';
    });

    const texto = document.getElementById('cabecalhoPrincipal');

    if (texto) {
        texto.onmouseover = function() {
            texto.style.left = "50px";
            texto.style.color = "#50C878";
        }

        texto.onmouseout = function(){
            texto.style.left = "0px";
            texto.style.color = "#426b1f";
        }
    } 
});