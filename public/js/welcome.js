$('.interest-btn').on('click', function(e) {
	var pos = $(this).data('pos');
	var ref = $(this).attr('data-ref');
	var length = parseInt($('.interest-slides').length);
	if(ref == undefined) {
		ref = (pos=="next") ? 1 : length - 1;
	}
	console.log(ref);
	if(ref > length - 1) {
		ref = 0;
	}
	else if(ref-1 < 0) {
		ref = length - 1;
	}
	$("#next-btn").attr('data-ref', parseInt(ref)+1);
	$("#prev-btn").attr('data-ref', parseInt(ref)-1);
	$(".interest-slides").hide();
	$(".interest-wrapper .interest-slides:eq(" + ref + ")").fadeIn();
	e.preventDefault();
});
$(".interest").on('click', function() {
	var ref = $(this).data('ref');
	var interest = $("#interest_id").val();
	if(ref == interest) {
		$(this).removeClass('active');
		$("#interest_id").val('');
	} else {
		$('.interest').removeClass('active');
		$(this).addClass('active');
		$("#interest_id").val(ref);
	}
});