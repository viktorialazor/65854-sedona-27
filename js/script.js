var button = document.querySelector(".searchHotel__button");
var popup = document.querySelector(".searchHotelForm");
var dateArrival = popup.querySelector("[name=arrival-date]");
var dateDeparture = popup.querySelector("[name=departure-date]");
var quantityAdult = popup.querySelector("[name=adult]");
var quantityChildren = popup.querySelector("[name=children]");

popup.classList.add("searchHotelForm--hide");

button.addEventListener("click", function(evt) {
	evt.preventDefault();

	if(popup.classList.contains("searchHotelForm--hide")) {
		popup.classList.remove("searchHotelForm--hide");
		popup.classList.add("searchHotelForm--show");
	} else if(popup.classList.contains("searchHotelForm--show")) {
		popup.classList.remove("searchHotelForm--show");
		popup.classList.remove("searchHotelForm--error");
		popup.classList.add("searchHotelForm--hide");
	}

});

popup.addEventListener("submit", function(evt) {
	if(!dateArrival.value || !dateDeparture.value || !quantityAdult.value || !quantityChildren.value) {
		evt.preventDefault();
		popup.classList.remove("searchHotelForm--error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("searchHotelForm--error");
	}
});

window.addEventListener("keydown", function(evt) {
	if(evt.keyCode === 27) {
		if(popup.classList.contains("searchHotelForm--show")) {
			evt.preventDefault();
			popup.classList.remove("searchHotelForm--show");
			popup.classList.remove("searchHotelForm--error");
			popup.classList.add("searchHotelForm--hide");
		}
	}
});