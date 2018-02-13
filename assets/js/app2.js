$(document).ready(function () {

    $('.images img').mouseover(function () {
    var info = $(this).attr('alt');
    $(this).each(function () {
         $(this).css({
            'filter': 'brightness(0.4)',
            'cursor':'pointer',
        });
        $(this).before("<figcaption>" + info + "</figcaption>");
        $('figcaption').css({
            'font-size': '30px',
            'color': '#363636',
            'font-weight': 'bolder'
         })//css

    })//each
});//mouseover

    $(".images img").mouseout(function () {
        
        $(".images img").css({
            'filter': 'brightness(1)',
        });
        $("figcaption").remove();  
        
    });//mouseout
  
    var chilena = data.chilena.datos;
    var extranjera = data.extranjera.datos;
    var rapida  = data.rapida.datos;
    var restoBar = data.bar.datos;

    //al hacer click en el boton que se muestren las imagenes, de la categoria seleccionada.

    $("#img1").click(function () {
        for (var i = 0; i < chilena.length; i++) {

            $(".extranjera, .rapida, .resto-bar, .all").empty();

            $(".chilena").append("<div class='row'>" +
                "<div class='col-md-6 text-center newImg'>" + "<img id='chileanPictures' class='Img' width='200' height='200' src='assets/" + chilena[i].picture + "'>" + "</div>" + 
                "<div class='col-md-6'>" + 
                "<h3>" + chilena[i].name + "</h3>" +  "<hr>" +
                "</div></div>");
         }
    });

    $("#img2").click(function () {
        for (var i = 0; i < extranjera.length; i++) {

            $(".chilena, .rapida, .resto-bar, .all").empty();

            $(".extranjera").append("<div class='row'>" +
                "<div class='col-md-6 text-center newImg'>" + "<img class='Img' width='200' height='200' src='assets/" + extranjera[i].picture + "'>" + "</div>" +
                "<div class='col-md-6'>" +
                "<h3>" + extranjera[i].name + "</h3>" + "<hr>" +
                "</div></div>");
        }
    });

    $("#img3").click(function () {
        for (var i = 0; i < rapida.length; i++) {

            $(".chilena, .extranjera, .resto-bar, .all").empty();

            $(".rapida").append("<div class='row'>" +
                "<div class='col-md-6 text-center newImg'>" + "<img class='Img' width='200' height='200' src='assets/" + rapida[i].picture + "'>" + "</div>" +
                "<div class='col-md-6'>" +
                "<h3>" + rapida[i].name + "</h3>" + "<hr>" +
                "</div>" + "<hr>" + "</div>");
        }
    });

    $("#img4").click(function () {
        for (var i = 0; i < restoBar.length; i++) {

            $(".extranjera, .rapida, .chilena, .all").empty();

            $(".resto-bar").append("<div class='row'>" +
                "<div class='col-md-6 text-center newImg'>" + "<img class='Img' width='200' height='200' src='assets/" + restoBar[i].picture + "'>" + "</div>" +
                "<div class='col-md-6'>" +
                "<h3>" + restoBar[i].name + "</h3>" + "<hr>" +
                "</div></div>");
        }
    });


    $("#comida-chilena").click(function () {
        for (var i = 0; i < chilena.length; i++) {

            $(".extranjera, .rapida, .resto-bar, .all").empty();

            $(".chilena").append("<div class='row'>" +
                "<div class='col-md-6 text-center'>" + "<img width='200' height='200' src='assets/" + chilena[i].picture + "'>" + "</div>" +
                "<div class='col-md-6'>" +
                "<h3>" + chilena[i].name + "</h3>" + "<hr>" +
                "</div></div>");
        }
    });

    $("#comida-extranjera").click(function () {
        for (var i = 0; i < extranjera.length; i++) {

            $(".chilena, .rapida, .resto-bar, .all").empty();

            $(".extranjera").append("<div class='row'>" +
                "<div class='col-md-6 text-center'>" + "<img width='200' height='200' src='assets/" + extranjera[i].picture + "'>" + "</div>" +
                "<div class='col-md-6'>" +
                "<h3>" + extranjera[i].name + "</h3>" + "<hr>" +
                "</div></div>");
        }
    });

    $("#comida-rapida").click(function () {
        for (var i = 0; i < rapida.length; i++) {

            $(".extranjera, .chilena, .resto-bar, .all").empty();

            $(".rapida").append("<div class='row'>" +
                "<div class='col-md-6 text-center'>" + "<img width='200' height='200' src='assets/" + rapida[i].picture + "'>" + "</div>" +
                "<div class='col-md-6'>" +
                "<h3>" + rapida[i].name + "</h3>" + "<hr>" +
                "</div></div>");
        }
    });

    $("#bar-restaurant").click(function () {
        for (var i = 0; i < restoBar.length; i++) {

            $(".extranjera, .rapida, .chilena, .all").empty();

            $(".resto-bar").append("<div class='rowl'>" +
                "<div class='col-md-6 text-center'>" + "<img width='200' height='200' src='assets/" + restoBar[i].picture + "'>" + "</div>" +
                "<div class='col-md-6'>" +
                "<h3>" + restoBar[i].name + "</h3>" + "<hr>" +
                "</div></div>");
        }
    });

   

$("#chileanPictures").click(function () {
    for (var i = 0; i < chilena.length; i++) {
    $(".info-chilena").append("<div class='modal fade' tabindex='-1' role='dialog'>" +
                              "<div class='modal-dialog' role='document'>" +
                              "<div class='modal-content'>" +
                              "<div class='modal-header'>" +
                              "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" +
                              "<h4 class='modal-title'>" +       + "</h4>" + "</div>" +
                              "<div class='modal-body'>" +
                              "<p>" +      +"</p>" + 
                              "</div></div></div></div>");


    };


});



});//document