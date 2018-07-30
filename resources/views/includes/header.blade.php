	<!--header area start-->
	<header id="main-header">
	  	<div class="header clearfix">
	  		<!-- top bar -->
	  		<div class="top-area">
	  			<div class="container">
		  			<div class="row">
			  			<div class="telephone_email_societe col-md-5 col-sm-12">
			  				<div class="row">
			  					<div class="col-md-6">
			  						<span class="ico-area"><a id="header_phone_header"><i class="fa fa-phone"></i></a></span>
			  					</div>
			  					<div class="col-md-6">
									<span class="ico-area"><a id="header_email_header"><i class="fa fa-envelope-o"></i></a></span>
			  					</div>
			  				</div>
			  			</div>
			  			<div class="reseau_sociaux_societe col-md-5 col-sm-12">
							<ul class="social-icons top-bar">
								<li><a class="a_facebook_hover"></a></li>
								<li><a class="a_twitter_hover"></a></li>
								<li><a class="a_gplus_hover"></a></li>
								<li><a class="a_linkedin_hover"></a></li>
								<li><a class="a_instagram_hover"></a></li>
								<li><a class="a_github_hover"></a></li>
							</ul>	
			  			</div>
			  			<div class="header_langage_societe col-md-2 col-sm-12 col-xs-12">
							<div class="dropdown">
								<a class="btn btn-secondary dropdown-toggle" href="javascript:void(0)" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<span id="header_langage"></span>
								</a>
								<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<a class="dropdown-item active" href="javascript:void(0)" onclick="json_content_page = loadJsonFile('fr');" id="langage_fr"><span class="flag-icon flag-icon-fr"></span>&nbsp;Français</a>
									<a class="dropdown-item" href="javascript:void(0)" onclick="json_content_page = loadJsonFile('ar');" id="langage_ar"><span class="flag-icon flag-icon-ma"></span>&nbsp;العربية</a>
									<a class="dropdown-item" href="javascript:void(0)" onclick="json_content_page = loadJsonFile('en');" id="langage_en"><span class="flag-icon flag-icon-us"></span>&nbsp;English</a>
									<a class="dropdown-item" href="javascript:void(0)" onclick="json_content_page = loadJsonFile('es');" id="langage_es"><span class="flag-icon flag-icon-es"></span>&nbsp;Español</a>
								</div>
							</div>
			  			</div>
			  		</div>
			  	</div>
	  		</div>
			@include("includes.menu")
	</header>
	<!--Header end-->