/* Проверка поддержки webp браузером */
export function isWebp() {
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	testWebP(function (support) {
		if (support == true) {
			document.querySelector("body").classList.add("webp");
		} else {
			document.querySelector("body").classList.add("no-webp");
		}
	});
}

export function collectionOnHover() {
	const itemClass = "circle__item",
		activeClass = "is-active",
		items = document.querySelectorAll(`.${itemClass}`),
		dataWrapper = document.querySelector(".circle__data");

	let handleHover = (e) => {
		let item = e.target.closest(`.${itemClass}`),
			dataId = item.dataset.item;
		if (!dataId) {
			console.error("data-item not set");
			return;
		}
		let target = dataWrapper.querySelector(`[data-item=${dataId}]`);
		if (!target) return;
		target.classList.add(activeClass);
	};

	let handleLeave = () => {
		let activeItem = document.querySelector(`.${activeClass}`);
		if (!activeItem) return;
		activeItem.classList.remove(activeClass);
	};

	items.forEach((el) => {
		el.addEventListener("mouseover", handleHover);
		el.addEventListener("mouseleave", handleLeave);
	});
}
