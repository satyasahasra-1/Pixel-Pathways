(function(){
	const KEY = 'chat_threads';
	function threadKey(classId, subjectId){ return `${classId}:${subjectId}`; }
	function getThread(classId, subjectId){ const all = Store.get(KEY, {}); return all[threadKey(classId, subjectId)] || []; }
	function saveThread(classId, subjectId, msgs){ const all = Store.get(KEY, {}); all[threadKey(classId, subjectId)] = msgs; Store.set(KEY, all); }
	function renderChat(root){
		const picker = document.createElement('div'); picker.className='row g-2 align-items-end mb-2';
		picker.innerHTML = `
			<div class="col-12 col-md-3"><label class="form-label">Class</label><select class="form-select" id="chatClass"></select></div>
			<div class="col-12 col-md-3"><label class="form-label">Subject</label><select class="form-select" id="chatSubject"></select></div>
		`;
		root.appendChild(picker);
		const classSel = picker.querySelector('#chatClass');
		const subjSel = picker.querySelector('#chatSubject');
		DB.classes.forEach(c=>{ const o=document.createElement('option'); o.value=c.id; o.textContent=c.name; classSel.appendChild(o); });
		function populateSubj(){ subjSel.innerHTML=''; DB.classes.find(c=>c.id==classSel.value).subjects.forEach(s=>{ const o=document.createElement('option'); o.value=s.id; o.textContent=s.name; subjSel.appendChild(o); }); }
		classSel.addEventListener('change', populateSubj); populateSubj();
		const box = UI.el(`<div class="chat-box mb-2"></div>`); root.appendChild(box);
		const input = UI.el(`<div class="input-group"><input class="form-control" placeholder="Message the teacher..."/><button class="btn btn-primary">Send</button></div>`);
		root.appendChild(input);
		function renderThread(){
			box.innerHTML='';
			const msgs = getThread(classSel.value, subjSel.value);
			msgs.forEach(m=>{
				const row = document.createElement('div'); row.className=`message ${m.me?'me':'them'}`;
				row.innerHTML = `<div class="bubble">${m.text}</div>`;
				box.appendChild(row);
			});
			box.scrollTop = box.scrollHeight;
		}
		subjSel.addEventListener('change', renderThread); classSel.addEventListener('change', renderThread);
		input.querySelector('button').addEventListener('click', ()=>{
			const val = input.querySelector('input').value.trim(); if(!val) return;
			const msgs = getThread(classSel.value, subjSel.value);
			msgs.push({ me:true, text: val, ts: Date.now() });
			saveThread(classSel.value, subjSel.value, msgs);
			input.querySelector('input').value=''; renderThread();
			setTimeout(()=>{ // simple auto-reply from teacher
				const m2 = getThread(classSel.value, subjSel.value); m2.push({ me:false, text: 'Thanks for your message! We\'ll review it.', ts: Date.now() }); saveThread(classSel.value, subjSel.value, m2); renderThread();
			}, 600);
		});
		renderThread();
	}
	window.Chat = { renderChat };
})();
