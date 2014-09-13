var adminPanel = {
	selector: '#silverstripeAdminPanel',
	openText: 'Open admin panel',
	closeText: 'Close admin panel',
	openClass: 'admin-panel-open',
	$elem: null,
	$toggle: null,
	cookieName: 'silverstripe-admin-panel-state',
	cookieDuration: (1 * 24 * 60 * 60 * 1000),	// 1 Day

	_init: function($) {
		$(document.body).addClass( 'admin-panel-loaded' );
		adminPanel.$elem = $( adminPanel.selector );
		adminPanel.$toggle = $( '<span class="admin-panel-toggle" />' );
		adminPanel.$toggle.on( 'click', adminPanel.toggleClick );
		if( adminPanel.getCookie( adminPanel.cookieName ) == 'open'  ) {
			$( document.body ).addClass( adminPanel.openClass );
			adminPanel.$toggle.text( adminPanel.closeText );
			adminPanel.$toggle.attr( 'title', adminPanel.closeText );
		} else {
			adminPanel.$toggle.text( adminPanel.openText );
			adminPanel.$toggle.attr( 'title', adminPanel.openText );
		}
		adminPanel.$elem.after( adminPanel.$toggle );
	},

	toggleClick: function( ev ) {
		var body = $( document.body );
		if( body.hasClass( adminPanel.openClass ) ) {
			adminPanel.setCookie( adminPanel.cookieName, 'closed' );
			body.removeClass( adminPanel.openClass );
			adminPanel.$toggle.text( adminPanel.openText );
			adminPanel.$toggle.attr( 'title', adminPanel.openText );
		} else {
			adminPanel.setCookie( adminPanel.cookieName, 'open' );
			body.addClass( adminPanel.openClass );
			adminPanel.$toggle.text( adminPanel.closeText );
			adminPanel.$toggle.attr( 'title', adminPanel.closeText );
		}
	},

	setCookie: function(key, value) {
		var expires = new Date();
		expires.setTime(expires.getTime() + adminPanel.cookieDuration);
		document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
	},

	getCookie: function(key) {
		var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
		return keyValue ? keyValue[2] : null;
	}
};

jQuery(document).ready(function( window, $ ){
	adminPanel._init($);
}( window, jQuery, undefined ));
