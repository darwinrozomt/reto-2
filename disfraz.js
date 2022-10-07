function leerDisfraz() {
    //funcion GET
    $.ajax({
        url: 'https://ge8a64613f3245c-disfraz.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume',
        type: 'GET',
        dataType: 'json',

        success: function (Disfraz) {
            let cs = Disfraz.items; //creacion de la variable cs, para no tener que escribir el nombre largo, items lo que esta dentro de cada linea de Disfraz?
            $("#listaDisfraz").empty();
            for (i = 0; i < cs.length; i++) {
                $("#listaDisfraz").append('ID: ' + cs[i].id +'- Marca: '+  cs[i].brand + "</b> " +'- Model: '+ cs[i].model +'- Categoria: '+ " " + cs[i].category_id + '- Nombre disfraz: '+ " " + cs[i].name); //lenght cantidad de registros
                $("#listaDisfraz").append("    " + "<button onclick='borrarDisfraz(" + cs[i].id + ")'>Borrar</button><br>"); //aca se envia el dato del id a borrarDisfraz

            }
            //success: function(costume){
            //  let cs=costume.items; //creacion de la variable cs, para no tener que escribir el nombre largo, items lo que esta dentro de cada linea de Disfraz?
            //$("#listaDisfraz").empty();
            //for(i=0;i<cs.lenght;i++){//lenght cantidad de registros
            //     $("#listaDisfraz").append("<h2>"+cs[i].name+"</h2> "); //append agregar, + concatenar
            //   $("#listaDisfraz").append(cs[i].email+"<br>"); //salto de linea
            // }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }


    });
}

function guardarDisfraz() {
    let idDisfraz = $("#idDisfraz").val(); //let crea variablese locales, val toma el valor, $ invoca jquery, #llama las variables creadas desde html
    let marca = $("#marcaDisfraz").val();
    let modelo = $("#modeloDisfraz").val();
    let categoria = $("#categoriaDisfraz").val();
    let nombre = $("#nombreDisfraz").val();

    let data = {
        id: idDisfraz,
        brand: marca,
        model: modelo,
        category_id: categoria,
        name: nombre,
    };

    let dataToSend = JSON.stringify(data); //convierte a json, formato json
    // console.log(dataToSend); //imprimir por consola

    $.ajax({
        url: 'https://ge8a64613f3245c-disfraz.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume',
        type: 'POST',
        //dataType: 'json',
        data: dataToSend, //data es el dato que se va a enviar
        contentType: 'application/json', //contenttype tipo de dato que se envia
        success: function (pepito) {
            $("#idDisfraz").val(""); //let crea variablese locales, val toma el valor, $ invoca jquery, #llama las variables creadas desde html, las comillas hacen que los campos en el html queden en blanco
            $("#marcaDisfraz").val("");
            $("#modeloDisfraz").val("");
            $("#categoriaDisfraz").val("");
            $("#nombreDisfraz").val("");
        },
        error: function (xhr, status) {
            //alert('ha sucedido un problema'); se quita la alerta porque no se esta entregando status al realizar la operacion

        },
        complete: function () { // actualiza listado general cuando se envie, modifique o borre
            leerDisfraz();
        }
    });
}
function editarDisfraz() {
    let idDisfraz = $("#idDisfraz").val(); //let crea variablese locales, val toma el valor, $ invoca jquery, #llama las variables creadas desde html
    let marca = $("#marcaDisfraz").val();
    let modelo = $("#modeloDisfraz").val();
    let categoria = $("#categoriaDisfraz").val();
    let nombre = $("#nombreDisfraz").val();

    let data = {
        id: idDisfraz,
        brand: marca,
        model: modelo,
        category_id: categoria,
        name: nombre,
    };

    let dataToSend = JSON.stringify(data); //convierte a json, formato json
    // console.log(dataToSend); //imprimir por consola

    $.ajax({
        url: 'https://ge8a64613f3245c-disfraz.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume',
        type: 'PUT',
        //dataType: 'json',
        data: dataToSend, //data es el dato que se va a enviar
        contentType: 'application/json', //contenttype tipo de dato que se envia
        success: function (pepito) {
            $("#idDisfraz").val(""); //let crea variablese locales, val toma el valor, $ invoca jquery, #llama las variables creadas desde html, las comillas hacen que los campos en el html queden en blanco
            $("#marcaDisfraz").val("");
            $("#modeloDisfraz").val("");
            $("#categoriaDisfraz").val("");
            $("#nombreDisfraz").val("");
        },
        error: function (xhr, status) {
            //alert('ha sucedido un problema'); se quita la alerta porque no se esta entregando status al realizar la operacion

        },
        complete: function () { // actualiza listado general cuando se envie, modifique o borre
            leerDisfraz();
        }
    });
}

function borrarDisfraz(idDisfraz) { //(id Disfraz) esta siendo recibido a la funcion

    let data = {
        id: idDisfraz,
    };

    let dataToSend = JSON.stringify(data); //convierte a json, formato json
    // console.log(dataToSend); //imprimir por consola

    $.ajax({
        url: 'https://ge8a64613f3245c-disfraz.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume',
        type: 'DELETE',
        //dataType: 'json',
        data: dataToSend, //data es el dato que se va a enviar
        contentType: 'application/json', //contenttype tipo de dato que se envia
        success: function (pepito) {
            $("#idDisfraz").val(""); //let crea variablese locales, val toma el valor, $ invoca jquery, #llama las variables creadas desde html, las comillas hacen que los campos en el html queden en blanco
            $("#marcaDisfraz").val("");
            $("#modeloDisfraz").val("");
            $("#categoriaDisfraz").val("");
            $("#nombreDisfraz").val("");
        },
        error: function (xhr, status) {
            //alert('ha sucedido un problema'); se quita la alerta porque no se esta entregando status al realizar la operacion
        },
        complete: function () { // actualiza listado general cuando se envie, modifique o borre
            leerDisfraz();
        }
    });
}