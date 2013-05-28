$(document).on('ready',function(){
	var peticion = $('#filtro form').attr('action');
	var metodo   = $('#filtro form').attr('method');

	$('#filtro form').change(function(e){
		e.preventDefault();

		$.ajax({
			beforeSend:function(){
				$('#status').html('<div class="cargandoTexto"><img src="images/loader.gif"/><span class="txtCargando">CARGANDO</span></div>');
			},
			url : peticion,
			type: metodo,
			data: $('#filtro form').serialize(),
			success:function(resp){

				$('#status2').hide();
				
				if (resp != '') {
					$('#status').html(resp);
				}else if(resp == ''){
					$('#status').css('display','none');
				}
			},
			error:function(jqXHR, estado, error){
				$('#status').html('Error');
				console.log(estado)
				console.log(error)
			},
			complete:function(jqXHR,estado){
				console.log(estado)
			}
		})
	})
});