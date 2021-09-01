const doNothing = () => {
	// nothing;
};

export interface SwiperParams {
	minimumDistance?: number;
	onTriggerLeftSwipe?: () => void;
	onTriggerRightSwipe?: () => void;
	onReset?: () => void;
	onLeftSwipe: () => void;
	onRightSwipe: () => void;
}

export const swiper = (
	node,
	{
		minimumDistance = 150,
		onTriggerLeftSwipe = doNothing,
		onTriggerRightSwipe = doNothing,
		onReset = doNothing,
		onLeftSwipe,
		onRightSwipe
	}: SwiperParams
): void => {
	let touchstartX = 0;
	let isTriggered = false;

	node.addEventListener('touchstart', (e) => {
		touchstartX = e.changedTouches[0].screenX;
	});

	node.addEventListener('touchmove', (e) => {
		const distance = e.changedTouches[0].screenX - touchstartX;
		console.log(distance)
		if (!isTriggered) {
			if (distance < -minimumDistance) {
				onTriggerLeftSwipe();
				isTriggered = true;
			}
			if (distance > minimumDistance) {
				onTriggerRightSwipe();
				isTriggered = true;
			}
		} else {
			if (distance > -minimumDistance && distance < minimumDistance) {
				isTriggered = false;
				onReset()
			}
		}
	});

	node.addEventListener('touchend', (e) => {
		const distance = e.changedTouches[0].screenX - touchstartX;
		if (distance < -minimumDistance) onLeftSwipe();
		if (distance > minimumDistance) onRightSwipe();

		isTriggered = false;
	});
};
