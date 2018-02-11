$(document).ready(function () {

    $('.images img').mouseover(function () {
    var info = $(this).attr('alt');
    $(this).each(function () {
         $(this).css({
            'filter': 'brightness(0.4)',
            'cursor':'pointer'
        });
        $(this).before("<figcaption>" + info + "</figcaption>");
        $('figcaption').css({
            'font-size': '30px',
            'color': '#fff',
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
//var rapida  = data.rapida.datos;
    //var restoBar = data.bar.datos;

    //al hacer click en el boton que se muestren las imagenes, antes hay que recorrerlas.

    $("#img1").click(function () {
        for (var i = 0; i < chilena.length; i++) {

            $(".extranjera, .rapida, .resto-bar, .all").empty();

            $(".chilena").append("<div class='row animal'>" +
                "<div class='col-md-6 text-center'>" + "<img width='200' height='200' src='assets/" + chilena[i].picture + "'>" + "</div>" +
                "<div class='col-md-6'>" +
                "<h3>" + chilena[i].name + "</h3>" +
                "</div></div>");
        }
    });

    $("#img2").click(function () {
        for (var i = 0; i < extranjera.length; i++) {

            $(".chilena, .rapida, .resto-bar, .all").empty();

            $(".chilena").append("<div class='row animal'>" +
                "<div class='col-md-6 text-center'>" + "<img width='200' height='200' src='assets/" + extranjera[i].picture + "'>" + "</div>" +
                "<div class='col-md-6'>" +
                "<h3>" + extranjera[i].name + "</h3>" +
                "</div></div>");
        }
    });

});//document