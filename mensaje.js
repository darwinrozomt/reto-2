function leerMensaje() {
    //funcion GET
    $.ajax({
        url: 'https://ge8a64613f3245c-disfraz.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'GET',
        dataType: 'json',

        success: function (mensajes) {
            let cs = mensajes.items; //creacion de la variable cs, para no tener que escribir el mensaje largo, items lo que esta dentro de cada linea de clientes?
            $("#listaMensajes").empty();
            for (i = 0; i < cs.length; i++) {
                $("#listaMensajes").append('ID: ' + cs[i].id + " <em>" +'- Mensaje: ' +" </em>" + cs[i].messagetext); //lenght cantidad de registros
                $("#listaMensajes").append("    " + "<button onclick='borrarMensaje(" + cs[i].id + ")'>Borrar</button><br>"); //aca se envia el dato del id a borrarCliente

            }

 },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }


    });
}

function guardarMensaje() {
    let idMensaje = $("#idMensaje").val(); //let crea variablese locales, val toma el valor, $ invoca jquery, #llama las variables creadas desde html
    let mensaje = $("#textoMensaje").val();
    
    let data = {
        id: idMensaje,
        messagetext: mensaje,
        
    };

    let dataToSend = JSON.stringify(data); //convierte a json, formato json
    console.log(dataToSend); //imprimir por consola

    $.ajax({
        url: 'https://ge8a64613f3245c-disfraz.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'POST',
        //dataType: 'json',
        data: dataToSend, //data es el dato que se va a enviar
        contentType: 'application/json', //contenttype tipo de dato que se envia
        success: function (pepito) {
            $("#idMensaje").val(""); //let crea variablese locales, val toma el valor, $ invoca jquery, #llama las variables creadas desde html, las comillas hacen que los campos en el html queden en blanco
            $("#textoMensaje").val("");
           
        },
        error: function (xhr, status) {
            //alert('ha sucedido un problema'); se quita la alerta porque no se esta entregando status al realizar la operacion

        },
        complete: function () { // actualiza listado general cuando se envie, modifique o borre
            leerMensaje();
        }
    });
}
function editarMensaje() {
    let idMensaje = $("#idMensaje").val(); //let crea variablese locales, val toma el valor, $ invoca jquery, #llama las variables creadas desde html
    let mensaje = $("#textoMensaje").val();
   
    let data = {
        id: idMensaje,
        messagetext: mensaje,
       
    };

    let dataToSend = JSON.stringify(data); //convierte a json, formato json
    // console.log(dataToSend); //imprimir por consola

    $.ajax({
        url: 'https://ge8a64613f3245c-disfraz.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'PUT',
        //dataType: 'json',
        data: dataToSend, //data es el dato que se va a enviar
        contentType: 'application/json', //contenttype tipo de dato que se envia
        success: function (pepito) {
            $("#idMensaje").val(""); //let crea variablese locales, val toma el valor, $ invoca jquery, #llama las variables creadas desde html, las comillas hacen que los campos en el html queden en blanco
            $("#textoMensaje").val("");
          
        },
        error: function (xhr, status) {
            //alert('ha sucedido un problema'); se quita la alerta porque no se esta entregando status al realizar la operacion
        },
        complete: function () { // actualiza listado general cuando se envie, modifique o borre
            leerMensaje();
        }
    });
}

function borrarMensaje(idMensaje) { //(id cliente) esta siendo recibido a la funcion

    let data = {
        id: idMensaje,
    };

    let dataToSend = JSON.stringify(data); //convierte a json, formato json
    // console.log(dataToSend); //imprimir por consola

    $.ajax({
        url: 'https://ge8a64613f3245c-disfraz.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'DELETE',
        //dataType: 'json',
        data: dataToSend, //data es el dato que se va a enviar
        contentType: 'application/json', //contenttype tipo de dato que se envia
        success: function (pepito) {
            $("#idMensaje").val(""); //let crea variablese locales, val toma el valor, $ invoca jquery, #llama las variables creadas desde html, las comillas hacen que los campos en el html queden en blanco
            $("#textoMensaje").val("");
           
        },
        error: function (xhr, status) {
            //alert('ha sucedido un problema'); se quita la alerta porque no se esta entregando status al realizar la operacion
        },
        complete: function () { // actualiza listado general cuando se envie, modifique o borre
            leerMensaje();
        }
    });
}
