const fuentes = ['Arial, sans-serif', 'Georgia, serif', 'Verdana, sans-serif'];

function cambiarFuenteAleatoria() {
    const indice = Math.floor(Math.random() * fuentes.length);
    const fuenteAleatoria = fuentes[indice];
    
    document.getElementById('textoFuente').style.fontFamily = fuenteAleatoria;
}

cambiarFuenteAleatoria();