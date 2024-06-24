jQuery(document).ready(listo); //aqui alistamos nuestar web

//esta funcion despliega el menu hambuerguesa
function listo() {
  jQuery(".hamburguesa").click(function (e) {
    e.preventDefault();
    jQuery("header .contenedor nav").toggleClass("open");
    jQuery(".hamburguesa i").toggleClass("fa-square-xmark"); //colocamos una x en menu
  });

  jQuery("header .contenedor nav a").click(function (e) {
    jQuery("header .contenedor nav").toggleClass("open");
    jQuery(".hamburguesa i").removeClass("fa-square-xmark");
    var dev = jQuery(this).attr("href");
    jQuery(" html,body").animate({
      scrollTop: jQuery(dev).offset().top - 133.9,
    });
  });
}
