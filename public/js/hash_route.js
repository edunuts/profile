var En = (function(en, $, w) {
	var Events = {
		events: {},
		register: function(name, callback) {
			if(!this.events[name]) {
				this.events[name] = [];
			}
			this.events[name].push(callback);
		},

		dispatch: function(name, caller, args) {
			if(args) {
				args.unshift(this);
			} else {
				args = [this];
			}
			if(this.events[name]) {
				var evts = this.events[name];
				for(var i = 0; i < evts.length; i++) {
					evts[i].apply(caller, args);
				}
			}
		}
	};

	var routesObj = {},
		routeGenrater = $(w).on('hashchange', function(e) {
		var hashString = w.location.hash.substr(1);
		routesObj = parseRoute(hashString);
		Events.dispatch('change', $.extend({}, routesObj));
	});

	// helper functions
	function encodelink(str) {
		return str.replace(/\s+/g, '_');
	}
	function decodelink(link) {
		return link.replace(/\_/g, ' ');
	}

	function isArray( item ) {
		return item instanceof Array;
	}

	function isObject(obj) {
		if(typeof obj == 'object' && obj !== null && !isArray(obj))  {
			return true;
		}
		return false;
	}

	function isString(str) {
		return typeof str == 'string';
	}
	function unique(array){
	    return array.filter(function(el, index, arr) {
	        return index === arr.indexOf(el);
	    });
	}
	// end helper function

	function parseRoute(hash) {
		if(!hash) return {};
		var routes = {},
			config = route.configs,
			parts = hash.split(config.seprator);
		for(var i = 0; i < parts.length; i++) {
			var part = parts[i];
			if(part) {
				var querys = part.split('=');
				if(querys[0] && querys[1]) {
					routes[querys[0]] = querys[1].split(config.array).map(decodelink);
				}
			}
		}
		return routes;
	}

	function joinRoute(routeObj) {
		var config = route.configs;
		return $.map(routeObj, function(val, k) {
			val = isArray(val) ? val.map(encodelink).join(config.array) : encodelink(val);
			return k + '=' + val;
		}).join(config.seprator);
	}

	function changeRoute(route) {
		var url = w.location.href.replace(/\#.*/, '');
		w.location.href = url + '#' + route;
	};

	var route = function( param ) {
		var myRoutes = $.extend({}, routesObj);
		if(!param) return myRoutes;
		if(isArray(param)) {
			return;
		}
		return myRoutes[param];
	};

	Object.defineProperties(route, {
		add: {
			value: function(value) {
				if(!isObject(value)) {
					Events.dispatch('error', $.extend({}, routesObj), 'invalid object passed');
					return this;
				}
				$.each(value, function(k, v) {
					var values = isString(v) ? [v] : v;
					if(!routesObj[k]) {
						routesObj[k] = [];
					}
					routesObj[k] = unique(routesObj[k].concat(v));
				});
				changeRoute(joinRoute(routesObj));
				Events.dispatch('add', $.extend({}, routesObj));
				return this;
			}
		},
		replace: {
			value: function(qrs) {
				for(var q in qrs) {
					var values = isArray(qrs[q]) ? qrs[q] : [qrs[q]];
					routesObj[q] = values;
				}
				changeRoute(joinRoute(routesObj));
				Events.dispatch('replace', this);
				return this;
			}
		},

		remove: {
			value: function(names, values) {
				if(names == undefined) return this;
				if(typeof names == 'string') {
					delete routesObj[names];
				} else if(names instanceof Array) {
					for(var i = 0; i < names.length; i++) {
						delete routesObj[names[i]];
					}
				} else if(names && typeof names == 'object') {
					for(var n in names) {
						if(routesObj[n]) {
							var r = routesObj[n],
							toRemove = names[n];
							if(!isArray(toRemove)) {
								toRemove = [toRemove];
							}
							for(var j = 0; j < toRemove.length; j++) {
								var val = toRemove[j];
								ind = r.indexOf(val);
								if(ind !== -1) {
									r.splice(ind, 1);
									routesObj[n] = r;
								}
							}
						}
					}
				}
				Events.dispatch('replace', $.extend({}, routesObj));
				changeRoute(joinRoute(routesObj));
				return this
			}
		},

		on: {
			value: function(event, callback) {
				Events.register(event, callback);
				return this;
			}
		},
		
		trigger: {
			value: function(event) {
				Events.dispatch(event, $.extend({}, routesObj));
				return this;
			}
		}
	})

	route.configs = {
		seprator: '/',
		array: '&&'
	}
	routeGenrater.trigger('hashchange');
	en.Route = route;
	return en;
})(En || {}, jQuery, window);