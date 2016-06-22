angular.module('app').service('CookieService', CookieService);

function CookieService(phConfig) {
    function addCookie(k, v) {
        const t0 = encodeURIComponent(k) + '=' + encodeURIComponent(v) + '; domain=' + phConfig.serverDomain + '; path=/;';
        document.cookie = t0;
    }
    function removeCookie(k, v) {
        document.cookie = encodeURIComponent(k) + '=' + encodeURIComponent(v) + '; domain=' + phConfig.serverDomain + '; path=/; expires=' + new Date(0).toGMTString();
    }
    function getCookie(k) {
        let cookieFields = document.cookie.split('; ');
        let i = cookieFields.length;
        let cookies = {};
        while(i--) {
            let fieldTokens = cookieFields[i].split('=');
            cookies[fieldTokens[0]] = fieldTokens[1];
        }
        return cookies[k];
    }
    return {
        remove:removeCookie,
        put:addCookie,
        get:getCookie
    };
}
