// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el primer 'div' que tiene la clase 'ng-star-inserted'
    let button = document.querySelector('div.ng-star-inserted');
    
    // Verifica si se encontró el elemento 'button'
    if (button) {
        // Cambia el contenido HTML interno del botón
        button.innerHTML = '<blz-icon aria-hidden="true" variant="small" class="meka-spacing meka-spacing--50-margin__right"></blz-icon> Manipulado';
    }
});
