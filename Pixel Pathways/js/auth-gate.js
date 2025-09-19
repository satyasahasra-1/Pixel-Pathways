(function(){
	function isAuthed(){ return localStorage.getItem('pp_authed') === '1'; }
	if(!isAuthed()){
		// allow direct navigation to login page, otherwise redirect
		if(!/login\.html$/i.test(location.pathname)){
			location.href = 'login.html';
		}
	}
	window.Auth = { isAuthed };
})();
