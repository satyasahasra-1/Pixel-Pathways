(function(){
	const timerEl = document.getElementById('sessionTimer');
	let start = Date.now();
	function quickTick(){
		const mins = (Date.now()-start)/60000;
		if(timerEl) timerEl.textContent = `Active time: ${Math.floor(mins)}m`;
	}
	setInterval(quickTick, 5000);
})();


