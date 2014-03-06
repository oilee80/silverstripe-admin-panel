<?php

class AdminPanelDecorator extends DataExtension {

	private $page;

	public function AdminPanel() {

		// Does the user have access to the CMS?
		if( !Permission::check('CMS_ACCESS_CMSMain') ) {
			return;
		}

		// Does the user have permission to view CMS pages?
		if( !Permission::check('VIEW_DRAFT_CONTENT') ) {
			return;
		}

		$this->page = $this->owner;

		if( !$this->page )
			return;
		$moduleDir = basename( dirname( dirname( dirname( __FILE__ ) ) ) );
		Requirements::css( $moduleDir . '/css/css.css' );
		return $this->page->renderWith( 'AdminPanel' );
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
		return Controller::join_links($this->page->AbsoluteLink(), '?stage=Stage');
	}

	/**
	 * Change stage to Live
	 * @return String
	 */
	public function getAdminPanelLiveLink() {
		return Controller::join_links($this->page->AbsoluteLink(), '?stage=Live');
	}

	/**
	 * Absolute link to CMS Editor Page
	 * @return String
	 */
	public function getAdminPanelCMSLink() {
		return Controller::join_links( singleton('CMSPageEditController')->Link("show"), $this->page->ID);
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