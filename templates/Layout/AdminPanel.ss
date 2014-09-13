<div class="admin-panel current-state-{$AdminPanelCurrentStage}" id="silverstripeAdminPanel">
	<ul>
		<li class="home"><a href="$HomeLink" title="<%t ADMIN_PANEL.Template.Home "Home" %>"><%t ADMIN_PANEL.Template.Home "Home" %></a>
		<li class="admin-home"><a href="$AdminHome" title="<%t ADMIN_PANEL.Template.Admin "Admin" %>"><%t ADMIN_PANEL.Template.Admin "Admin" %></a></li>
		<li class="current-stage"><span><%t ADMIN_PANEL.Template.CurrentStage "Current Stage" %>: <strong>$AdminPanelCurrentStage</strong></span></li>
		<% if AdminPanelCurrentStage = Live %>
			<li class="stage-link"><a href="$AdminPanelStageLink" title="<%t ADMIN_PANEL.Template.Stage "Stage" %>"><%t ADMIN_PANEL.Template.Stage "Stage" %></a></li>
		<% else %>
			<li class="live-link"><a href="$AdminPanelLiveLink" title="<%t ADMIN_PANEL.Template.Live "Live" %>"><%t ADMIN_PANEL.Template.Live "Live" %></a></li>
		<% end_if %>
		<li class="cms-link"><a target="admin_page" href="$AdminPanelCMSLink" title="<%t ADMIN_PANEL.Template.EditPage "Edit Page" %>"><%t ADMIN_PANEL.Template.EditPage "Edit Page" %></a></li>
		<% if ShowAdminDebug %>
			<li class="debug-record">
				$Debug
			</li>
		<% end_if %>
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
