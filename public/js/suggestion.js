var En = (function(en, $) {
	'use strict';
	var route, qField, wField, sCont, index, timer, requestTime, slide, lists, location, template, selectedItem, loadSuggestion = true, mainFormSearch;
	route = en.Route;
	requestTime = 200;
	slide: 100;
	qField = $('#query');
	mainFormSearch = qField.closest('form');
	wField = $('#where');
	sCont = $('#suggestion-container');
	template = Handlebars.compile($('#search-suggestion-template').html());
	var searchForm = $('#main-search-form');
	sCont.hide();

	// if form has been submitted no need to load or show suggestions.
	searchForm.submit(function(e) {
		loadSuggestion = false;
	});
	// registering handle bar helpers
	Handlebars.registerHelper({
		upper: function(str) {
			return (str||'').toUpperCase();
		},
		lower: function(str) {
			return (str||'').toLowerCase();
		},
		capitalize: function(str) {
			return (str||'').capitalize();
		},
		filterStr: function(str) {
			return (str||'').replace(/\~/g, ' ');
		}
	});
	// end handler bar

	// binding events
	qField.keyup(function(e) {
		var code = e.keyCode;
		if(code==27 || code==13 || code==38 || code==40) {
			return;
		}
		loadSuggestion = true;
		getData($(this).val(), wField.val());
		letChooseSuggestMe();
	});

	qField.focus(function() {
		openSuggestion();
	});

	$(document).click(function(e) {
		if($(e.target).closest('form').length == 0) {
			closeSuggestion();
		}
	});

	$(document).keydown(function (e) {
		if(sCont.is(':visible')) {
			navigate(e);
		}
	});

	var suggestMe = $('.suggest-me'),
		selectSuggMe = $('#selected-suggest-me');

	suggestMe.children('li').add(selectSuggMe).click(function() {
		var $this = $(this);
		suggestMe.stop().slideToggle();
		var value = $this.text();
		selectSuggMe.text(value).show();
		changePadding();
		qField.attr('data-suggest-me', true);
	});

	function letChooseSuggestMe() {
		if(!qField.attr('data-suggest-me')) {
			suggestMe.stop().slideDown();
		}
	}

	function changePadding() {
		qField.css({
			paddingLeft: selectSuggMe.outerWidth()
		}).focus();
	}

	sCont.on('click', 'a', function(e) {
		e.preventDefault();
		doAction($(this));
	});

	function doAction(link) {
		var where = link.data('where');

		if( where == 'colleges') {
			window.location.href = base_url + '/' + location + '/' + link.attr('href');
		} else {
			if(where == 'courses') {
				where = 'spec';
			}
			var value = link.attr('href') || link.data('value').replace(/\s/g, '_');
			window.location.href = base_url + '/' + location + '#' + where + '=' + value;
		}
		closeSuggestion();
	}
	

	function navigate(e) {
		var code = e.keyCode;
		if(code == 40) { // down
			index++;
			selectedItem = activeNavigation(e);
		} else if(code == 38) { // up
			index--;
			selectedItem = activeNavigation(e);
		} else if(code == 27) {
			closeSuggestion();
		} else if(code == 13) {
			if(selectedItem) {
				e.preventDefault();
				doAction(selectedItem.children('a'));
			} else {
				closeSuggestion();
			}
		}
		scroll(index);
	}

	function activeNavigation(e) {
		e.preventDefault();
		if(index >= lists.length) {
			index = 0;
		} else if(index < 0) {
			index = lists.length - 1;
		}
		if(qField.is(':focus')) qField.blur();
		var selectedItem = lists.eq(index).addClass('selected');
		selectedItem.siblings().removeClass('selected');
		return selectedItem;
	}

	function scroll(i) {
		!i||i++;
		var	len = lists.length,
			height = sCont.height(),
			sHeight = sCont[0].scrollHeight;
		sCont.animate({
			scrollTop: ((sHeight - height) / len) * i
		}, 100);
	}

	function scrollToDefault() {
		sCont.animate({scrollTop: 0}, 100);
	}

	function closeSuggestion() {
		sCont.slideUp(slide);
	}

	function openSuggestion() {
		if(lists && lists.length > 0) {
			sCont.slideDown(slide);
		}
		$(".location-pop").slideUp();
	}

	function getData(kwds) {
		var self = this;
		location = mainFormSearch.attr('action');
		clearTimeout(timer);
		if(kwds.length < 2) return;
		timer = setTimeout(function() {
			if(!loadSuggestion) return;
			$.getJSON(base_url + '/search/json-suggestion', {
				q: kwds,
				location: location
			}, function(res) {
				if(!loadSuggestion) return;
				append(res);
			});
		}, requestTime);
	}

	function append(res) {
		var t = template({suggestions: res});
		sCont.html(t);
		lists = sCont.find('li');
		openSuggestion();
		index = -1;
		scrollToDefault();
		selectedItem = null;
	}
	return en;
})(En || {}, jQuery);