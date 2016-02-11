(function() {
	'use strict';
	var Filter = {
		init: function() {
			this.fForm = $('#filter-form');
			this.addEvents();
			this.activateChecked();
			this.taging();
			this.bindFilter();
		},
		
		bindFilter: function() {
			var self = this;
			$('input[type="text"][data-name]').keyup(function() {
				var kwds = $(this).val();
				self.filterFilter($(this).data('name'), kwds);
			}).trigger('keyup');
		},

		filterFilter: function(name, kwds) {
			var limit = 10,
				i = 0;
			kwds = kwds.toLowerCase();
			var cnts = $('input[type="checkbox"][data-filter="' +  name + '"]').each(function() {
				var fb = $(this).closest('.checkbox-control');
				if( $(this).attr('data-label').toLowerCase().indexOf(kwds) == -1 ) {
					fb.hide();
				} else {
					if(i < limit) {
						fb.show();
						i++;
					}
				}
				if(i >= limit) {
					fb.hide();
				}
			}).length;
		},

		taging: function() {
			var self = this;
			$('.filter-tag').click(function(e) {
				e.preventDefault();
				$(this).fadeOut();
				var val = $(this).data('tag');
				var name = $(this).data('name');
				if(name == 'courses') {
					window.location.href = window.location.origin + window.location.pathname;
					return;
				}
				self.fForm.find('[value="' + val + '"]').prop('checked', false).trigger('change').parent().removeClass('active');
			})
		},

		addEvents: function() {
			var self = this;
			self.fForm.find('input[data-filter]').change(function() {
				var filter = $(this).data('filter');
				self.applyValue(filter);
			})
		},

		applyValue: function(filter) {
			var checkedFilter = [];
			this.fForm.find('[data-filter="' + filter + '"]').each(function(index, el) {
				if($(this).is(':checked')) {
					checkedFilter.push($(this).val());
				}
			});
			this.fForm.find('[name="' + filter + '"]').val(checkedFilter.join('~'));
			this.clearFilter();
			this.fForm.submit();
		},

		activateChecked: function() {
			var self = this,
				queryStr = window.location.search.substr(1),
				queries = queryStr.split('&');
			for(var i = 0; i < queries.length; i++) {
				var tmpF = queries[i].split('='),
					name = tmpF[0],
					value = decodeURIComponent(tmpF[1]);
				if(!tmpF[1]) continue;
				self.filFilterList(name, value);
				$.each(value.split('~'), function(k, v) {
					self.fForm.find('[data-filter="' + name + '"][value="' + v + '"]').prop('checked', true).parent().addClass('active');
				});
			}
		},

		filFilterList: function(name, value) {
			this.fForm.find('[name="' + name + '"]').val(value.replace(/\+/g, ' '));
		},
		clearFilter: function() {
			this.fForm.find('[name]').each(function() {
				if($(this).val() == '') {
					$(this).removeAttr('name');
				}
			});
		}
	}
	Filter.init();
})();