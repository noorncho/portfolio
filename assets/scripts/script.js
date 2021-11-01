/** */
const hamburger = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".nav__menu");
const navItem = document.querySelectorAll(".nav__item");

hamburger.addEventListener("click", mobileMenu);
navItem.forEach(e => e.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


function submit(){
	alert("Thank you! Your message has been sent.");
}

/****************************************************
 * 			Project Details Overlay Effect
 ****************************************************/
/**
 * Turn on overlay modal when clicked on image
 * @param {*} img 
 */
function on(img){    
    document.getElementById("project__overlay" + img.id).style.display = "block";
}
/**
 * Turn off overlay modal
 * @param {*} mod 
 */
function off (mod){
    document.getElementById("" + mod.id).style.display = "none";
}


/**********************************************
 * 				Typing effect animation
 **********************************************/
var _CONTENT = [ 
	"Hello, I am ",
    "Bonjour"
];

var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;
var _ELEMENT = document.querySelector("#hello-text");
var _CURSOR = document.querySelector("#hello-cursor");

// Implements typing effect
function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	if(text === _CONTENT[_PART]) {
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);

		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 300);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 300);
