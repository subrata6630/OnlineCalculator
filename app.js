
var result = document.getElementById('result');

var numObj = {
	'one' : '1',
	'two' : '2',
	'three' : '3',
	'four' : '4',
	'five' : '5',
	'six' : '6',
	'seven' : '7',
	'eight' : '8',
	'nine' : '9',
	'zero' : '0',
	
}

var opObj = {
	'plus' : ['&#43;','+'],
	'minus' : ['&minus;','-'],
	'multiply' : ['&times;', '*'],
	'divide' : ['&div;', '/'],
	'decimal' : ['&period;', '.']
}

var numElements = document.getElementsByClassName('num-btn');

for (var i = 0; i < numElements.length; i++) {
    numElements[i].addEventListener('click', function(){
    	numFunction(this.id);
    	
    }, false);
}

var opElements = document.getElementsByClassName('op-btn');

for (var i = 0; i < opElements.length; i++) {
    opElements[i].addEventListener('click', function(){
    	opFunction(this.id);
    }, false);
}

document.getElementById('equals').onclick = equalFunction;
document.getElementById('del').onclick = delFunction;
document.getElementById('clear').onclick = clearFunction;

var acct="";

function numFunction(clickedId){
//get value of btnObject based on btn ID
	if((result.innerHTML).length <11){
		result.innerHTML += numObj[clickedId];
		acct += numObj[clickedId];
		acct.toString();
	}
}

function opFunction(clickedId){
//get value of btnObject based on btn ID
	if((result.innerHTML).length <11){
		result.innerHTML += opObj[clickedId][0];
		acct += opObj[clickedId][1];
	}
}

function equalFunction(e){
	var total = eval(acct);
	result.innerHTML = Math.round(total*1000) / 1000;
	acct = Math.round(total*1000 / 1000);
}

function clearFunction(){
//clear result div
	result.innerHTML = '';
	acct = "";
}

function delFunction(){
//remove last character
	result.innerHTML = (result.innerHTML).slice(0, -1);
	acct = acct.slice(0, -1);
}

