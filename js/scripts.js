var add = document.getElementById('addElem');
var list = document.getElementById('list');
var listElement = document.getElementsByTagName('li')
add.addEventListener('click', function() {
var element = document.createElement('li');
element.innerHTML = 'item ' + (listElement.length);
list.appendChild(element);
});