// Array para almacenar los nombres de los amigos
const amigos = [];

/**
 * Función para agregar un amigo
 */
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre); // Agregar el nuevo amigo al array
    agregarAmigoALista(nombre); // Añadir el nuevo amigo al DOM

    input.value = ''; // Limpiar el campo de entrada
}

/**
 * Función para agregar un amigo al DOM como un nuevo <li>
 */
function agregarAmigoALista(nombre) {
    const lista = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nombre; // Establecer el texto del <li>
    lista.appendChild(li); // Agregar el <li> a la lista existente
}

/**
 * Función para sortear un único ganador
 */
function sortearAmigo() {
    if (amigos.length < 1) {
        alert('Debe haber al menos 1 amigo para realizar el sorteo.');
        return;
    }

    // Elegir un ganador al azar
    const ganador = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el ganador en la lista de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados previos

    const li = document.createElement('li');
    li.textContent = `El ganador es: ${ganador}`;
    resultado.appendChild(li);
}
