angular.module('app').service('CookieService', CookieService);

function CookieService() {
    function addCookie(name, value, domain) {
        const t0 = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; domain=' + domain + '; path=/;';
        document.cookie = t0;
    }
    function removeCookie(name, value, domain) {
        document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; domain=' + domain + '; path=/; expires=' + new Date(0).toGMTString();
    }
    function getCookie(k) {
        let cookieFields = document.cookie.split('; ');
        let cookies = document.cookie.split('; ').reduce((r, v) => {
            let fieldTokens = v.split('=');
            r[fieldTokens[0]] = fieldTokens[1];
            return r;
        }, {});

        return cookies[k];
    }
    return {
        remove:removeCookie,
        put:addCookie,
        get:getCookie
    };
}
