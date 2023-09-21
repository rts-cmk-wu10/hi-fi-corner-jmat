const NEXT_IMG = document.querySelector("#Next")
const PREV_IMG = document.querySelector("#Prev")

NEXT_IMG.addEventListener("click",(function(){
	document.querySelector("#Slider").append(document.querySelector("#Slider img:first-of-type"));
}));

PREV_IMG.addEventListener("click", (function(){
	document.querySelector("#Slider").prepend(document.querySelector("#Slider img:last-of-type"));
}));