import { Fancybox } from "@fancyapps/ui";
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";

addEventListener("DOMContentLoaded", () => {
	// Модальные окна
	const ru = {
		CLOSE: "Закрыть",
		NEXT: "Далее",
		PREV: "Назад",
	};

	const optionsBox = {
		l10n: ru,
	};

	Fancybox.bind("[data-fancybox]", optionsBox);

	let carousel = document.querySelector(".carousel");
	if (carousel) {
		new Carousel(carousel, {
			l10n: ru,
			slidesPerPage: 1,
			infinite: true,
			Navigation: true,
			Dots: true,
		});
	}
});
