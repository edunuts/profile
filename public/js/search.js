var En = (function(en, $) {
	'use strict';
	// vaiables used in search

	var cdn, route, resultContainer, template, resultCounter, filterTag, page, loading, total_results_found, sortBy;

	cdn = en.cdn;
	route = En.Route;
	resultContainer = $('#result-container');
	template = Handlebars.compile($("#search-elems").html());
	resultCounter = $('.res-counter');
	filterTag = $('#filtertag');

	// registering handle bar helpers
	Handlebars.registerHelper({
		url : url,
		decimal : decimal
	});
	// end handler bar

	// helper functions
	function url(string) {
		if(typeof string == 'string') {
			return string.replace(/[^\w\.]+/g, '-').toLowerCase();
		}
	}

	function decimal(num, num1) {
		if(!num1) num1 = 0;
		num1 = parseFloat(num1);
		return num1.toPrecision(num);
	}
	// end helpers

	$('.search-sorting').find('a').click(function() {
		sortBy = $(this).attr('href');
		load();
	});

	// searching

	// events bindings
	// when page get scrolled
	$(document).scroll(function() {
		var offsetTop = $(window).scrollTop(),
			winHeight = $(window).height(),
			docHeight = $(document).height();
		if(offsetTop + ( winHeight * 1.5 ) > docHeight) {
			if(total_results_found > 0 && (((page - 1) * 10) < total_results_found)) {
				loadData();
			}
		}
	});

	// end event bindings

	// preparing params for requests
	function buildQuery(params) {
		var qStr = {
			location: en.location,
			page: page,
			'sort-by': sortBy
		};
		qStr = $.extend({}, route(), qStr);
		if(params) {
			$.extend(qStr, params);
		}
		return qStr;
	}

	function loadData( callback ) {
		var self = this,
			params = buildQuery( );
		if(loading) return;
		loading = true;
		preloader('show');
		$.getJSON('search/json-data', $.param(params))
		.complete(function( resp ) {
			loading = false;
			preloader('hide');
			resultContainer = resultContainer;
			if((resp.status !== 200 || !resp.responseJSON)) {
				something_wrong();
				return;
			}
			if(callback != undefined) {
				callback.call(this, resp.responseJSON);
			}
			appendResults( resp.responseJSON );
		});
	}
	/**
	 * @param  {JSONObject} Ajax respone
	 * @return {void}
	 */
	function appendResults( data ) {

		var res = data[0],
		count = res[1],
		len = Object.keys(res).length;
		if(typeof res !== 'string' && len > 0) {
			page++;
			$.each(res, function(key, data) {
				data.cdn = cdn;
				/*if(data.state == data.city) data.city = "";
				if(data.city == data.district) data.district = "";
				if(data.district == data.area) data.area = "";
				if(data.area == data.colony) data.colony = "";*/
				data.full_url = data.city.replace(/\s/g, '_').toLowerCase() + '/' + data.url;
				data.accreditations = data.accreditations.join(', ');
				$.each(data.companies, function(index, obj) {
					if(obj && !obj.logo) {
						data.companies.splice(index, 1);
					}
				});
				resultContainer.append(template(data));
			});
		}
	}

	// toggle preloader by passing jquery function arguments
	/**
	 * @param  {string} either show or hide, fadein and fadeout also
	 * @return {void}
	 */
	function preloader( action ) {
		if($('.search-preloader')[action]) {
			$('.search-preloader')[action]();
		}
	}

	// when no results found
	function no_results() {
		resultContainer.load(base_url + '/static/no-results.html');
	}

	// when something goes wrong
	function something_wrong() {
		resultContainer.load(base_url + '/static/something-wrong.html');
	}
	/**
	 * @param  {int} total number of results
	 * @return {void}
	 */
	function appCounting(count) {
		var query = route('q'), title;
		if(query) {
			title = count + ' Colleges found for "' + query + '"';
		} else {
			title = count + ' Colleges found';
		}
		resultCounter.text(title);
		addOrUpdateMetaTagsAndTitle(title);
	}

	function addOrUpdateMetaTagsAndTitle(title) {
		$('title').text(title);
		$('meta[name*=title]').attr('content', title);
	}


	// load search results and append to body
	function load() {
		resultContainer.empty();
		// restting page to zero, it will be set to 1 while building query.
		page = 1;
		// make loaded results empty
		loadData(function(res) {
			total_results_found = res[1];
			if(page <= 1 && total_results_found == 0)  {
				no_results();
				resultCounter.empty();
			} else {
				appCounting(total_results_found);
			}
		});
	}


	// when routes change trigger searches
	route.on('change', function() {
		if(en.doRequest === false) {
			return;
		}
		load();
	});

	en.Load = load;
	return en;
}(En || {}, jQuery));


$(document).on('click', '._inst_like', function(e) {
	e.preventDefault();
	var self = $(this);
	userActions(self, 'like');
});

$(document).on('click', '._inst_wishlist', function(e) {
	e.preventDefault();
	var self = $(this);
	userActions(self, 'wishlist');
});
var userActions = function(self, action) {
	var action_id = self.closest('.edunuts-actions').data('ref');
	if(action_id == false) {
		customAlert('You need to login before you can like this.');
		return false;
	}
	// alert(action_id);
	var mode = self.data('mode');
	$.post(base_url + '/institute/' + action, { like_id : action_id, mode : mode }, function(data, textStatus, xhr) {
		var newMode = (mode == '_l') ? '_u' : '_l';
		var iconRemoveClass = (mode == '_l') ? action + '-grey' : action + '-blue';
		var iconAddClass = (mode == '_l') ? action + '-blue' : action + '-grey';
		if(action == 'like') {
			var btnText = (mode == '_l') ? 'Unlike' : 'Like';
		} else {
			var btnText = (mode == '_l') ? 'Remove from Wishlist' : 'Add to Wishlist';
		}
		self.data('mode', newMode);
		self.toggleClass('active');
		self.children('.icon').removeClass(iconRemoveClass).addClass(iconAddClass);
		self.children('.icon-text').text(btnText);
	});
};
$(".filters-list").on('click', '.filter-head',function(e) {
	if($(e.target).is('.filter-head')) {
		e.preventDefault();
		$this = $(this);
		$this.siblings('.filter-children').slideToggle(function() {
			$this.toggleClass('collapsed');
		});
	}
});