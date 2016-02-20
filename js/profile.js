$('#side-bar-nav').find('a').click(function(e) {
		e.preventDefault();
		$(this).parent().addClass('active').siblings().removeClass('active');
		var idToShow = $(this).attr('href');
		$('.items').hide();
		$(idToShow).show();
	}).eq(0).trigger('click');


$('.noti-btn').on('click', function() {
	$(this).toggleClass('clicked');
	$('.setting-btn').removeClass('clicked');
	$('.noti').stop().slideToggle(200);
	$('.setting').slideUp(200);
});

$('.setting-btn').on('click', function() {
	$(this).toggleClass('clicked');
	$('.noti-btn').removeClass('clicked');
	$('.setting').stop().slideToggle(200);
	$('.noti').slideUp(200);
});

$('#close').click(function () {
	$('.lived-box').slideUp();
});
var overlay = $('<div>',{class:'modal-overlay'});
$('a[href*=modal]').click(function() {
	$('body').append(overlay);
});


$(function() {
	$('.close-btn').on('click', function(e) {
		overlay.remove();
	})
})

$('.skill-icon').click(function() {

	$('.tagsinput-done-box').slideUp();
	$('.tagsinput-box').slideToggle();
})
