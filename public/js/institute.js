$(document).ready(function() {
	var htmldata = "";
	var htmldataheading = '<span class="icon news-blue"></span><label class="detail-type"><h4 class="detail-heading">In The News</h4></label>';
	$.getJSON(base_url + '/institute/get-news-feed/' + inst_url, function(json, textStatus) {
		if(!json) return;
		for(var i = 0; i < json.length; i++) {
			htmldata += '<div class="col-8"><div class="media-wrapper" style="min-height: 150px;"><div class="col-5"><div class="media-image" style="background-image:url('+json[i].image+');height: 84px;"></div></div><div class="col-11"><div class="media-details"><a target="_blank" href="'+json[i].link+'" class="media-title" style="margin-bottom: 50px;">'+json[i].title+'</a><a class="media-by">Date : '+json[i].date+' </a></div></div></div></div>';
		}
		$('#all_news_feed').html(htmldata);
		$('#newsfeedheading').html(htmldataheading);
	});
});


$(document).ready(function() {
	$.getJSON(base_url + '/institute/articles/' + inst_id, function(json, textStatus) {
		if(!json) return;
		for(var i = 0; i < json.length; i++) {
			var image = json[i]['og:image'];
			var site_name = json[i]['og:site_name'];
			var description = json[i]['og:description'];
			var title = json[i]['og:title'];
			var url = json[i]['og:url'];
			var div = "\
			<div class='col-8'><div class='media-wrapper'>\
			<div class='media-image' style='background-image:url(" + image + ")'></div>\
			<div class='media-details'>\
			<a target='_blank' href='" + url + "' class='media-title'>" + title + "</a>";
			if(description) {
				div += "<small class='media-description'>" + description + "</small>";
			}
			div += "<a class='media-by'>" + site_name + "</a></div></div></div>";
			$('#media-links .media-links').append(div);
			$('#media-links').slideDown();
		}
	});
});

