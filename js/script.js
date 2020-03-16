var button = document.querySelector(".searchHotel__button");
var popup = document.querySelector(".searchHotelForm");
var dateArrival = popup.querySelector("[name=arrival-date]");
var dateDeparture = popup.querySelector("[name=departure-date]");
var quantityAdult = popup.querySelector("[name=adult]");
var quantityChildren = popup.querySelector("[name=children]");

var isStorageSupport = true;
var storageArrival = "";
var storageDeparture = "";
var storageAdult = "";
var storageChildren = "";

/* Нужно ли запоминать  поля, что-то   они у меня совсем не запоминаются , в лекции такое  было (но там  был пример с формой входа в личный кабинет  и запоминали только  поле Логин), а в описании задания только  анимация и чтобы  поля были не пустыми */
try {
	storageArrival = localStorage.getItem("dateArrival");
} catch (err) {
	isStorageSupport = false;
}

try {
	storageDeparture = localStorage.getItem("dateDeparture");
} catch (err) {
	isStorageSupport = false;
}

try {
	storageAdult = localStorage.getItem("quantityAdult");
} catch (err) {
	isStorageSupport = false;
}

try {
	storageChildren = localStorage.getItem("quantityChildren");
} catch (err) {
	isStorageSupport = false;
}

button.addEventListener("click", function(evt) {
	evt.preventDefault();

	if(popup.classList.contains("searchHotelForm--active")) {
		popup.classList.remove("searchHotelForm--active")
		popup.classList.remove("searchHotelForm--show");
		popup.classList.remove("searchHotelForm--error");
	} else {
		popup.classList.add("searchHotelForm--active")
		popup.classList.add("searchHotelForm--show");
	}

	if(storageArrival && storageDeparture && storageAdult && storageChildren) {
		dateArrival.value = storageArrival;
		dateDeparture.value = storageDeparture;
		quantityAdult.value = storageAdult;
		quantityChildren.value = storageChildren;
	} else if(storageArrival && storageDeparture && storageAdult) {
		dateArrival.value = storageArrival;
		dateDeparture.value = storageDeparture;
		quantityAdult.value = storageAdult;
		quantityChildren.focus();
	} else if(storageArrival && storageDeparture) {
		dateArrival.value = storageArrival;
		dateDeparture.value = storageDeparture;
		quantityAdult.focus();
	} else if(storageArrival) {
		dateArrival.value = storageArrival;
		dateDeparture.focus();
	} else {
		dateArrival.focus();
	}
});

popup.addEventListener("submit", function(evt) {
	if(!dateArrival.value || !dateDeparture.value || !quantityAdult.value || !quantityChildren.value) {
		evt.preventDefault();
		popup.classList.remove("searchHotelForm--error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("searchHotelForm--error");
	} else {
			localStorage.setItem("arrival-date", dateArrival.value);
			localStorage.setItem("departure-date", dateDeparture.value);
			localStorage.setItem("adult", quantityAdult.value);
			localStorage.setItem("children", quantityChildren.value);
		}
});

window.addEventListener("keydown", function(evt) {
	if(evt.keyCode === 27) {
		if(popup.classList.contains("searchHotelForm--active")) {
			evt.preventDefault();
			popup.classList.remove("searchHotelForm--active");
			popup.classList.remove("searchHotelForm--show");
			popup.classList.remove("searchHotelForm--error");
		}
	}
});