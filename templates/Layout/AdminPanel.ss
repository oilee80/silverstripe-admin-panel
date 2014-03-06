<div class="admin-panel current-state-{$AdminPanelCurrentStage}">
	<ul>
		<li class="home"><a href="$HomeLink">Home</a>
		<li class="admin-home"><a href="$AdminHome">Admin</a></li>
		<li class="current-stage"><span>Current Stage: <strong>$AdminPanelCurrentStage</strong></span></li>
		<% if AdminPanelCurrentStage = Live %>
			<li class="stage-link"><a href="$AdminPanelStageLink">Stage</a></li>
		<% else %>
			<li class="live-link"><a href="$AdminPanelLiveLink">Live</a></li>
		<% end_if %>
		<li class="cms-link"><a target="admin_page" href="$AdminPanelCMSLink">Edit Page</a></li>
		<li class="debug">$Debug</li>
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