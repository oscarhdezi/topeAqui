$(document).on('ready',function(){
	var peticion = $('#contacto form').attr('action');
	var metodo   = $('#contacto form').attr('method');

	$('#clic').click(function(e){
		e.preventDefault();

		$.ajax({
			beforeSend:function(){
				$('#respuesta').html('<div class="cargandoTexto"><span class="txtCargando">ENVIANDO</span></div>');
			},
			url : peticion,
			type: metodo,
			data: $('#contacto form').serialize(),
			success:function(resp){

				$('#respuesta').hide();
				
				if (resp != '') {
					$('#respuesta').show();
					$('#respuesta').html(resp);
				}else if(resp == ''){
					$('#respuesta').css('display','none');
				}
			},
			error:function(jqXHR, estado, error){
				$('#respuesta').html('Error');
				console.log(estado)
				console.log(error)
			},
			complete:function(jqXHR,estado){
				console.log(estado)
			}
		})
	})
});