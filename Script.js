const formulario = document.getElementById("registroForm");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;

    mensaje.innerText = `El nombre de la persona es ${nombre}, su apellido es ${apellido} y su edad es ${edad} años`;
});
