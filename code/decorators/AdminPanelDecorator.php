<?php

class AdminPanelDecorator extends DataExtension {

	/**
	 * Version of jQuery that will be used with the Admin Panel
	 * @const String
	 */
	const JQUERY_VERSION = '1.11.1';

	/**
	 * @var Boolean
	 */
	private static $includeJQuery = true;

	/**
	 * @param Boolean $val
	 */
	public static function setIncludeJQuery( $val ) {
		static::$includeJQuery = (bool)$val;
	}

	/**
	 * Returns '.min' if in Dev mode, this is allows for easier dubugging
	 * @return String
	 */
	public static function getJQueryType() {
		return Director::isDev( true ) ? '' : '.min';
	}

	public function AdminPanel() {

		// Does the user have access to the CMS?
		if( !Permission::check('CMS_ACCESS_CMSMain') ) {
			return;
		}

		// Does the user have permission to view CMS pages?
		if( !Permission::check('VIEW_DRAFT_CONTENT') ) {
			return;
		}

		if( !$this->owner )
			return;
		$moduleDir = basename( dirname( dirname( dirname( __FILE__ ) ) ) );
		Requirements::css( $moduleDir . '/css/css.css' );
		Requirements::javascript( $moduleDir . '/js/build/admin-panel.js' );
		if( static::$includeJQuery )
			Requirements::javascript( sprintf( '//ajax.googleapis.com/ajax/libs/jquery/%s/jquery%s.js', AdminPanelDecorator::JQUERY_VERSION, static::getJQueryType() ) );
		return $this->owner->renderWith( 'AdminPanel' );
	}

	/**
	 * Get the current staging environment
	 * @return String
	 */
	public function getAdminPanelCurrentStage() {
		return Versioned::current_stage();
	}

	/**
	 * Change stage to Stage
	 * @return String
	 */
	public function getAdminPanelStageLink() {
		return Controller::join_links($this->owner->AbsoluteLink(), '?stage=Stage');
	}

	/**
	 * Change stage to Live
	 * @return String
	 */
	public function getAdminPanelLiveLink() {
		return Controller::join_links($this->owner->AbsoluteLink(), '?stage=Live');
	}

	/**
	 * Absolute link to CMS Editor Page
	 * @return String
	 */
	public function getAdminPanelCMSLink() {
		return Controller::join_links( singleton('CMSPageEditController')->Link("show"), $this->owner->ID);
	}

	/**
	 * Absolute link to Home Page
	 * @return String
	 */
	public function getHomeLink() {
		return Director::baseURL();
	}

	/**
	 * Absolute link to Admin Section
	 * @return String
	 */
	public function getAdminHome() {
		return Director::baseURL() . 'admin';
	}

	public function getExtraAdminPanelLinks() {
		$extraAdminPanelLinks = new ArrayList();
		if( method_exists( $this->owner, 'AdminPanelLinks' ) )
			$this->owner->AdminPanelLinks( $extraAdminPanelLinks );
		$this->owner->extend( 'AdminPanelLinks', $extraAdminPanelLinks );
		return $extraAdminPanelLinks;
	}
}
