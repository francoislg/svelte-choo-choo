!(function () {
	'use strict';
	let e;
	const s = new Promise((s) => {
		e = s;
	});
	function i(e) {
		return new TextEncoder().encode(e).length;
	}
	let t;
	function n(e, s, t) {
		let n = 0,
			o = 0;
		const r = s.map(({ source: e }) => i(e)),
			c = i(e),
			a = Terser.minify(e);
		return (
			a.error ||
				((n = i(a.code)), (o = i(pako.gzip(a.code, { level: t.gzipLevel, to: 'string' })))),
			{ sources: r, compiled: c, minified: n, gzipped: o }
		);
	}
	self.addEventListener('message', async (i) => {
		const { id: o, type: r = 'sizes', compiled: c, components: a } = i.data;
		switch (r) {
			case 'init':
				(t = i.data.packagesUrl),
					importScripts(t + '/terser@4.6.3/dist/bundle.min.js'),
					importScripts(t + '/pako@1.0.11/dist/pako_deflate.min.js'),
					e();
				break;
			case 'sizes':
				await s, postMessage({ id: o, sizes: n(c, a, { gzipLevel: 6 }) });
		}
	});
})();
