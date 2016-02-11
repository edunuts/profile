$('.delete-review').on('click', function(e) {
	var link = $(this);
	$(document).rjConfirm({
		callback : function() {
			var ref = link.data('ref');
			deleteReview(ref);
			link.parent('.review').slideUp(600,function(){
				$(this).remove();
			});
		}
	});
	e.preventDefault();
});
var deleteReview = function(ref) {
	$.post(base_url + '/user/delete-review', { review_id: ref }, function(data, textStatus, xhr) {
		customAlert('Gone to the trash, your review has been deleted.', 's');
	});
};