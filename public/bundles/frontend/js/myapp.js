/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var MyApp = function () {

    var initDatePickers = function () {
        if (!jQuery().datepicker) {
            return;
        }

        $.fn.datepicker.dates.es = {
            days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
            daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
            daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"],
            months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            today: "Hoy",
            clear: "Borrar",
            weekStart: 1,
            format: "dd/mm/yyyy"
        }

        if (!jQuery().datetimepicker) {
            return;
        }

        $.fn.datetimepicker.dates['es'] = {
            days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
            daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
            daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"],
            months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            today: "Hoy",
            suffix: [],
            meridiem: []
        };

        // input group layout
        $('.date-picker').datepicker({
            format: 'dd/mm/yyyy',
            language: 'es',
            autoclose: true,
            todayHighlight: true,
            orientation: "bottom left",
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            }
        });

        if ($("#lenguaje").data("lenguaje") == 'es') {
            $('.date-time-picker').datetimepicker({
                format: 'dd/mm/yyyy hh:ii',
                language: 'es',
                todayHighlight: true,
                autoclose: true,
                pickerPosition: 'bottom-left',
            });
        } else {
            $('.date-time-picker').datetimepicker({
                format: 'dd/mm/yyyy hh:ii',
                language: 'en',
                todayHighlight: true,
                autoclose: true,
                pickerPosition: 'bottom-left',
            });
        }
    }

    var initInputMasks = function () {
        $('.input-mask-date').inputmask("dd/mm/yyyy", {
            "placeholder": "dd/mm/yyyy",
            autoUnmask: true
        });
    }

    //Sumar días a una fecha
    var sumarDiasAFecha = function (fecha, days) {

        fechaVencimiento = "";
        if (fecha != "") {
            var fecha_registro = fecha;
            var fecha_registro_array = fecha_registro.split("/");
            var year = fecha_registro_array[2];
            var mouth = fecha_registro_array[1] - 1;
            var day = fecha_registro_array[0];

            var fechaVencimiento = new Date(year, mouth, day);

            //Obtenemos los milisegundos desde media noche del 1/1/1970
            var tiempo = fechaVencimiento.getTime();
            //Calculamos los milisegundos sobre la fecha que hay que sumar o restar...
            var milisegundos = parseInt(days * 24 * 60 * 60 * 1000);
            //Modificamos la fecha actual
            fechaVencimiento.setTime(tiempo + milisegundos);
        }


        return fechaVencimiento;
    };
    //Restar días a una fecha
    var restarDiasAFecha = function (fecha, days) {

        fechaVencimiento = "";
        if (fecha != "") {
            var fecha_registro = fecha;
            var fecha_registro_array = fecha_registro.split("/");
            var year = fecha_registro_array[2];
            var mouth = fecha_registro_array[1] - 1;
            var day = fecha_registro_array[0];

            var fechaVencimiento = new Date(year, mouth, day);

            //Obtenemos los milisegundos desde media noche del 1/1/1970
            var tiempo = fechaVencimiento.getTime();
            //Calculamos los milisegundos sobre la fecha que hay que sumar o restar...
            var milisegundos = parseInt(days * 24 * 60 * 60 * 1000);
            //Modificamos la fecha actual
            fechaVencimiento.setTime(tiempo - milisegundos);
        }


        return fechaVencimiento;
    };
    //Sumar meses a una fecha
    var sumarMesesAFecha = function (fecha, meses) {
        fechaVencimiento = "";
        if (fecha != "") {
            var fecha_registro = fecha;
            var fecha_registro_array = fecha_registro.split("/");
            var year = fecha_registro_array[2];
            var mouth = fecha_registro_array[1] - 1;
            var day = fecha_registro_array[0];

            var fechaVencimiento = new Date(year, mouth, day);

            var mouths = parseInt(mouth) + parseInt(meses);
            fechaVencimiento.setMonth(mouths);
        }

        return fechaVencimiento;
    };

    // Sumar minutos a hora
    var sumarMinutosAHora = function (hora_min, minutos) {
        // separa hora y min
        var hora_min_array = hora_min.split(':');
        var hora = parseInt(hora_min_array[0]);
        var min = parseInt(hora_min_array[1]);
        // establecer hora inicial
        var dt = new Date();
        dt.setHours(hora);
        dt.setMinutes(min);
        // sumar la duracion del partido
        dt.setMinutes(dt.getMinutes() + minutos);

        var minutos_text = dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes();

        var resultado = dt.getHours() + ":" + minutos_text;
        return resultado
    }
    // Restar minutos a hora
    var restarMinutosAHora = function (hora_min, minutos) {
        // separa hora y min
        var hora_min_array = hora_min.split(':');
        var hora = parseInt(hora_min_array[0]);
        var min = parseInt(hora_min_array[1]);
        // establecer hora inicial
        var dt = new Date();
        dt.setHours(hora);
        dt.setMinutes(min);
        // sumar la duracion del partido
        dt.setMinutes(dt.getMinutes() - minutos);

        var minutos_text = dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes();

        var resultado = dt.getHours() + ":" + minutos_text;
        return resultado
    }

    var toastrConfig = function () {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-top-center';
    }
    var showAlert = function (msg) {
        toastr.error(msg, error_lang);
    };
    var showMessage = function (msg) {
        toastr.success(msg, exito_lang);
    };

    var block = function (target, message = 'Por favor espere...') {
        KTApp.block(target,
            {
                overlayColor: '#000000',
                state: 'success',
                type: 'v2',
                message: message
            }
        );
    }

    var handlerNewValidateType = function () {
        $(document).on('keypress', ".just-number", function (e) {
            var keynum = window.event ? window.event.keyCode : e.which;

            if ((keynum == 8) || (keynum == 0))
                return true;

            return /\d/.test(String.fromCharCode(keynum));
        });

        $(document).on('keypress', ".just-letters", function (e) {
            var keynum = window.event ? window.event.keyCode : e.which;

            if ((keynum == 8) || (keynum == 0))
                return true;

            return /^[a-zA-ZñÑáúíóéÁÚÍÓÉ\s]*$/.test(String.fromCharCode(keynum));
        });

        $(document).on('keypress', ".just-rut", function (e) {
            var keynum = window.event ? window.event.keyCode : e.which;

            if ((keynum == 8) || (keynum == 0))
                return true;

            return /^[0-9k\-]*$/.test(String.fromCharCode(keynum));
        });

    };

    var validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    var handlerSummernote = function () {
        if (!jQuery().summernote) {
            return;
        }
        $.extend($.summernote.lang, {
            'es-ES': {
                font: {
                    name: 'Fuente',
                    bold: 'Negrita',
                    italic: 'Cursiva',
                    underline: 'Subrayado',
                    superscript: 'Superíndice',
                    subscript: 'Subíndice',
                    strikethrough: 'Tachado',
                    clear: 'Quitar estilo de fuente',
                    height: 'Altura de línea',
                    size: 'Tamaño de la fuente'
                },
                image: {
                    image: 'Imagen',
                    insert: 'Insertar imagen',
                    resizeFull: 'Redimensionar a tamaño completo',
                    resizeHalf: 'Redimensionar a la mitad',
                    resizeQuarter: 'Redimensionar a un cuarto',
                    floatLeft: 'Flotar a la izquierda',
                    floatRight: 'Flotar a la derecha',
                    floatNone: 'No flotar',
                    dragImageHere: 'Arrastrar una imagen aquí',
                    selectFromFiles: 'Seleccionar desde los archivos',
                    url: 'URL de la imagen'
                },
                link: {
                    link: 'Link',
                    insert: 'Insertar link',
                    unlink: 'Quitar link',
                    edit: 'Editar',
                    textToDisplay: 'Texto para mostrar',
                    url: '¿Hacia que URL lleva el link?',
                    openInNewWindow: 'Abrir en una nueva ventana'
                },
                video: {
                    video: 'Video',
                    videoLink: 'Link del video',
                    insert: 'Insertar video',
                    url: '¿URL del video?',
                    providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion, o Youku)'
                },
                table: {
                    table: 'Tabla'
                },
                hr: {
                    insert: 'Insertar línea horizontal'
                },
                style: {
                    style: 'Estilo',
                    normal: 'Normal',
                    blockquote: 'Cita',
                    pre: 'Código',
                    h1: 'Título 1',
                    h2: 'Título 2',
                    h3: 'Título 3',
                    h4: 'Título 4',
                    h5: 'Título 5',
                    h6: 'Título 6'
                },
                lists: {
                    unordered: 'Lista desordenada',
                    ordered: 'Lista ordenada'
                },
                options: {
                    help: 'Ayuda',
                    fullscreen: 'Pantalla completa',
                    codeview: 'Ver código fuente'
                },
                paragraph: {
                    paragraph: 'Párrafo',
                    outdent: 'Menos tabulación',
                    indent: 'Más tabulación',
                    left: 'Alinear a la izquierda',
                    center: 'Alinear al centro',
                    right: 'Alinear a la derecha',
                    justify: 'Justificar'
                },
                color: {
                    recent: 'Último color',
                    more: 'Más colores',
                    background: 'Color de fondo',
                    foreground: 'Color de fuente',
                    transparent: 'Transparente',
                    setTransparent: 'Establecer transparente',
                    reset: 'Restaurar',
                    resetToDefault: 'Restaurar por defecto'
                },
                shortcut: {
                    shortcuts: 'Atajos de teclado',
                    close: 'Cerrar',
                    textFormatting: 'Formato de texto',
                    action: 'Acción',
                    paragraphFormatting: 'Formato de párrafo',
                    documentStyle: 'Estilo de documento'
                },
                history: {
                    undo: 'Deshacer',
                    redo: 'Rehacer'
                }
            }
        });
        if ($("#lenguaje").data("lenguaje") == 'es') {
            $('.summernote').summernote({
                height: 200,
                lang: 'es-ES'
            });
        } else {
            $('.summernote').summernote({
                height: 200,
                lang: 'en-EN'
            });
        }
    }
    var initSummernoteModal = function ($element) {
        if (!jQuery().summernote) {
            return;
        }
        $.extend($.summernote.lang, {
            'es-ES': {
                font: {
                    name: 'Fuente',
                    bold: 'Negrita',
                    italic: 'Cursiva',
                    underline: 'Subrayado',
                    superscript: 'Superíndice',
                    subscript: 'Subíndice',
                    strikethrough: 'Tachado',
                    clear: 'Quitar estilo de fuente',
                    height: 'Altura de línea',
                    size: 'Tamaño de la fuente'
                },
                image: {
                    image: 'Imagen',
                    insert: 'Insertar imagen',
                    resizeFull: 'Redimensionar a tamaño completo',
                    resizeHalf: 'Redimensionar a la mitad',
                    resizeQuarter: 'Redimensionar a un cuarto',
                    floatLeft: 'Flotar a la izquierda',
                    floatRight: 'Flotar a la derecha',
                    floatNone: 'No flotar',
                    dragImageHere: 'Arrastrar una imagen aquí',
                    selectFromFiles: 'Seleccionar desde los archivos',
                    url: 'URL de la imagen'
                },
                link: {
                    link: 'Link',
                    insert: 'Insertar link',
                    unlink: 'Quitar link',
                    edit: 'Editar',
                    textToDisplay: 'Texto para mostrar',
                    url: '¿Hacia que URL lleva el link?',
                    openInNewWindow: 'Abrir en una nueva ventana'
                },
                video: {
                    video: 'Video',
                    videoLink: 'Link del video',
                    insert: 'Insertar video',
                    url: '¿URL del video?',
                    providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion, o Youku)'
                },
                table: {
                    table: 'Tabla'
                },
                hr: {
                    insert: 'Insertar línea horizontal'
                },
                style: {
                    style: 'Estilo',
                    normal: 'Normal',
                    blockquote: 'Cita',
                    pre: 'Código',
                    h1: 'Título 1',
                    h2: 'Título 2',
                    h3: 'Título 3',
                    h4: 'Título 4',
                    h5: 'Título 5',
                    h6: 'Título 6'
                },
                lists: {
                    unordered: 'Lista desordenada',
                    ordered: 'Lista ordenada'
                },
                options: {
                    help: 'Ayuda',
                    fullscreen: 'Pantalla completa',
                    codeview: 'Ver código fuente'
                },
                paragraph: {
                    paragraph: 'Párrafo',
                    outdent: 'Menos tabulación',
                    indent: 'Más tabulación',
                    left: 'Alinear a la izquierda',
                    center: 'Alinear al centro',
                    right: 'Alinear a la derecha',
                    justify: 'Justificar'
                },
                color: {
                    recent: 'Último color',
                    more: 'Más colores',
                    background: 'Color de fondo',
                    foreground: 'Color de fuente',
                    transparent: 'Transparente',
                    setTransparent: 'Establecer transparente',
                    reset: 'Restaurar',
                    resetToDefault: 'Restaurar por defecto'
                },
                shortcut: {
                    shortcuts: 'Atajos de teclado',
                    close: 'Cerrar',
                    textFormatting: 'Formato de texto',
                    action: 'Acción',
                    paragraphFormatting: 'Formato de párrafo',
                    documentStyle: 'Estilo de documento'
                },
                history: {
                    undo: 'Deshacer',
                    redo: 'Rehacer'
                }
            }
        });
        if ($("#lenguaje").data("lenguaje") == 'es') {
            $element.summernote({
                height: 200,
                lang: 'es-ES',
                dialogsInBody: true
            });
        } else {
            $element.summernote({
                height: 200,
                lang: 'en-EN',
                dialogsInBody: true
            });
        }
    }

    var formatearNumero = function (number, decimals, dec_point, thousands_sep) {
        // Set the default values here, instead so we can use them in the replace below.
        thousands_sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep;
        dec_point = (typeof dec_point === 'undefined') ? '.' : dec_point;
        decimals = !isFinite(+decimals) ? 0 : Math.abs(decimals);

        // Work out the unicode representation for the decimal place and thousand sep.
        var u_dec = ('\\u' + ('0000' + (dec_point.charCodeAt(0).toString(16))).slice(-4));
        var u_sep = ('\\u' + ('0000' + (thousands_sep.charCodeAt(0).toString(16))).slice(-4));

        // Fix the number, so that it's an actual number.
        number = (number + '')
            .replace('\.', dec_point) // because the number if passed in as a float (having . as decimal point per definition) we need to replace this with the passed in decimal point character
            .replace(new RegExp(u_sep, 'g'), '')
            .replace(new RegExp(u_dec, 'g'), '.')
            .replace(new RegExp('[^0-9+\-Ee.]', 'g'), '');

        var n = !isFinite(+number) ? 0 : +number,
            s = '',
            toFixedFix = function (n, decimals) {
                var k = Math.pow(10, decimals);
                return '' + Math.round(n * k) / k;
            };

        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (decimals ? toFixedFix(n, decimals) : '' + Math.round(n)).split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, thousands_sep);
        }
        if ((s[1] || '').length < decimals) {
            s[1] = s[1] || '';
            s[1] += new Array(decimals - s[1].length + 1).join('0');
        }
        return s.join(dec_point);
    }

    var handlerFormatNumber = function () {
        if (!jQuery().number) {
            return;
        }
        $('.form-control-number').number(true, 0, ',', '.');
    }

    var formatearFechaCalendario = function (fecha) {

        var result = "";
        if (fecha != "") {

            var array = fecha.split(" ");
            fecha = array[0];
            var hora_min = array[1];

            var fecha_array = fecha.split("/");
            var year = fecha_array[2];
            var mes = fecha_array[1];
            var day = fecha_array[0];

            result = year + "-" + mes + "-" + day + " " + hora_min;
        }


        return result;
    };

    var formatearFecha = function (fecha, format) {
        var result = fecha.format(format);
        return result;
    };
    // convertir a fecha
    var convertirStringAFecha = function (fecha, formato) {

        var objectDate = new Date();

        if (formato == 'd/m/Y') {
            var fecha_array = fecha.split("/");

            var year = fecha_array[2];
            var mouth = fecha_array[1] - 1;
            var day = fecha_array[0];

            objectDate = new Date(year, mouth, day);
        }
        if (formato == 'Y-m-d') {
            var fecha_array = fecha.split("-");

            var year = fecha_array[0];
            var mouth = fecha_array[1] - 1;
            var day = fecha_array[2];

            objectDate = new Date(year, mouth, day);
        }


        return objectDate;
    };

    var convertirTimeAMinutos = function (time) {
        var minutos = 0;

        if (time != "") {
            var hora_min = time.split(":");

            var hora = parseInt(hora_min[0]);
            var min = parseInt(hora_min[1]);

            minutos = hora * 60 + min;
        }

        return minutos;
    };

    var initTooltips = function () {
        $(".menu-tooltip").tooltip();
    }

    var showErrorMessageValidate = function (element, msg) {
        element.tooltip("dispose") // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
            .data("title", msg)
            .addClass("has-error")
            .tooltip({
                placement: 'bottom'
            }); // Create a new tooltip based on the error messsage we just set in the title

        element.addClass('is-invalid');

        element.closest('.form-group')
            .removeClass('has-success').addClass('has-error');
    };

    var showErrorMessageValidateInput = function (element, msg) {
        element.tooltip("dispose") // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
            .data("title", msg)
            .addClass("has-error")
            .tooltip({
                placement: 'bottom'
            }); // Create a new tooltip based on the error messsage we just set in the title

        element.addClass('is-invalid');

        element.closest('.form-group')
            .removeClass('has-success').addClass('has-error');
    };

    var showErrorMessageValidateSelect = function (element, msg) {
        element.tooltip("dispose") // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
            .data("title", msg)
            .addClass("invalid-select")
            .tooltip({
                placement: 'bottom'
            }); // Create a new tooltip based on the error messsage we just set in the title

        element.closest('.form-group')
            .removeClass('has-success').addClass('has-error');
    };

    var resetErrorMessageValidateSelect = function (element) {
        element.tooltip("dispose") // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
            .removeData()
            .removeClass("invalid-select");

        element.closest('.form-group')
            .addClass('has-success').removeClass('has-error');
    };

    var resetErrorMessageValidate = function (element) {
        element.tooltip("dispose") // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
            .removeData()
            .removeClass("has-error");

        element.removeClass('is-invalid');

        element.closest('.form-group')
            .addClass('has-success').removeClass('has-error');
    };

    // decode address recibe un address_components de google y devuelve un object con region y comuna
    var decodeGoogleAddress = function (address_components) {
        var address = {
            pais: '',
            region: '',
            provincia: '',
            comuna: '',
            calle: '',
            numero: ''
        };

        for (const component of address_components) {
            const componentType = component.types[0];

            switch (componentType) {
                case "street_number": {
                    address.numero = component.short_name;
                    break;
                }
                case "route": {
                    address.calle += component.short_name;
                    break;
                }
                case "administrative_area_level_3": {
                    address.comuna = component.short_name;
                    break;
                }
                case "administrative_area_level_2": {
                    address.provincia = component.short_name;
                    break;
                }
                case "administrative_area_level_1": {
                    address.region = component.short_name;
                    break;
                }
                case "country":
                    address.pais = component.long_name;
                    break;
            }
        }

        return address;
    };

    // init accordion
    var initAccordion = function (class_name) {
        var acc = document.getElementsByClassName(class_name);
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
    }

    //Cookies remember
    var setLoginCookies = function (user, pass) {
        document.cookie = "ligapp_user=" + user;
        document.cookie = "ligapp_pass=" + pass;
    };

    var getLoginCookies = function () {
        var login = {user: '', pass: ''};

        login.user = getCookie('ligapp_user');
        login.pass = getCookie('ligapp_pass');

        return login;
    };

    function getCookie(Name) {
        var search = Name + "="
        var returnvalue = "";
        if (document.cookie.length > 0) {
            offset = document.cookie.indexOf(search)
            // if cookie exists
            if (offset != -1) {
                offset += search.length
                // set index of beginning of value
                end = document.cookie.indexOf(";", offset);
                // set index of end of cookie value
                if (end == -1) end = document.cookie.length;
                returnvalue = unescape(document.cookie.substring(offset, end))
            }
        }
        return returnvalue;
    }

    var initWidgets = function () {
        handlerSummernote();
        initMarkdown();
    }

    var initMarkdown = function () {
        if (!jQuery().markdown) {
            return;
        }

        $.fn.markdown.messages['es'] = {
            'Bold': "Negrita",
            'Italic': "Itálica",
            'Heading': "Título",
            'URL/Link': "Inserte un link",
            'Image': "Inserte una imagen",
            'List': "Lista de items",
            'Unordered List': "Lista desordenada",
            'Ordered List': "Lista ordenada",
            'Code': "Código",
            'Quote': "Cita",
            'Preview': "Previsualizar",
            'strong text': "Texto importante",
            'emphasized text': "Texto con énfasis",
            'heading text': "Texto de título",
            'enter link description here': "Descripción del link",
            'Insert Hyperlink': "Inserte un hipervínculo",
            'enter image description here': "Descripción de la imagen",
            'Insert Image Hyperlink': "Inserte una imagen con un hipervínculo",
            'enter image title here': "Inserte una imagen con título",
            'list text here': "Texto de lista aquí",
            'code text here': "Código aquí",
            'quote here': "Cita aquí",
            'Save': "Guardar"
        };

        if ($("#lenguaje").data("lenguaje") == 'es') {
            $('.markdown').markdown({
                language: 'es',
                height: 200,
                resize: 'vertical'
            });
        } else {
            $('.markdown').markdown({
                language: 'en',
                height: 200,
                resize: 'vertical'
            });
        }
    }

    var containsDuplicates = function (array) {
        return array.length !== new Set(array).size;
    }

    // formatear rut
    var formatearRut = function (value) {
        var rutAndDv = splitRutAndDv(value);
        var cRut = rutAndDv[0];
        var cDv = rutAndDv[1];
        if (!(cRut && cDv)) {
            return cRut || value;
        }
        var rutF = "";
        var thousandsSeparator = ".";
        while (cRut.length > 3) {
            rutF = thousandsSeparator + cRut.substr(cRut.length - 3) + rutF;
            cRut = cRut.substring(0, cRut.length - 3);
        }
        return cRut + rutF + "-" + cDv;
    }
    var splitRutAndDv = function (rut) {
        var cValue = clearFormatRut(rut);
        if (cValue.length === 0) {
            return [null, null];
        }
        if (cValue.length === 1) {
            return [cValue, null];
        }
        var cDv = cValue.charAt(cValue.length - 1);
        var cRut = cValue.substring(0, cValue.length - 1);
        return [cRut, cDv];
    }

    function clearFormatRut(value) {
        return value.replace(/[\.\-\_]/g, "");
    }

    var initDropdownLenguajes = function () {
        // Obtener la ruta actual
        var currentPath = window.location.pathname;

        var existe_locale_es = currentPath.lastIndexOf('es');
        var existe_locale_en = currentPath.lastIndexOf('en');

        $('.dropdown-item-lenguaje').each(function (i) {
            var codigo = $(this).data('codigo');

            // Sustituir "/es/" por "/en/"
            if (existe_locale_es != -1 || existe_locale_en != -1) {
                var nuevaCadena = currentPath.replace('/en', '/_locale');
                nuevaCadena = nuevaCadena.replace('/es', '/_locale');

                nuevaCadena = nuevaCadena.replace('/_locale', `/${codigo}`);
                $(this).attr('href', nuevaCadena);
            }
        });
    }

    return {
        //main function to initiate the module
        init: function () {
            initDatePickers();
            initInputMasks();
            toastrConfig();
            handlerNewValidateType();
            // handlerSummernote();
            handlerFormatNumber();
            initTooltips();
            // init dropdown lenguajes
            initDropdownLenguajes();
        },
        initWidgets: initWidgets,
        initSummernoteModal: initSummernoteModal,
        getLoginCookies: getLoginCookies,
        setLoginCookies: setLoginCookies,
        showAlert: showAlert,
        showMessage: showMessage,
        block: block,
        sumarDiasAFecha: sumarDiasAFecha,
        restarDiasAFecha: restarDiasAFecha,
        sumarMesesAFecha: sumarMesesAFecha,
        sumarMinutosAHora: sumarMinutosAHora,
        restarMinutosAHora: restarMinutosAHora,
        formatearNumero: formatearNumero,
        handlerFormatNumber: handlerFormatNumber,
        formatearFechaCalendario: formatearFechaCalendario,
        showErrorMessageValidate: showErrorMessageValidate,
        showErrorMessageValidateInput: showErrorMessageValidateInput,
        showErrorMessageValidateSelect: showErrorMessageValidateSelect,
        resetErrorMessageValidateSelect: resetErrorMessageValidateSelect,
        resetErrorMessageValidate: resetErrorMessageValidate,
        formatearFecha: formatearFecha,
        convertirStringAFecha: convertirStringAFecha,
        convertirTimeAMinutos: convertirTimeAMinutos,
        validateEmail: validateEmail,
        scrollTo: function (el, offset) {
            var pos = (el && el.length > 0) ? el.offset().top : 0;
            pos = pos + (offset ? offset : 0);

            jQuery('html,body').animate({
                scrollTop: pos
            }, 'slow');
        },
        getSalt: function () {
            return '$2a$10$sh/ip53Dl5Uk45WaMsRdI.';
        },
        decodeGoogleAddress: decodeGoogleAddress,
        initAccordion: initAccordion,
        containsDuplicates: containsDuplicates,
        formatearRut: formatearRut,
        clearFormatRut: clearFormatRut
    };

}();
MyApp.init();


