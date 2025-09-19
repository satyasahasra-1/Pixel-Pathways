(function(){
	function renderTeachers(root){
		const acc = document.createElement('div'); acc.className='accordion'; acc.id='teachersAcc';
		DB.classes.forEach((c, ci)=>{
			const item = document.createElement('div'); item.className='accordion-item';
			item.innerHTML = `
				<h2 class="accordion-header" id="h${ci}">
					<button class="accordion-button ${ci? 'collapsed':''}" type="button" data-bs-toggle="collapse" data-bs-target="#b${ci}">${c.name}</button>
				</h2>
				<div id="b${ci}" class="accordion-collapse collapse ${ci? '':'show'}" data-bs-parent="#teachersAcc">
					<div class="accordion-body">
						${c.subjects.map(s=>`
							<div class="mb-3">
								<div class="fw-semibold">${s.name}</div>
								<ul class="list-group">
									${s.teachers.map(t=>`<li class="list-group-item d-flex justify-content-between"><span>${t.name}</span><span class="text-muted small">${t.email}</span></li>`).join('')}
								</ul>
							</div>
						`).join('')}
					</div>
				</div>`;
			acc.appendChild(item);
		});
		root.appendChild(acc);
	}
	function renderAdminPanel(root){
		const wrap = UI.el(`<div class="row g-3"></div>`);
		const left = UI.el(`<div class="col-12 col-lg-7"></div>`);
		const right = UI.el(`<div class="col-12 col-lg-5"></div>`);
		left.appendChild(UI.card({ title:'Teachers by Subject', body: '', footer:'' }));
		right.appendChild(UI.card({ title:'Announcements', body: '<div id="annList"></div>', footer: '<div class="input-group"><input class="form-control" placeholder="New announcement"/><button class="btn btn-primary">Post</button></div>' }));
		wrap.appendChild(left); wrap.appendChild(right); root.appendChild(wrap);
		renderTeachers(left.querySelector('.card .card-text'));
		const postBtn = right.querySelector('button');
		const input = right.querySelector('input');
		const list = right.querySelector('#annList');
		function render(){
			list.innerHTML='';
			Notifications.list().forEach(n=>{ list.appendChild(UI.el(`<div class="small mb-1">• ${n.text}</div>`)); });
		}
		postBtn.addEventListener('click', ()=>{ if(!input.value.trim()) return; Notifications.add(input.value.trim()); input.value=''; render(); });
		render();
	}
	window.Admin = { renderAdminPanel };
})();
