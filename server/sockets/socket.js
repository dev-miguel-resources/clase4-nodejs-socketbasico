const { io } = require('../server');


//lado del servidor

io.on('connection', (client) => { //con esto ya tengo info de una connection

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    //on = escuchar información o sucesos
    //emit = enviar información

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => { //data que recibo al enviar un mensaje

        console.log(data);

        client.broadcast.emit('enviarMensaje', data); //fluye el mensaje por el servidor a todos los usuarios


        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN!'
        //     });

        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!!!!!!'
        //     });
        // }



    });

});