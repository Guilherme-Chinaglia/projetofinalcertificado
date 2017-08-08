$(function(){
	

	$('.sidebar-open:after').on('click', function(e){

		console.log(e);
	});

	$('.js-open-sidebar').on('click', function(){
		$('.sidebar').addClass('sidebar-open').removeClass('sidebar-close');
	});
});