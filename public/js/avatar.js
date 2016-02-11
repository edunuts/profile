(function() {
	'use strict';
	var Avatar = {
		avatar: false,
		fadeSpeed: 300,
		init: function() {
			this.image = $('#chosen-avatar');
			this.overlay = $('#change-avatar');
			this.input = '#choose-avatar';
			this.cropData = $('#crop-data');
			this.avatarPic = $('#signup-pic');
			this.doneCrop = $('.done-crop');
			this.cancelCrop = $('.cancel-crop');
			this.addEvt();
		},
		addEvt: function() {
			var self = this;
			$(self.input).change(function() {
				if(this.files) {
					self.overlay.fadeIn(self.fadeSpeed);
					var file = this.files[0];
					if(file) {
						self.getData(file);
					}
				}
			});
			self.doneCrop.click(function() {
				self.doneCroping();
			});

			self.cancelCrop.click(function() {
				self.cancelCroping();
			});
			$(self.input).closest('label').click(function() {
				$(this).find('input').val('');
			});
		},

		cancelCroping: function() {
			var self = this,
				img = self.image;
			self.overlay.fadeOut(self.fadeSpeed, function() {
				img.cropper('destroy');
			});
		},

		doneCroping: function() {
			var self = this,
				img = self.image;
			var cropedCanvas = img.cropper("getCroppedCanvas", { width: 170, height: 170 });
			self.avatarPic.html(cropedCanvas);
			self.cropData.val(JSON.stringify(img.cropper("getData")));
			self.overlay.fadeOut(self.fadeSpeed, function() {
				img.cropper('destroy');
			});
		},

		getData: function(file) {
			var self = this,
				reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function(e) {
				self.changeImg(e.target.result);
			}
		},
		changeImg: function(src) {
			var self = this,
				image = self.image.attr('src', src),
				cropData = $(self.cropData);
				image.cropper({
					aspectRatio: 1
				});
			image.cropper('reset').cropper('replace', src);
		}
	}
	Avatar.init();
})();