!function(a){var b=a({});a.each({trigger:"publish",on:"subscribe",off:"unsubscribe"},function(c,d){a[d]=function(){b[c].apply(b,arguments)}})}(jQuery);

String.prototype.capitalize = function(word) {
	if(word) {
		return this.replace(/\w\S*/g, function(txt) {
	        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	    });
	}
	return this.replace(/^./, function(f) {
		return f.toUpperCase();
	})
}

function log(arg) {
	console.log(arg);
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
function array_unique(array){
    return array.filter(function(el, index, arr) {
        return index === arr.indexOf(el);
    });
}

function count(value) {
	if(isArray(value)) {
		return value.length;
	}
	if(isObject(value)) {
		return Object.keys(value).length;
	}
	return 0;
}