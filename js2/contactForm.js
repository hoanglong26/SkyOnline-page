// Input Lock
$('textarea').blur(function () {
	$('#hire textarea').each(function () {
		$this = $(this);
		if ( this.value != '' ) {
			$this.addClass('focused');
			$('textarea + label + span').css({'opacity': 0});
		}
		else {
			$this.removeClass('focused');
			$('textarea + label + span').css({'opacity': 0});
		}
	});
});

$('#hire .field:first-child input').blur(function () {
	$('#hire .field:first-child input').each(function () {
		$this = $(this);
		if ( this.value != '' ) {
			$this.addClass('focused');
			$('.field:first-child input + label + span').css({'opacity': 1});
		}
		else {
			$this.removeClass('focused');
			$('.field:first-child input + label + span').css({'opacity': 0});
		}
	});
});

$('#hire .field:nth-child(2) input').blur(function () {
	$('#hire .field:nth-child(2) input').each(function () {
		$this = $(this);
		if ( this.value != '' ) {
			$this.addClass('focused');
			$('.field:nth-child(2) input + label + span').	css({'opacity': 1});
		}
		else {
			$this.removeClass('focused');
			$('.field:nth-child(2) input + label + span').css({'opacity': 0});
		}
	});
});

function checkEmpty() {
	if($('#name').val() != ""){
		
		$("#lbName").addClass('is-hovered');
	}
	else{
		$("#lbName").removeClass('is-hovered');	
	}


	if($('#email').val() != ""){
		
		$("#lbEmail").addClass('is-hovered');
	}
	else{
		$("#lbEmail").removeClass('is-hovered');	
	}

	if($('#msg').val() != ""){	
		$("#lbMess").addClass('is-hovered');
	}
	else{
		$("#lbMess").removeClass('is-hovered');	
	}

	// if($('#name').val() == ""){
	// 	
	// 	$("#lbName").css({"width":"100%"});
	// }
	// 

}
