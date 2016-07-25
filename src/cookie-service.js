angular.module('app').service('CookieService', CookieService);

function CookieService() {
    function addCookie(domain, k, v) {
        const t0 = encodeURIComponent(k) + '=' + encodeURIComponent(v) + '; domain=' + domain + '; path=/;';
        document.cookie = t0;
    }
    function removeCookie(domain, k, v) {
        document.cookie = encodeURIComponent(k) + '=' + encodeURIComponent(v) + '; domain=' + domain + '; path=/; expires=' + new Date(0).toGMTString();
    }
    function getCookie(k) {
		var cookieFields,i,cookies;

        cookieFields = document.cookie.split('; '),
        i = cookieFields.length,
        cookies = {};
        while(i--) {
            fieldTokens = cookieFields[i].split('=');
            cookies[fieldTokens[0]] = fieldTokens[1];
        }
        return cookies[k];
    }
    return {
        removeCookie:removeCookie,
        addCookie:addCookie,
        getCookie:getCookie
    };
}
