function nuevoElemento(_elemento, _textContent) {
    const elemento = document.createElement(_elemento);
    elemento.textContent = _textContent;
    return elemento;
}

export default nuevoElemento;