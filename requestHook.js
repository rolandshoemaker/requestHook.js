// requestHook.js - roland shoemaker 2014
// hooks $.ajax and by inheritence $.get and $.post, i guess this could be a little evil...

clone_addr = "127.0.0.1:8080";

ajaxClone = $.ajax
$.ajax = function (e, n) {
	var parser = document.createElement('a');
	if (typeof(e) == "object") {
		var copy = JSON.parse(JSON.stringify(e));
		parser.href = e.url;
		copy.url = 'http://'+clone_addr+parser.pathname+parser.search+parser.hash;
		ajaxClone(copy, n);
	} else {
		parser.href = e;
		ajaxClone('http://'+clone_addr+parser.pathname+parser.search+parser.hash, n);
	}
	return ajaxClone(e, n);
}




