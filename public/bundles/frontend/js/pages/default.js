var Default = (function () {
    var urlBackend = ''
    var initForm = function () {
        $("#form-login").validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                }
            },
            messages: {
                email: {
                    required: 'Este campo es obligatorio',
                    email: 'El email debe ser válido'
                },
                password: {
                    required: 'Este campo es obligatorio',
                }
            }
        });

        $("#invertirButton").on("click", function (e) {
            InvertirCadena();
        });
        $("#filtrarButton").on("click", function (e) {
            FiltrarPares();
        });
        $("#loginButton").on("click", function (e) {
            GuardarUsuario();
        });

        document.getElementById('myButton').addEventListener('click', function () {
            toastr.success('Hello World from button Listener', 'Success');
        });

        $("#peticionButton").on("click", function (e) {
            datosApi();
        });
        $("#devolverUsuarioButton").on("click", function (e) {
            DevolverUsuario();
        });

    };

    var FiltrarPares = function() {

        $array_numbers = $('#numeros').val().split(",");
        $result = [];
        for (var i = 0; i < $array_numbers.length; i++) {
            var number = $array_numbers[i];

            if (number % 2 === 0) {
                $result.push(number); // agrega number al arreglo result
            }
        }

        if($result.length > 0){
            $('#numerospares').val($result);
        } else {
            toastr.error('Cadena Invalida', 'Error');
        }
    }

    var InvertirCadena = function() {
        $('#numerospares').val($('#numeros').val().split("").reverse().join(""));
    }

    //init acciones
    var GuardarUsuario = function () {
        localStorage.setItem('test_email', $('#email').val());
    };

    //init acciones
    var DevolverUsuario = function () {
        $('#emaillocalstore').val(localStorage.getItem('test_email'));
    };

    var datosApi = function () {
        var url_backend = $('#form-result').data('urlbackend');

        fetch( url_backend + "devolverCantidadProduct", {
            method: 'GET',
            // headers: {
            //     'Content-Type': 'application/x-www-form-urlencoded',
            //     'My-Header': 'Bearer ' + currentUser.token
            // },
            // body: 'prestamo_emergencia_id=' + prestamo_emergencia_id
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                if (response.success) {
                    $('#peticion').val(response.numero)
                } else {
                    toastr.error(response.error, "Error !!!");
                }
            })
            .catch(function(err) {
                toastr.error("Ha ocurrido un error interno, por favor intente de nuevo", "Error !!!");
            });
    };

    return {
        //main function to initiate the module
        init: function () {
            initForm();
        },
    };
})();
