var socket = io();

//todo esto por la parte del cliente

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function() { //cuando perdemos conexión con el servidor

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
socket.emit('enviarMensaje', { //lo que emite al conectarse
    usuario: 'Miguel',
    mensaje: 'Hola alumnos'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});