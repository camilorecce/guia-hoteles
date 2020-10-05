$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('.carousel').carousel({
      interval: 3000
    });

    $('#contacto').on('show.bs.modal', function(n) {
      console.log("El modal se esta mostrando");

      $('#contactoBsAs').removeClass("btn-outline-success");
      $('#contactoBsAs').addClass("btn-info");
      $('#contactoBsAs').prop('disabled', true);
    })

    $('#contacto').on('shown.bs.modal', function(n) {
      console.log("El modal se mostro");
    })

    $('#contacto').on('hide.bs.modal', function(n) {
      console.log("El modal se está ocultando");
    })

    $('#contacto').on('hidden.bs.modal', function(n) {
      console.log("El modal se ocultó");

      $('#contactoBsAs').removeClass("btn-info");
      $('#contactoBsAs').addClass("btn-outline-success");
      $('#contactoBsAs').prop('disabled', false);
    })
  })