export const swiper = (node, {minimumDistance = 300, onLeftSwipe, onRightSwipe}) => {
	let touchstartX = 0;

	node.addEventListener('touchstart', (e) => {
		touchstartX = e.changedTouches[0].screenX;
	});

	node.addEventListener('touchend', (e) => {
		const distance = e.changedTouches[0].screenX - touchstartX;
		if (distance < -minimumDistance) onLeftSwipe();
		if (distance > minimumDistance) onRightSwipe();
	});
};
