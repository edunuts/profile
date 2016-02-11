(function($, w, d, u){
	var Confirm = {
		init : function(options) {
			var self = this;
			self.options = $.extend({}, $.fn.rjConfirm.options, options);
			self.overlay();
		},
		overlay : function() {
			$('<div />',{
				class : 'pop-box-overlay',
				id : 'rjConfirmBox'
			}).appendTo('body');
			this.createBox();
		},
		createBox : function() {
			$('<div />',{
				class : 'pop-box animated bounceInDown'
			}).appendTo('.pop-box-overlay');
			this.closeBtn();
		},
		closeBtn : function() {
			var self = this;
			$('<a />',{
				class : 'icon cancel-red',
				on : {
					click : function() {
						self.removeBox();
					}
				}
			}).appendTo('.pop-box');
			self.createHeading();
		},
		createHeading : function() {
			$('<strong />',{
				text : this.options.heading,
				class : 'heading'
			}).appendTo('.pop-box');
			this.createContent();
		},
		createContent : function() {
			$('<div />',{
				class : 'pop-content',
				html : this.options.text + '<hr />'
			}).appendTo('.pop-box');
			this.acceptBtn();
		},
		acceptBtn : function() {
			var self = this;
			$('<button />',{
				class : 'btn small',
				id : 'rjConfirmAcceptBtn',
				text : self.options.acceptBtn,
				on : {
					click : function() {
						var type = typeof(self.options.callback);
						if(type == 'function') {
							self.options.callback();
						}
						self.removeBox();
					}
				}
			}).appendTo('.pop-content');
			this.rejectBtn();
		},
		rejectBtn : function() {
			var self = this;
			$('<button />',{
				class : 'btn small grey',
				text : this.options.rejectBtn,
				on : {
					click : function() {
						self.removeBox();
					}
				}
			}).appendTo('.pop-content');
		},
		removeBox : function() {
			$("#rjConfirmBox").fadeOut();
			window.setTimeout(function(){
				$("#rjConfirmBox").remove();
			},800);
		}
	}
	$.fn.rjConfirm = function(options) {
		return this.each(function() {
			var confirm = Object.create(Confirm);
			confirm.init(options);
		});
	}
	$.fn.rjConfirm.options = {
		heading : "Confirmation",
		text: "Are you sure?",
		acceptBtn : "Confirm",
		rejectBtn : "Cancel"
	}
}(jQuery, window, document));