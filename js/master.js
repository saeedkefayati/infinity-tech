new Glide('.glide', {
	type: 'carousel',
	startAt: 1,
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
