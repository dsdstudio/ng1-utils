export default {
	removeCookie:removeCookie,
	addCookie:addCookie,
	getCookie:getCookie
};
function addCookie(name, value, domain) {
	document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; domain=' + domain + '; path=/;';
}
function removeCookie(name, value, domain) {
	document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; domain=' + domain + '; path=/; expires=' + new Date(0).toGMTString();
}
function getCookie(k) {
	let cookies = document.cookie.split('; ').reduce((r, v) => {
		let fieldTokens = v.split('=');
		r[fieldTokens[0]] = fieldTokens[1];
		return r;
	}, {});

	return cookies[k];
}
