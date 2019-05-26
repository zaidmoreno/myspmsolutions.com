// var courses = new Array('HTML', 'CSS', 'JavaScript');

// alert(Math.PI);

var elem = document.getElementById('demo');
elem.innerHTML = 'It worked!';

var arr = document.getElementsByTagName('p');
for (var x = 0; x < arr.length; x++) {
	arr[x].innerHTML = 'For loop firing!';
}

var el = document.getElementById('myimg');
el.src = 'images/logo.png';
