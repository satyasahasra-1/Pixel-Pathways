(function(){
	const PROG_KEY = 'quiz_progress';
	function getProgress(){ return Store.get(PROG_KEY, {}); }
	function setProgress(p){ Store.set(PROG_KEY, p); }
	function recordAttempt(classId, subjectId, scope, scopeId, score){
		const p = getProgress();
		const key = `${classId}:${subjectId}`;
		p[key] = p[key] || { textbook: {}, lessons: {} };
		if(scope==='textbook') p[key].textbook = { score, ts: Date.now() };
		if(scope==='lesson') p[key].lessons[scopeId] = { score, ts: Date.now() };
		setProgress(p);
	}
	function getQuiz(classId, subjectId, scope, scopeId){
		const s = DB.quizzes[classId][subjectId];
		return scope==='textbook' ? s.textbook : s.lessons[scopeId];
	}
	function renderQuiz(root, {classId, subjectId, scope, scopeId}){
		const quiz = getQuiz(classId, subjectId, scope, scopeId);
		const form = document.createElement('form');
		form.className = 'card p-3';
		form.innerHTML = `<h5 class="mb-3">${quiz.title}</h5>`;
		quiz.questions.forEach((qq, qi)=>{
			const group = document.createElement('div'); group.className='mb-3';
			group.innerHTML = `<div class="fw-semibold">${qi+1}. ${qq.q}</div>` +
				qq.options.map((opt, oi)=>`<div class="form-check"><input class="form-check-input" type="radio" name="q${qi}" value="${oi}" id="q${qi}o${oi}"><label class="form-check-label" for="q${qi}o${oi}">${opt}</label></div>`).join('');
			form.appendChild(group);
		});
		const submit = document.createElement('button'); submit.className='btn btn-primary'; submit.textContent='Submit';
		form.appendChild(submit);
		form.addEventListener('submit', (e)=>{
			e.preventDefault();
			let correct = 0;
			quiz.questions.forEach((qq, qi)=>{
				const sel = form.querySelector(`input[name="q${qi}"]:checked`);
				if(sel && parseInt(sel.value,10) === qq.answer) correct++;
			});
			const score = Math.round((correct / quiz.questions.length) * 100);
			recordAttempt(classId, subjectId, scope, scopeId, score);
			const badge = UI.getBadgeForScore(score);
			const res = UI.alert('success', `Score: ${score}%. Badge: <span class="badge ${badge.class} badge-tier">${badge.label}</span>`);
			root.prepend(res);
		});
		root.appendChild(form);
	}
	function renderQuizzesPage(root){
		const grid = document.createElement('div'); grid.className='row g-3';
		DB.classes.forEach(c=>{
			c.subjects.forEach(s=>{
				const body = `
					<div class="d-flex flex-wrap gap-2">
						<a class="btn btn-outline-primary btn-sm" href="#/takequiz/${c.id}/${s.id}/textbook">Textbook Quiz</a>
						${s.lessons.map(l=>`<a class="btn btn-outline-secondary btn-sm" href="#/takequiz/${c.id}/${s.id}/lesson/${l.id}">Lesson ${l.id}</a>`).join('')}
					</div>`;
				const col = UI.el(`<div class="col-12 col-md-6 col-xl-4"></div>`);
				col.appendChild(UI.card({ title: `${c.name} - ${s.name}`, body }));
				grid.appendChild(col);
			});
		});
		root.appendChild(grid);
	}
	window.Quizzes = { renderQuiz, renderQuizzesPage };
})();


