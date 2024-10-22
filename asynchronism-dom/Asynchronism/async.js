document.getElementById('solicitar').addEventListener('click', async function () {
    // URL del endpoint para obtener un solo hecho curioso de gato
    let apiURL = 'https://catfact.ninja/fact';

    try {
        const respuesta = await fetch(apiURL);
        if (!respuesta.ok) {
            throw new Error(`HTTP error! Status: ${respuesta.status}`);
        }
        const data = await respuesta.json();
        document.getElementById('respuesta').innerHTML = `<pre>${data.fact}</pre>`; // Muestra solo el hecho
    } catch (error) {
        document.getElementById('respuesta').innerText = `Error: ${error}`;
    }
});
