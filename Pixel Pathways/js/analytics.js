(function(){
	const USAGE_KEY = 'usage_minutes_by_day';
	function trackUsage(deltaMinutes){
		const today = new Date().toISOString().slice(0,10);
		const map = Store.get(USAGE_KEY, {});
		map[today] = (map[today]||0) + deltaMinutes;
		Store.set(USAGE_KEY, map);
	}
	function getUsage(){ return Store.get(USAGE_KEY, {}); }
	function getQuizProgress(){ return Store.get('quiz_progress', {}); }
	function renderAnalytics(root){
		const row = UI.el(`<div class="row g-3"></div>`);
		const c1 = UI.el(`<div class="col-12 col-xl-6"><div class="card"><div class="card-body"><h5>Daily Usage (minutes)</h5><canvas id="usageChart" height="200"></canvas></div></div></div>`);
		const c2 = UI.el(`<div class="col-12 col-xl-6"><div class="card"><div class="card-body"><h5>Quiz Performance</h5><canvas id="quizChart" height="200"></canvas></div></div></div>`);
		row.appendChild(c1); row.appendChild(c2); root.appendChild(row);
		// Usage chart
		const usage = getUsage();
		const labels = Object.keys(usage).sort();
		const data = labels.map(k=>usage[k]);
		new Chart(document.getElementById('usageChart'), { type:'line', data:{ labels, datasets:[{ label:'Minutes', data, borderColor:'#0d6efd' }]}, options:{ responsive:true, maintainAspectRatio:false } });
		// Quiz chart
		const prog = getQuizProgress();
		const scores = Object.values(prog).flatMap(v=>[ ...(v.textbook?.score?[v.textbook.score]:[]), ...Object.values(v.lessons||{}).map(l=>l.score) ]);
		const avg = scores.length ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length) : 0;
		new Chart(document.getElementById('quizChart'), { type:'bar', data:{ labels:['Average Score'], datasets:[{ label:'% Correct', data:[avg], backgroundColor:'#198754' }]}, options:{ indexAxis:'y', responsive:true, maintainAspectRatio:false } });
	}
	window.Analytics = { renderAnalytics, trackUsage };
})();


