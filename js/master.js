const goToTopButton = document.querySelector('.go-to--top');

const goToTopFunc = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};

goToTopButton.addEventListener('click', goToTopFunc);

new Glide('.glide', {
	type: 'carousel',
	startAt: 0,
	perView: 2,
	focusAt: 'center',
	gap: 24,
	autoplay: 8000,
	hoverpause: true,
	keyboard: true,
	//rewind: false,
	breakpoints: {
		768: {
			perView: 2,
		},
		480: {
			perView: 1,
		},
	},
}).mount();
