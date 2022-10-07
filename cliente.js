

function leerClientes() {
    //funcion GET
    $.ajax({
        url: 'https://ge8a64613f3245c-disfraz.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',
        dataType: 'json',

        success: function (clientes) {
            let cs = clientes.items; //creacion de la variable cs, para no tener que escribir el nombre largo, items lo que esta dentro de cada linea de clientes?
            $("#listaClientes").empty();
            for (i = 0; i < cs.length; i++) {
                $("#listaClientes").append('ID: ' + cs[i].id + " <b>" +'- Nombre: '+  cs[i].name + "</b> " +'- Email: '+ cs[i].email +'- Edad: '+ " " + cs[i].age); //lenght cantidad de registros
                $("#listaClientes").append("    " + "<button onclick='borrarCliente(" + cs[i].id + ")'>Borrar</button><br>"); //aca se envia el dato del id a borrarCliente

            }

            //success: function(client){
            //  let cs=client.items; //creacion de la variable cs, para no tener que escribir el nombre largo, items lo que esta dentro de cada linea de clientes?
            //$("#listaClientes").empty();
            //for(i=0;i<cs.lenght;i++){//lenght cantidad de registros
            //     $("#listaClientes").append("<h2>"+cs[i].name+"</h2> "); //append agregar, + concatenar
            //   $("#listaClientes").append(cs[i].email+"<br>"); //salto de linea
            // }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }


    });
}

function guardarCliente() {
    let idCliente = $("#idCliente").val(); //let crea variablese locales, val toma el valor, $ invoca jquery, #llama las variables creadas desde html
    let nombre = $("#nombreCliente").val();
    let mail = $("#mailCliente").val();
    let edad = $("#edadCliente").val();

    let data = {
        id: idCliente,
        name: nombre,
        email: mail,
        age: edad,
    };

    let dataToSend = JSON.stringify(data); //convierte a json, formato json
    // console.log(dataToSend); //imprimir por consola

    $.ajax({
        url: 'https://ge8a64613f3245c-disfraz.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'POST',
        //dataType: 'json',
        data: dataToSend, //data es el dato que se va a enviar
        contentType: 'application/json', //contenttype tipo de dato que se envia
        success: function (pepito) {
            $("#idCliente").val(""); //let crea variablese locales, val toma el valor, $ invoca jquery, #llama las variables creadas desde html, las comillas hacen que los campos en el html queden en blanco
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
        },
        error: function (xhr, status) {
            //alert('ha sucedido un problema'); se quita la alerta porque no se esta entregando status al realizar la operacion

        },
        complete: function () { // actualiza listado general cuando se envie, modifique o borre
            leerClientes();
        }
    });
}
function editarCliente() {
    let idCliente = $("#idCliente").val(); //let crea variablese locales, val toma el valor, $ invoca jquery, #llama las variables creadas desde html
    let nombre = $("#nombreCliente").val();
    let mail = $("#mailCliente").val();
    let edad = $("#edadCliente").val();

    let data = {
        id: idCliente,
        name: nombre,
        email: mail,
        age: edad,
    };

    let dataToSend = JSON.stringify(data); //convierte a json, formato json
    // console.log(dataToSend); //imprimir por consola

    $.ajax({
        url: 'https://ge8a64613f3245c-disfraz.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'PUT',
        //dataType: 'json',
        data: dataToSend, //data es el dato que se va a enviar
        contentType: 'application/json', //contenttype tipo de dato que se envia
        success: function (pepito) {
            $("#idCliente").val(""); //let crea variablese locales, val toma el valor, $ invoca jquery, #llama las variables creadas desde html, las comillas hacen que los campos en el html queden en blanco
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
        },
        error: function (xhr, status) {
            //alert('ha sucedido un problema'); se quita la alerta porque no se esta entregando status al realizar la operacion
        },
        complete: function () { // actualiza listado general cuando se envie, modifique o borre
            leerClientes();
        }
    });
}

function borrarCliente(idCliente) { //(id cliente) esta siendo recibido a la funcion

    let data = {
        id: idCliente,
    };

    let dataToSend = JSON.stringify(data); //convierte a json, formato json
    // console.log(dataToSend); //imprimir por consola

    $.ajax({
        url: 'https://ge8a64613f3245c-disfraz.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'DELETE',
        //dataType: 'json',
        data: dataToSend, //data es el dato que se va a enviar
        contentType: 'application/json', //contenttype tipo de dato que se envia
        success: function (pepito) {
            $("#idCliente").val(""); //let crea variablese locales, val toma el valor, $ invoca jquery, #llama las variables creadas desde html, las comillas hacen que los campos en el html queden en blanco
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
        },
        error: function (xhr, status) {
            //alert('ha sucedido un problema'); se quita la alerta porque no se esta entregando status al realizar la operacion
        },
        complete: function () { // actualiza listado general cuando se envie, modifique o borre
            leerClientes();
        }
    });
}