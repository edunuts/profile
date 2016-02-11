var En = (function(en, $) {
	'use strict';

	var specBy = '~';


	// local scope global variables
	var route, cache, loading, searchTemplate, courseTemplate, addRoute = true, removeRoute = true, timer, requestTime;

	route = en.Route;
	cache: {};
	requestTime = 300;
	searchTemplate = Handlebars.compile($('#search-filter-template').html());
	courseTemplate = Handlebars.compile($('#course-filter-template').html());

	// registering handle bar helpers
	Handlebars.registerHelper({
		wsreplace: function(string) {
			return (string || '').replace(/\s/g, '_');
		}
	});
	
	// Registering jquery function toggle checked.
	$.fn.makeChecked = function(check) {
		check = (check == undefined) ? true : false;
		var el = this.prop('checked', check).parent();
		if(check) {
			el.addClass('active');
		} else {
			el.removeClass('active');
		}
		return this;
	}
	// end handler bar

	// binding events with jquery
	var filterElements = $('input.filter-list[data-name]');
	// load all filter on page load
	filterElements.each(function() {
		var n = $(this).data('name');
		loadData(n, '');
	});
	
	// on keyup
	filterElements.keyup(function() {
		var kwds = $(this).val(),
			n = $(this).data('name');
		clearTimeout(timer);
		timer = setTimeout(function() {
			loadData(n, kwds);
		}, requestTime);
	});



	function bindFilterEvent() {
		$('input[data-filter]').on('change', function() {
			var type = $(this).data('filter'),
				value = $(this).val(),
				selectedRoute = {};
			selectedRoute[type] = value;
			if($(this).prop('checked')) {
				route.add(selectedRoute);
				// selects any filter
				if(isHeading(this)) {
					findChildren(this).makeChecked();
					makeSpecDeActive(value, type);
				} else {
					if(isHeadingActive(this)) {
						findHeading(this).makeChecked(false);
					}
				}
			} else {
				route.remove(selectedRoute);
				if(isHeading(this)) {
					findChildren(this).makeChecked(false);
				} else {
					if(isHeadingActive(this)) {
						// deselect any of filter if parent was already selected
						var heading = findHeading(this).makeChecked(false).val();
						route.remove({courses: heading});
						makeSiblingsActive(this, type);
						return;
					}
				}
				// if deselects any filter
			}
		});
	}

	function makeSiblingsActive(el, type) {
		var siblings = $(el).parents('.checkbox-control').siblings().find('input[data-filter]');
			siblings.makeChecked();
		var filtersVal = $.map(siblings, function(e) {
			return $(e).val();
		});
		console.log('filter', filtersVal);
		var temp = {};
		temp[type] = filtersVal;
		route.replace(temp);
	}

	function makeSiblingsDeActive(el) {

	}
	function makeSpecDeActive(value, type) {
		var tempVal = value.trim().replace(/[^\w]+/g, '-').replace(/-\$/, '');
		console.log(tempVal);
		var values = $.map(route('spec'), function(val) {
			if(val.match(new RegExp('^' + tempVal, 'i'))) {
				return val;
			}
		});
		route.remove({spec: values});
	}

	function findChildren(el) {
		return $(el).parents('.filter-group').find('.filter-children').find('input[data-filter]');
	}

	function findHeading(el) {
		return $(el).parents('.filter-group').find('input.heading-filter');
	}

	function isHeading(el) {
		return $(el).hasClass('heading-filter');
	}
	function isHeadingActive(el) {
		return $(el).parents('.filter-group').find('input.heading-filter').prop('checked');
	}

	$('#filtertag').on('click', '.filter-tag', function(e) {
		e.preventDefault();
		var name = $(this).data('name'),
			tag = $(this).data('tag'),
			toRemove = {};
		toRemove[name] = tag;
		route.remove(toRemove);
		$(this).fadeOut(function() {
			$(this).remove();
		});
		removeFilterCheck(name, tag);
	});
	// end binding

	function filtering(data, query) {
		var newdata = [];
		for(var i = 0; i < data.length; i++) {
			if(data[i].match(new RegExp(query, 'i'))) {
				newdata.push(data[i]);
			}
		}
		return newdata;
	}

	function loadData(where, query) {
		var self = this,
		q = query;
		$.getJSON(base_url + '/search/json-filter', {
			where: where,
			query: q,
			location: en.location
		}, function(res) {
			append(where, res);
			activateChecked();
		});
	}

	route.on('change', function() {
		var html = [];
		$.each(route(), function(name, val) {
			if(name == 'q') return;
			for(var i=0; i < val.length; i++) {
				if(!val[i]) continue;
				html.push($('<a />', {
					'text': name.capitalize() + ' : ' + val[i].replace(/[\_|\-]/g, ' ').capitalize(true).replace(specBy, ' in '),
					'class': 'filter-tag',
					'data-name': name,
					'data-tag': val[i],
				})[0].outerHTML);
			}
		});
		$('#filtertag').html(html);
		// activateChecked();
	});

	function removeFilterCheck(name, value) {
		$('[data-filter="' + name + '"][value="' + value + '"]').makeChecked(false);
	}

	function bindSort() {
		var self = this;
		$('.search-sorting').change(function() {
			filter({sortby: $(this).val()});
		});
		var sort = route('sortby'),
			sortElem = $('.search-sorting'),
			txt = sortElem.find('.dropdown-link[href="'+ sort +'"]').text();
			txt = txt || sortElem.find('.dropdown-link').eq(0).text();
		sortElem.children('.label').text(txt);
	}
		
	function courseFilterTemplate( data ) {
		var others = null;
		for(var key in data) {
			if(key == 'others') {
				others = data[key];
				delete data[key];
			}
		}
		return courseTemplate({rows: data, others: others});
	}

	function searchFilterTemplate(where, data) {
		var out = [];
		for(var i = 0; i < data.length; i++) {
			var filter = data[i];
			filter.type = where;
			out.push(filter);
		}
		return searchTemplate({filters: out});
	}

	function append( where, data ) {
		var template;
		if(where == 'courses') {
			template = courseFilterTemplate( data );
		} else {
			template = searchFilterTemplate( where, data );
		}
		$('.ajax-filters[data-type="' + where + '"]').html( template );
		if(window['mycheckbox'] !== undefined) {
			mycheckbox();
		}
		bindFilterEvent();
	}

	function activateChecked() {
		$.each(route(), function(name, value) {
			$.each(value, function(k, v) {
				var a = $('[data-filter="' + name + '"][value="' + v + '"]').makeChecked();
				if(isHeading(a)) {
					findChildren(a).makeChecked();
				}
			});
		});
	}
	return en;
})(En || {}, jQuery);