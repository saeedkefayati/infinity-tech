new Glide('.glide', {
	type: 'slider',
	startAt: 0,
	perView: 2,
	focusAt: 'center',
	gap: 24,
	autoplay: 10000,
	hoverpause: true,
	keyboard: true,
	rewind: false,
	breakpoints: {
		768: {
			perView: 2,
		},
		480: {
			perView: 1,
		},
	},
}).mount();
