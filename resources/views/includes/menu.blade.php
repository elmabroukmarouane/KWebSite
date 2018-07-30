<!-- top bar -->
		  	<div class="container">
				<!--Logo-->
				<div class="logo"><a href="{{ url('accueil') }}" style="color: #26b7e7; font-weight: bold;">{{--  <img src="images/logo-3.png" alt="logo"/>  --}}<span id="logo_caption"></span></a></div>
				<!--Logo end -->
				<!--Right Area-->
				<div class="right-area">
					<nav class="header-nav header-2">
	                    <ul id="navigation">
	                        <li id="li_menu_home"><a href="{{ url('accueil') }}"><span id="menu_home"></span></a>
	                        </li>
	                        <li id="li_menu_about_us">
								<a href="javascript:void(0)"><span id="menu_about_us"></span><i class="fa fa-angle-down"></i></a>
								<ul>
									<li id="li_menu_who_us"><a href="{{ url('qui-sommes-nous') }}"><span id="menu_who_us"></span></a></li>
									<li id="li_menu_team"><a href="{{ url('notre-equipe') }}"><span id="menu_team"></span></a></li>
								</ul>
	                        </li>
	                        <li id="li_menu_services">
	                            <a href="javascript:void(0)"><span id="menu_services"></span><i class="fa fa-angle-down"></i></a>
								<ul>
			                        <li id="li_menu_our_services"><a href="{{ url('nos-services') }}"><span id="menu_our_services"></span></a></li>
		                      	</ul>
	                        </li>
	                        <li id="li_menu_assistant_it">
	                            <a href="{{ url('assistant-it') }}"><span id="menu_assistant_it"></span></a>
	                        </li>
	                        <li id="li_menu_blog">
	                            <a href="{{ url('blog') }}"><span id="menu_blog"></span></a>
	                        </li>
	                        <li id="li_menu_contact">
	                            <a href="{{ url('contactez-nous') }}"><span id="menu_contact"></span></a>
	                        </li>
	                    </ul>
                    </nav>
                </div> <!-- end right area -->
            </div>   
    	</div>