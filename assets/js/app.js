$(document).ready(function () {
 /*Funcion para mostrar el modal*/     
    $("#cfood").click(function () {

       $("miModal").show();
        
 });
 /*funciones para visualizar y ocultar las imágenes, según su clase*/
    $("#chilena").click(function() {
       $(".chilean").css("display", "block");
       $(".others").css("display", "none");
       $(".fast").css("display", "none");
       $(".rest").css("display", "none")
    });
    $("#extranjera").click(function () {
        $(".others").css("display", "block");
        $(".chilean").css("display", "none");
        $(".fast").css("display", "none");
        $(".rest").css("display", "none");
        
    });
    $("#rapida").click(function () {
        $(".fast").css("display", "block");
        $(".chilean").css("display", "none");
        $(".rest").css("display", "none");
        $(".others").css("display", "none");

    });
    $("#resto-bar").click(function () {
        $(".rest").css("display", "block");
        $(".chilean").css("display", "none");
        $(".fast").css("display", "none");
        $(".others").css("display", "none");
    });
    

    
});


    

























