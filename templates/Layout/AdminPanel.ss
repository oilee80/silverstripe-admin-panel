<div class="admin-panel current-state-{$AdminPanelCurrentStage}" id="silverstripeAdminPanel">
	<ul>
		<li class="home"><a href="$HomeLink"><%t ADMIN_PANEL.Template.Home "Home" %></a>
		<li class="admin-home"><a href="$AdminHome"><%t ADMIN_PANEL.Template.Admin "Admin" %></a></li>
		<li class="current-stage"><span><%t ADMIN_PANEL.Template.CurrentStage "Current Stage" %>: <strong>$AdminPanelCurrentStage</strong></span></li>
		<% if AdminPanelCurrentStage = Live %>
			<li class="stage-link"><a href="$AdminPanelStageLink"><%t ADMIN_PANEL.Template.Stage "Stage" %></a></li>
		<% else %>
			<li class="live-link"><a href="$AdminPanelLiveLink"><%t ADMIN_PANEL.Template.Live "Live" %></a></li>
		<% end_if %>
		<li class="cms-link"><a target="admin_page" href="$AdminPanelCMSLink"><%t ADMIN_PANEL.Template.EditPage "Edit Page" %></a></li>
		<li class="debug-record">
			$Debug
		</li>
		<% if ExtraAdminPanelLinks %>
			<% loop ExtraAdminPanelLinks %>
				<li class="$CSSClassName">
					<% if Link %>
						<a href="$Link">
					<% end_if %>
					$Title
					<% if Link %>
						</a>
					<% end_if %>
				</li>
			<% end_loop %>
		<% end_if %>
	</ul>
</div>
