export const oneSvelteComp = (name: string, s: string, html: string, style?: string) => ({
	name,
	source: (s ? wrapScript(s) + '\n\n' : '') + html + (style ? '\n\n' + style : '')
});
export const onlyOneSvelteComp = (s: string, html: string, style?: string) => [oneSvelteComp("App", s, html, style)];
export const wrapScript = (s: string) => '<script lang="ts">\n' + s + '\n</script>';
export const wrapStyle = (s: string) => '<style>\n' + s + '\n</style>';
