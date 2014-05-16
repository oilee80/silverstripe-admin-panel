var adminPanel = {
	selector: '#silverstripeAdminPanel',
	openText: 'Open admin panel',
	closeText: 'Close admin panel',
	openClass: 'admin-panel-open',
	$elem: null,
	$toggle: null,

	_init: function($) {
		$(document.body).addClass( 'admin-panel-loaded' );
		adminPanel.$elem = $( adminPanel.selector );
		adminPanel.$toggle = $( '<span class="admin-panel-toggle" />' );
		adminPanel.$toggle.on( 'click', adminPanel.toggleClick );
		adminPanel.$toggle.text( adminPanel.openText );
		adminPanel.$toggle.attr( 'title', adminPanel.openText );
		adminPanel.$elem.after( adminPanel.$toggle );
	},

	toggleClick: function( ev ) {
		var body = $( document.body );
		if( body.hasClass( adminPanel.openClass ) ) {
			body.removeClass( adminPanel.openClass );
			adminPanel.$toggle.text( adminPanel.openText );
			adminPanel.$toggle.attr( 'title', adminPanel.openText );
		} else {
			body.addClass( adminPanel.openClass );
			adminPanel.$toggle.text( adminPanel.closeText );
			adminPanel.$toggle.attr( 'title', adminPanel.closeText );
		}
	}
};

(function( window, $ ){
	adminPanel._init($);
}( window, jQuery, undefined ));
