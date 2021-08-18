export const oneTypeScriptComp = (name: string, s: string) => ({
	name,
	type: 'js',
	source: s
});
export const oneSvelteComp = (name: string, s: string, html: string, style?: string) => ({
	name,
	source: (s ? wrapScript(s) + '\n' : '') + html + (style ? '\n' + wrapStyle(style) : '')
});
export const onlyOneSvelteComp = (s: string, html: string, style?: string) => [
	oneSvelteComp('App', s, html, style)
];
export const wrapScript = (s: string) => '<script>' + s + '\n</script>';
export const wrapStyle = (s: string) => '<style>' + s + '\n</style>';
