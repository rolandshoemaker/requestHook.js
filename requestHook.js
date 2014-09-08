// requestHook.js - roland shoemaker 2014
// i guess this could be a little evil...

clone_addr = "127.0.0.l:8080"

getClone = $.get
$.get = function(e, r, i, o) {
	var parser = document.createElement('a');
	parser.href = e	
	getClone('http://'+clone_addr+parser.pathname+parser.search+parser.hash, r, i ,o);
	return getClone(e, r, i, o);
}

ajaxClone = $.ajax
$.ajax = function(e, n) {
	var parser = document.createElement('a');
	parser.href = e
	ajaxClone('http://'+clone_addr+parser.pathname+parser.search+parser.hash, n);
	return ajaxClone(e, n);
}


