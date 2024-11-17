$(document).ready(function () {
  // Cambia a modo oscuro
  $('#modo-oscuro').click(function () {
      $('body').removeClass('modo-claro').addClass('modo-oscuro');
      $('.navbar, .table, .footer, .imgfooter, p').removeClass('modo-claro').addClass('modo-oscuro');

      // Cambia la imagen del footer a "teddy bear blanco.png"
      $('.imgfooter').attr('src', 'teddy bear blanco.png'); 
  });

  // Cambia a modo claro
  $('#modo-claro').click(function () {
      $('body').removeClass('modo-oscuro').addClass('modo-claro');
      $('.navbar, .table, .footer, .imgfooter, p').removeClass('modo-oscuro').addClass('modo-claro');

      // Cambia la imagen del footer a "teddy bear.png"
      $('.imgfooter').attr('src', 'teddy bear.png'); 
  });
});