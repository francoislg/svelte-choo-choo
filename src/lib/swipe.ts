export const swiper = (node, {onLeftSwipe, onRightSwipe}) => {
	let touchstartX = 0;
	let touchendX = 0;

	node.addEventListener('touchstart', (e) => {
		touchstartX = e.changedTouches[0].screenX;
	});

	node.addEventListener('touchend', (e) => {
		touchendX = e.changedTouches[0].screenX;
		if (touchendX < touchstartX) onLeftSwipe();
		if (touchendX > touchstartX) onRightSwipe();
	});
};
