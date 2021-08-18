import { draw } from 'svelte/transition';

const ezRbgToArray = (rgb) => rgb.substring(4, rgb.length-1)
.replace(/ /g, '')
.split(',');

const rgbWithAlpha = ([r, g, b, a]: number[]) => `rgb(${r} ${g} ${b} / ${(a || 0) * 100}%)`;

export function drawThenFill(node: SVGPathElement, params) {
	const color = getComputedStyle(node).fill;
	const rgb = ezRbgToArray(color);
	const fullDuration = params.duration || 800;
	const speed = params.fillDuration || (fullDuration / 3);
	const adjustedDuration = fullDuration - speed;

	const { delay, easing, css } = draw(node, {
		...params,
		duration: adjustedDuration
	});

	return {
		delay,
		duration: fullDuration,
		easing,
		css: (t, u) => {
			const time = t * fullDuration;
			const timeAfterAdjusted = time - adjustedDuration;
			const tAfterDelay = Math.max(timeAfterAdjusted / speed, 0);
			return `
				${css(t, u)};
				stroke-width: 1px;
				stroke: ${rgbWithAlpha([...rgb, 1 - tAfterDelay])};
				fill: ${rgbWithAlpha([...rgb, tAfterDelay])};
			`;
		}
	};
}