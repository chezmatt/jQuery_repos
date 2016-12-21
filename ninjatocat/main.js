
$('document').ready(
	function(){
	$('img').click(
		function() {
			var front = $(this).attr('src');
			var back = $(this).attr('data-alt-src');
			$(this).attr('src', back);
			$(this).attr('data-alt-src', front);
		});
	}		
)