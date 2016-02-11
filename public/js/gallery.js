var g=(function($) {
	var SimpleGallery = {
		init: function(el, gallery, container, preloader, configs) {
			this.el = el;
			this.configs = configs;
			this.preloader = preloader;
			this.gallery = gallery;
			this.container = container;
			this.getImages();
		},

		getImages: function() {
			var imageList = $(this.el).find('a');
			imageList.loaded = {};
			this.bindEvent(imageList);
			this.bindKeys(imageList);
		},

		bindEvent: function(imageList) {
			var self = this,
				index = 0,
				len = imageList.length;
			imageList.click(function(e) {
				
				e.preventDefault();
				index = imageList.index(this);
				self.index = index;
				self.openGallery(imageList, index);
			});
			$.each(self.configs.controls, function(k, v) {
				$(v).click(function(e) {
					e.preventDefault();
					var fn = 'control_' + k;
					if(self[fn]) {
						self[fn](imageList);
					}
				});
			});
			self.bindClose(imageList);
		},

		control_next: function(imageList) {
			var self = this,
				len = imageList.length,
				index = self.index;
			++self.index;
			$(imageList.loaded[index]).stop().removeAttr('style').fadeOut(self.configs.transition, function() {
				if(self.index >= len) {
					self.index = 0;
				}
				self.loadImage(imageList, self.index);
			});
			$(self.el).trigger('simplegallery.next', imageList.eq(self.index));
		},

		control_prev: function(imageList) {
			var self = this,
				len = imageList.length,
				index = self.index;
			--self.index;
			$(imageList.loaded[index]).stop().removeAttr('style').fadeOut(self.configs.transition, function() {
				if(self.index < 0) {
					self.index = (len - 1);
				}
				self.loadImage(imageList, self.index);
			});
			$(self.el).trigger('simplegallery.prev', imageList.eq(self.index));
		},
		
		bindKeys: function(imageList) {
			var self = this;
			$(document).keyup(function(e) {
				var galleryStatus = $(self.el).data('simplegallery.status');
				if(galleryStatus == 'open') {
					var keyCode = e.keyCode;
					switch(keyCode) {
						case 13:
							if(e.altKey) {
								self.container.toggleClass('fullscreen');
							}
							break;
						case 27:
							if(self.container.hasClass('fullscreen')) {
								self.container.removeClass('fullscreen');
							} else {
								self.closeGallery(imageList);
							}
							break;
						case 39:
							self.control_next(imageList);
							break;
						case 37:
							self.control_prev(imageList);
							break;
					}
				}
			});

		},

		openGallery: function(imageList, index) {
			var self = this;
			this.gallery.fadeIn(this.configs.transition, function() {
				$(self.el).data('simplegallery.status', 'open');
			});
			this.loadImage(imageList, index);
			$(this.el).trigger('simplegallery.open', imageList.eq(index));
		},

		loadImage: function(imageList, index) {
			var self = this, img;
			if(imageList.loaded[index] !== undefined) {
				self.container.html($(imageList.loaded[index]).fadeIn(self.configs.transition));
				$(self.el).trigger('simplegallery.loadimage', imageList.eq(index));
			} else {
				self.acivatePreloader();
				var	src = imageList.eq(index).attr('href')
				$('<img />', {
					class: self.configs.classes.image,
					src : src
				}).on('load', function() {
					self.container.html(this);
					imageList.loaded[index] = this;
					$(self.el).trigger('simplegallery.loadimage', imageList.eq(index));
					self.preloadImages(imageList, index);

				});
			}
		},

		preloadImages: function(imageList, index, loadIndex) {
			var self = this;
			var len = imageList.length,
				prev = this.configs.preload.prev,
				next = this.configs.preload.next;
			if(loadIndex == undefined) {
				loadIndex = index - prev;
				if(loadIndex < 0) {
					loadIndex = 0;
				}
			}
			if(imageList.loaded[loadIndex] !== undefined) {
				++loadIndex;
			}
			$('<img />', {
				class: this.configs.classes.image,
				src : imageList.eq(loadIndex).attr('href')
			}).on('load', function() {
				imageList.loaded[loadIndex] = this;
				if(loadIndex < (index + next) && loadIndex < len) {
					self.preloadImages(imageList, index, ++loadIndex);
				}
			});
		},

		bindClose: function(imageList) {
			var self = this;
			self.gallery.click(function(e) {
				if($(e.target).is(self.gallery)) {
					self.closeGallery(imageList);
				}
			});
		},

		closeGallery: function(imageList) {
			var self = this;
			var index = self.index;
			delete self.index;
			$(self.gallery).fadeOut(this.configs.transition, function() {
				self.container.html('');
				$(self.el).data('simplegallery.status', 'close');
				$(self.el).trigger('simplegallery.status', imageList.eq(index));
			});
		},

		acivatePreloader: function() {
			this.container.html(this.preloader);
		},
	};

	$.fn.simpleGallery = function(configs) {
		configs = $.extend($.fn.simpleGallery.configs, configs);
		var gallery = $(configs.gallery),
			preloader = $('<img />', {src: configs.preloader, class: configs.classes.preloader});
			container = $(configs.gallery_image);
		this.each(function() {
			var simpleGallery = Object.create(SimpleGallery);
			simpleGallery.init(this, gallery, container, preloader, configs);
		});
		return this;
	};
	$.fn.simpleGallery.configs = {
		preload: {
			prev: 1,
			next: 2
		},
		preloader: 'img/preloader.gif',
		gallery: '.simplegallery-overlay',
		gallery_image: '.simplegallery-image',
		controls: {
			next: '.btn-next',
			prev: '.btn-prev',
		},
		classes: {
			image: 'hero-photo',
			preloader: 'simplegallery-preloader'
		},
		transition: 300
	}
	return SimpleGallery;
})(jQuery);