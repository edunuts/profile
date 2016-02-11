var En = (function(en) {
	var route = en.route,
		Search = {
		limit: 10,
		offset: 0,
		loading: false,
		init: function(qStr) {
			this.cdn = $('#cdn').val();
			this.setElems();
			this.registerHelpers();
			this.qStr = JSON.parse(qStr);
			this.pageScrolled();
			this.sorting();
		},

		setElems: function() {
			this.sortby = $('#search-sorting');
			this.resultContainer = $('#result-container');
			this.template = Handlebars.compile($("#search-elems").html());
		},

		url: function(string) {
			 return string.replace(/[^\w\.]+/g, '-').toLowerCase();
		},

		decimal: function(num, num1) {
			if(!num1) num1 = 0;
			num1 = parseFloat(num1);
			return num1.toPrecision(num);
		},

		sorting: function() {
			var self = this;
			$('#search-sorting').change(function() {
				self.loadData(null, 1);
			});
		},

		registerHelpers: function() {
			var self = this;
			Handlebars.registerHelper({
				url : self.url,
				decimal : self.decimal
			});
		},

		pageScrolled: function() {
			var self = this;
			$(document).scroll(function() {
				var offsetTop = $(window).scrollTop(),
					winHeight = $(window).height(),
					docHeight = $(document).height();
				if(offsetTop + ( winHeight * 1.5 ) > docHeight) {
					self.loadData();
				}
			});
		},

		filter: function() {
			console.log('fdsaf');
			var self = Search;
			self.loadData(route(), true);
		}

		loadData: function(params, newres) {
			var self = this;
			if(self.loading) return;
			self.loading = true;
			self.offset += self.limit;
			$.extend(self.qStr, {
				limit: self.limit,
				offset: self.offset,
				sortby: self.sortby.val()
			});
			if(newres) delete self.qStr.offset;
			if(params) {
				self.qStr = $.extend({}, self.qStr, params);
			}
			$.getJSON('search/searchJson', self.qStr,  function(json) {
				if(newres) {
					self.resultContainer.empty();
				}
				self.appendResults(json);
			}).complete(function(resp){
				self.loading = false;
			});
		},

		appendResults: function(json) {
			var self = this,
				resultContainer = self.resultContainer;
			$.each(json, function(key, data) {
				data.cdn = self.cdn;
				data.full_url = 'institute/' + self.url(data.city_name) + '/' + self.url(data.state_name) + '/' + data.inst_url;
				data._id = data._id.$id;
				resultContainer.append(self.template(data));
			});
		}
	};
	en.filter = Search.filter;
}());
$(document).on('click', '._inst_like', function(e) {
	var self = $(this);
	userActions(self, 'like');
	e.preventDefault();
});
$(document).on('click', '._inst_wishlist', function(e) {
	var self = $(this);
	userActions(self, 'wishlist');
	e.preventDefault();
});
var userActions = function(self, action) {
	var action_id = self.closest('.edunuts-actions').data('ref');
	if(action_id == false) {
		customAlert('You need to login before you can like this.');
		return false;
	}
	var mode = self.data('mode');
	$.post('action/' + action, { like_id : action_id, mode : mode }, function(data, textStatus, xhr) {
		var newMode = (mode == '_l') ? '_u' : '_l';
		var iconRemoveClass = (mode == '_l') ? action + '-grey' : action + '-blue';
		var iconAddClass = (mode == '_l') ? action + '-blue' : action + '-grey';
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
$('.sorting-search').find('.dropdown-link').click(function(e) {
	e.preventDefault();
	$('input[name="sortby"]').val($(this).attr('href')).parents('form').get(0).submit();
});