(function($) {
	// registering custom jquery http methods
	function jqueryAjax(method, url, data, callback) {
		return $.ajax({
			url: url,
			data: data,
			method: method,
			success: callback
		});
	}
	
	['put', 'delete'].forEach(function(method) {
		$[method] = function(url, data, callback) {
			return jqueryAjax(method, url, data, callback);
		}
	});

	// tab width
	var totalWidth = 0;
	$.each($(".course-wrapper .course-right-wrapper .nav-items ul li"), function() {
		totalWidth += $(this).width();
	});

	$(".course-wrapper .course-right-wrapper .nav-items ul").width(totalWidth);

	if($('.course-detail-wrapper').length > 10) {
		$('.course-left-wrapper .icon').eq(1).trigger('click');
	}

	$(".course-right-wrapper .top-nav .item").on('click', function(e) {
		e.preventDefault();
		$(".course-right-wrapper .top-nav .item").removeClass('active');$(this).addClass('active');
		var ref = $(this).data('ref');
		if(ref == 'all') {
			$(".course-right-wrapper").find('.course-detail-wrapper').fadeIn();
		} else {
			$(".course-right-wrapper").find('.course-detail-wrapper').hide();
			$(".course-right-wrapper").find('.course-detail-wrapper[data-level="'+ ref +'"]').fadeIn();
		}
		refactorWrappers();
	});

	$(".course-left-wrapper .icon").on('click', function(e) {
		e.preventDefault();
		var ref = $(this).data('ref');
		$(".course-left-wrapper .icon").removeClass('active');$(this).addClass('active');
		if(ref == 'all') {
			$(".course-right-wrapper").children('.detail-wrapper').fadeIn();
			
		} else {
			$(".course-right-wrapper").children('.detail-wrapper').hide();
			$(".course-right-wrapper").children('.detail-wrapper[data-parent="'+ ref +'"]').fadeIn();
		}
		refactorWrappers();
	});

	function refactorWrappers() {
		var count = $(".subcourse-wrapper").children('.course-detail-wrapper:visible').length;
		if(count == 0){
			$('.course-wrapper .course-right-wrapper .no-results').fadeIn();
		} else {
			$('.course-wrapper .course-right-wrapper .no-results').hide();
		}
		$.each($(".subcourse-wrapper"), function() {
			var len = $(this).children('.course-detail-wrapper:visible').length;
			if(len == 0) {
				$(this).children('.type-header').hide();
			} else {
				$(this).children('.type-header').fadeIn();
			}
		});
	}

	$(".course-right-wrapper .nav-btn").on('click',function() {
		var ul = $(".course-wrapper .course-right-wrapper .nav-items ul");
		var ref = $(this).data('ref');
		var left = parseInt(ul.css('left'));
		console.log(ref);
		if(ref == 'left') {
			if(left+500 > 0)
				return;
			ref = "+=500px";
		} else {
			if(left-500 <= -ul.width())
				return;
			ref = "-=500px";
		}
		$(".course-wrapper .course-right-wrapper .nav-items ul").animate({left: ref},100);
	});

	$(".course-action").on('click', function(e) {
		e.preventDefault();
		var ref = $(this).data('ref');
		var el = $(this).parents('.course-detail-wrapper')
		$('.course-content-area').stop().slideUp();
		el.children('.' + ref).stop().slideDown();
	});

	$(".course-content-area .close-btn").on('click', function(e) {
		e.preventDefault();
		$(this).parents('.course-content-area').slideUp();
	})

	$('#details-photo-wrapper').simpleGallery({
		gallery: '#photo-theatre-overlay',
		gallery_image: '#hero-photo',
		transition: 200,
		controls: {
			prev: '#photo-div-prev',
			next: '#photo-div-next',
		},
		preloader: ''
	}).on('simplegallery.loadimage', function(e, elem) {
		$.publish('institutes/photo/open', elem);
	});

	$('.close-btn').on('click', function(e){
		$('*[id*=overlay]').each(function(){
			$(this).fadeOut();
		});
	    document.body.style.overflow='auto';
		e.preventDefault();
	});

	$('.course-link').on('click', function(e) {
		var pos = parseInt($(this).siblings('.course-el').css('right')),
			newpos = (pos == 0) ? '-280px' : '0px',
			elText = (pos == 0) ? 'Hide Eligiblity' : 'View Eligiblity';
		$(this).text(elText);
		$(this).siblings('.course-el').animate({
			right : newpos
		},300);
		e.preventDefault();
	});

	$('.reviews-btn').on('click', function(e) {
		$('.details-reviews').slideToggle();
		e.preventDefault();
	});

	
	$("#_inst_like").on('click', function() {
		var self = $(this);
		userActions(self, 'like');
	});

	$("#_inst_wishlist").on('click', function() {
		var self = $(this);
		userActions(self, 'wishlist');
	});

	var action_id = $("#details-top").data('ref');
	var userActions = function(self, action) {
		var check = self.data('ref');
		var mode = self.data('mode');
		if(check == false) {
			customAlert('You need to login before you can like this.');
			return false;
		}
		$.post(base_url + '/institute/' + action, { like_id : action_id, mode : mode }, function(data, textStatus, xhr) {
			var newMode = (mode == '_l') ? '_u' : '_l';
			var iconRemoveClass = (mode == '_l') ? action + '-grey' : action + '-white';
			var iconAddClass = (mode == '_l') ? action + '-white' : action + '-grey';
			if(action == 'like')
				var btnText = (mode == '_l') ? 'Unlike' : 'Like';
			else
				var btnText = (mode == '_l') ? 'Remove from Wishlist' : 'Add to Wishlist';
			self.data('mode', newMode);
			self.toggleClass('active');
			self.children('.icon').removeClass(iconRemoveClass).addClass(iconAddClass);
			self.children('.icon-text').text(btnText);
		});
	};

	$('#review-form').on('submit', function(e){
		var self = $(this);
		e.preventDefault();
		var starRatings = $("#star-ratings").val();
		if(starRatings < 1) {
			customAlert('You must give ratings before you can post the review');
			return;
		}
		var btn = self.find('button[type="submit"]').attr('disabled', true);
		$.post(base_url + '/institute/review', self.serialize() + "&review_id=" + action_id, function(data, textStatus, xhr) {
			btn.removeAttr('disabled');
			$('.stars a').removeClass('active');
			$('#review-form')[0].reset();
			customAlert("Thank You! Your review will be published shortly.", "s");
		});
	});

	$('.admin-approval-btn').on('click', function() {
		var comment = $("#admin-comment-text").val(),
			agreement = $("#agreement").is(":checked"),
			status = $(this).data('status'),
			inst_id = $("#details-top").data('ref');
		if(!agreement) {
			customAlert("You must click the agreement checkbox");
			return;
		}
		if(!comment  && status!='a') {
			customAlert("You must enter a comment.");
			return;
		}
		var accuracy = $('#accuracy-rate').val();
		var rating  = $('#total-rate').val();
		$(document).rjConfirm({
			callback : function() {
				$.post(base_url + '/institute/admin-comment', {comment: comment, status : status, inst_id : inst_id, accuracy: accuracy, rating: rating}, function(data, textStatus, xhr) {
					console.log(data);
					customAlert("Your comment has been saved succesfully.", "s");
					$("#admin-comment").slideUp();
				});
			}
		});
	});

	$("#report-institute").on('submit', function(e) {
		var $this = $(this);
		e.preventDefault();
		var submitBtn = $(this).find('button')
		submitBtn.attr('disabled', true);
		var postData = $(this).serialize() + "&inst_id=" + inst_id;
		$.post($(this).attr('action'), postData , function(data, textStatus, xhr) {
			submitBtn.attr('disabled', false);
			if(data == 1) {
				customAlert('Thank you for your feedback. Our team will monitor the institute for quality purposes shortly.', 's');
				$this.get(0).reset();
				$this.fadeOut();
			}
			else {
				customAlert(data, 'e');
			}
		}); 
	});
	
	
	// need to be refactored.
	// photo comments read and write.

	PhotoComment = {
		init: function() {
			var self = this;
			self.form = $('#photo-comment-form');
			self.commentBox = $('#exists-comments');
			self.userName = self.form.find('[name="user-name"]').val();
			self.photoCmntTmpl = Handlebars.compile($('#photo-comment-tmpl').html());
			$.subscribe('institutes/photo/open', function(e, elem) {
				var id = $(elem).data('photo-id');
				self.form.find('#photo-id').val(id);
				self.loadData(id);
			});
			self.bindSave();
			self.bindUpdate();
		},

		bindSave: function() {
			var self = this;
			self.form.submit(function(e) {
				e.preventDefault();
				var data = $(this).serialize(),
					comment = $(this).find('[name="comment"]').val();
				self.sendData(data, comment);
				e.target.reset();
			});
		},

		bindUpdate: function() {
			var self = this;
			$('#exists-comments').on('click', '.delete', function() {
                var $this = $(this);
                $(document).rjConfirm({
                    callback : function() {
                        var id = $this.data('id');
                        self.sendDeleteRequest(id, $this);
                    }
                });
			});
			$('#exists-comments').on('click', '.edit', function() {
				self.toggleEdit(this);
			});
		},

		toggleEdit: function(elem) {
			var cbtn = $(elem).parents('.comment-wrapper').find('.comment').toggle()
			.end().find('.edit-comment-input').toggle()
			.end().find('.comment-name').toggle()
			.end().find('.edit');
			if(cbtn.text().toLowerCase() == 'edit') {
				cbtn.text('cancel');
			} else {
				cbtn.text('edit');
			}
		},

		sendDeleteRequest: function(id, elem) {
			$.delete(base_url + '/institute/photo-comment/' + id, function() {
				$(elem).parents('.comment-wrapper').fadeOut();
			});
		},

		bindCommentSave: function() {
			var self = this;
			$('.edit-comment-input').keydown(function(e) {
				var $this = $(this),
					comment = $this.val();
				if(!e.shiftKey && e.keyCode == 13) {
					e.preventDefault();
					self.toggleEdit(this);
					self.sendUpdate($this.data('id'), comment, $this);
					$this.parents('.comment-text').children('.comment').text(comment);
				}
			});
		},

		sendUpdate: function(id, comment, elem) {
			var wraper = elem.parents('.comment-wrapper');
			wraper.addClass('processing');
			$.put(base_url + '/institute/photo-comment/' + id + '?comment=' + comment, null, function(data) {
				console.log(data);
				wraper.removeClass('processing');
			});
		},

		sendData: function(data, comment) {
			var self = this;
			$.post(base_url + '/institute/photo-comment', data, function(resp) {
				resp = JSON.parse(resp);
				if(resp.status) {
					self.visualize([{
						userName: self.userName,
						userPhoto: display_picture,
						comment: comment,
						id: resp.id,
						logged: 1
					}]);
				}
			});
		},

		loadData: function(id) {
			var self = this;
			self.commentBox.html('');
			$.getJSON(base_url + '/institute/photo-comment/' + id, function(json) {
				self.visualize(json);
			})
		},

		visualize: function(data) {
			var self = this;
			$.each(data, function(k, v) {
				v.userPhoto = cdn + '/' + v.userPhoto;
				self.commentBox.append(self.photoCmntTmpl(v));
			});
			self.scrolling();
			self.bindCommentSave();
		},

		scrolling: function() {
			var self = this;
			$('.photo-controls').animate({scrollTop: self.commentBox.height()}, 200);
		}
	}
	PhotoComment.init();

	function initialize() {
		var myLatlng = new google.maps.LatLng(28.615571,77.384837);
		var mapCanvas = document.getElementById('details-top');
		var mapOptions = {
			center: myLatlng,
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(mapCanvas, mapOptions);
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
		});
	}
	// google.maps.event.addDomListener(window, 'load', initialize);
})(jQuery)