(function(){
	function el(html){
		const template = document.createElement('template');
		template.innerHTML = html.trim();
		return template.content.firstChild;
	}
	function card({title, body, footer, classes=''}){
		return el(`
			<div class="card hoverable ${classes}">
				<div class="card-body">
					<h5 class="card-title">${title}</h5>
					<div class="card-text">${body||''}</div>
				</div>
				${footer?`<div class="card-footer d-flex gap-2">${footer}</div>`:''}
			</div>
		`);
	}
	function alert(type, text){
		return el(`<div class="alert alert-${type}" role="alert">${text}</div>`);
	}
	function table(headers, rowsHtml){
		return el(`
			<div class="table-responsive">
				<table class="table table-striped table-hover align-middle">
					<thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead>
					<tbody>${rowsHtml}</tbody>
				</table>
			</div>
		`);
	}
	function formatMinutes(mins){
		return `${Math.floor(mins)}m`; 
	}
	function getBadgeForScore(score){
		if(score >= 90) return {label:'Diamond', class:'bg-info'};
		if(score >= 75) return {label:'Gold', class:'bg-warning text-dark'};
		if(score >= 60) return {label:'Silver', class:'bg-secondary'};
		if(score >= 40) return {label:'Bronze', class:'bg-bronze'};
		return {label:'Starter', class:'bg-light text-dark'};
	}
	window.UI = { el, card, alert, table, formatMinutes, getBadgeForScore };
})();


