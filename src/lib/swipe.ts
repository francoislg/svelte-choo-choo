export const swiper = (node, {minimumDistance = 200, onLeftSwipe, onRightSwipe}) => {
	let touchstartX = 0;

	node.addEventListener('touchstart', (e) => {
		touchstartX = e.changedTouches[0].screenX;
	});

	node.addEventListener('touchend', (e) => {
		const distance = e.changedTouches[0].screenX - touchstartX;
		console.log(distance, distance < - minimumDistance, distance > minimumDistance)
		if (distance < -minimumDistance) onLeftSwipe();
		if (distance > minimumDistance) onRightSwipe();
	});
};
