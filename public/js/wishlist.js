$('.action-link.wishlist').on('click', function(e) {
	var link = $(this);
	$(document).rjConfirm({
		callback : function() {
			var ref = link.data('ref');
			$.post(base_url + '/institute/wishlist', { like_id: ref, mode : '_u' }, function(data, textStatus, xhr) {
				console.log(data);
				link.parents('.college-wrapper').slideUp(600,function(){
					$(this).remove();
				});
			});
		}
	});
	e.preventDefault();
});