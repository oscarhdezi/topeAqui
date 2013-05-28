$(document).on('ready',function(){

	var peticion = $('.margenSuperior form').attr('action');
	var metodo   = $('.margenSuperior form').attr('method');

	$('#clic').click(function(e){
		e.preventDefault();

		$.ajax({
			beforeSend:function(){
				$('#respuesta').html('<div data-alert class="alert-box">Enviando..<a href="#" class="close">&times;</a></div>');
			},
			url : peticion,
			type: metodo,
			data: $('.margenSuperior form').serialize(),
			success:function(resp){

				$('#respuesta').hide();
				
				if (resp != '') {
					$('#respuesta').html(resp);
					$('#respuesta').show();
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