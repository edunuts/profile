$('.pop-btn').on('click', function(e) {
	$($(this).data('pop')).show();
	e.preventDefault();
});
$('.pop-close').on('click', function(e) {
	e.preventDefault();
	$(this).parents(".pop-box-overlay").fadeOut().get(0).reset();
});
$('.stars a').on('click', function(e){
	$('.stars a').removeClass('active');
	$(this).addClass('active').prevAll().each(function(index, el) {
		var belongs_to = $(el).data('data-belongs');
		if(belongs_to == index) {
			$('.stars a').removeClass('active');
			index = -1;
		}
		$(el).data('data-belongs', index).addClass('active');
		$('#star-ratings').val(index+1);
	});
	e.preventDefault();
});
function mycheckbox() {
	$("input[type='checkbox']").off('change').on('change', function() {
		var lbl = $(this).parent('.checkbox');
		$(this).is(':checked') ? lbl.addClass('active') : lbl.removeClass('active');
	});
}
mycheckbox();
var customAlert = function(msg, mode) {
	var rmClass = (mode == 's') ? 'error' : 'success';
	var newClass = (mode == 's') ? 'success' : 'error';
	$('#errorContainer').text(msg).removeClass(rmClass).addClass(newClass).slideDown();
};
var hideCustomAlert = function() {
	$('#errorContainer').text('').slideUp();
}
$('.close-pop').on('click', function(e) {
	if(!$(this).attr('type'))
		e.preventDefault();
	$('.overlay').fadeOut();
});
$(function() {
	var hashVal = window.location.hash;
	if(!hashVal.match(/^\w+$/)) return;
	var hashEl = $(hashVal);
	if(hashEl.css('display') == 'none') {
		hashEl.slideDown();
	}
	if(hashEl.length > 0) {
		$('html, body').animate({
		   	scrollTop: hashEl.offset().top
		}, 1000);
	}
})
$(".dropdown-btn").on('click', '.label', function(e){
	e.preventDefault();
	$(this).parent().children(".dropdown").slideDown();
}).find('.dropdown-link').click(function(e) {
	e.preventDefault();
	$(this).parents('.dropdown').slideUp().parents('.dropdown-btn').val($(this).attr('href'))
	.trigger('change').children('.label').text($(this).text());
});
$(".dropdown-alt").on('click', function() {
	$(this).children('.dropdown').slideToggle();
});
$(document).on('click', function(e) {
	if($(e.target).closest('.dropdown-btn').length == 0 && $(e.target).closest('.dropdown-alt').length == 0) {
		$(".dropdown").slideUp();
	}
});
$(".header-search-select").on('click', function(e) {
	$('.header-search-drop').stop().slideToggle();
});
$(".locations-list li").on('click', function(e) {
	$this = $(this);
	$this.parents('form')
		.find('.hp-search-select').text($this.text())
		.end().attr('action', $this.data('ref'))
		.find('.locations-list').stop().slideUp();
	e.preventDefault();
});

$(document).click(function(e) {
	if($(e.target).closest('form').length == 0) {
		$('.locations-list').stop().slideUp();
	}
});