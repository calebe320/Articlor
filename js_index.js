// script.js

// Función para manejar la elección del usuario
function chooseOption(option) {
    const choiceDiv = document.getElementById("choice");
    
    let message = "";
    
    switch (option) {
        case 'cientifico':
            message = "Has elegido escribir un artículo científico.";
            break;
        case 'dramatico':
            message = "Has elegido escribir un artículo dramático.";
            break;
        case 'periodistico':
            message = "Has elegido escribir un artículo periodístico.";
            break;
        default:
            message = "Por favor, elige una opción válida.";
            break;
    }
    
    // Mostrar el mensaje de la elección del usuario
    choiceDiv.textContent = message;
}
