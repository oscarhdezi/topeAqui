$(function(){
	var paginacion = $('.paginacion');
	paginacion.hide();
	paginacion.after('<div class="mostrar-mas"><a href="#">Mostrar mas</a></div>');

	$('.mostrar-mas').on('click',function(e){
		e.preventDefault();
		$.ajax({
			type: 'GET',
			url: $('.paginacion a.next').attr('href'),
			success: function(html){
				var nuevosNegocios = $(html).find('table tbody'),
				nuevaPag = $(html).find('.paginacion'),
				tabla = $('table');
				tabla.find('tbody').append(nuevosNegocios.html());
				tabla.after(nuevaPag.hide());
			}
		});
	});
});