(function(){
	const NS = 'pixel_pathways_v1';
	function key(k){ return `${NS}:${k}`; }
	function safeParse(v, fallback){
		try { return v === null ? fallback : JSON.parse(v); } catch { return fallback; }
	}
	window.Store = {
		get(k, fallback){ return safeParse(localStorage.getItem(key(k)), fallback); },
		set(k, v){ localStorage.setItem(key(k), JSON.stringify(v)); },
		remove(k){ localStorage.removeItem(key(k)); },
		pushToArray(k, item){ const arr = this.get(k, []); arr.push(item); this.set(k, arr); return arr; }
	};
})();


