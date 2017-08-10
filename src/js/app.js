$("#js-open-sidebar, .logo").click(function(e) {
	e.preventDefault();
  	$(".sidebar").toggleClass("is-active");
});

$('.sidebar.is-active::after').on('click', function(){	
	$('.sidebar.is-active').removeClass('is-active');
});


	