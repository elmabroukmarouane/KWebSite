<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield('title')</title>

        <!-- Favicon -->
        <link rel="shortcut icon" href="images/favicon.png" type="image/png">

        <!-- base css -->
        <link href="css/font-awesome.css" rel="stylesheet">
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/owl.carousel.css" rel="stylesheet">
        <link href="css/lightbox.css" rel="stylesheet">
        <link href="css/meanmenu.css" rel="stylesheet">
        <link href="css/animate.css" rel="stylesheet">

        <!-- custom css -->
        <link href="css/styles.css" rel="stylesheet">
        <link href="css/responsive.css" rel="stylesheet">
        <link href="css/color/color-3.css" rel="stylesheet">

        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet">

        <!-- Flag CSS -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/css/flag-icon.min.css" rel="stylesheet">

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesnt work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        <style>
            .facebook_hover:hover {
                background: #3b5998 !important;
                color: #fff !important;
            }
            .twitter_hover:hover {
                background: #1da1f2 !important;
                color: #fff !important;
            }
            .gplus_hover:hover {
                background: #dd4b39 !important;
                color: #fff !important;
            }
            .linkedin_hover:hover {
                background: #0077b5 !important;
                color: #fff !important;
            }
            .instagram_hover:hover {
                background: #e1306c !important;
                color: #fff !important;
            }
            .github_hover:hover {
                background: #333 !important;
                color: #fff !important;
            }
            .read_more:hover {
                text-decoration: none !important;
                background: #26b7e7 !important;
                color: #fff !important;
            }
        </style>
	</head>
    <body>	

        @include("includes.preloader")
        @include("includes.header")
        @yield('content')
        @include("includes.newsletter")
        @include("includes.footer")

        <!--JQuery scripts -->
        <script src="js/jquery-2.1.4.min.js"></script>	
        <script src="js/tether.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/owl.carousel.js"></script>
        <script src="js/jquery-counter.js"></script> 
        <script src="js/waypoints.js"></script>
        <script src="js/jquery.meanmenu.js"></script>
        <script src="js/jquery-validator.js"></script>
        <script src="js/jquery.ajaxchimp.min.js"></script>
        <script src="js/jquery-mixitup.js"></script>
        <script src="js/jquery.appear.js"></script>
        <script src="js/lightbox.js"></script>
        <script src="js/wow.js"></script>
        <div id="fb-root"></div>
        <script>
            (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v3.1&appId=631739703692499&autoLogAppEvents=1';
            fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        </script>
        @if($nom_page == "Contact")
        <!-- Google Map js -->		
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDeEODj4mnpmSCoPcBVOIPzzHXRZLHHd3Q&amp;callback=initMap" async defer></script>
        <script>
            function initMap() {
            var mapOptions = {
                zoom: 15,
                scrollwheel: false,
                center: new google.maps.LatLng(50.4727578,10.8470575)
            };
            var map = new google.maps.Map(document.getElementById('map-id'),
                mapOptions);
            var marker = new google.maps.Marker({
                position: map.getCenter(),
                map: map
            });
            }
            /*END GOOGLE MAP*/	
        </script>
        @endif
        <script src="js/scripts.js"></script>	
        <script>
            if ($("#form-comment-box").length > 0)
            {
                $("#form-comment-box").validate({
                    ignore: ":hidden",
                    rules: {
                    comment_website: {
                        required: true,
                    },
                    comment_email: {
                        required: true,
                        email: true,
                    },
                    comment_text: {
                        required: true,
                    }
                    },
                    submitHandler: function (form) {
                    $("#comment_btn").html('Sending... <i class="fa fa-paper-plane"></i>');
                    setTimeout(function(){ 
                        $("#comment_btn").html('Success <i class="fa fa-paper-plane"></i>'); $("#form-comment-box")[0].reset(); 
                        setTimeout(function(){ 
                            $("#comment_btn").html('Comments');  
                        }, 2000);
                    }, 2000);
                    /* $.ajax({
                            type: "POST",
                            url: "php/contact-send.php",
                            data: $("#contact-form").serialize(),
                            success: function () {
                            $("#contact-btn").html('Success <i class="fa fa-paper-plane"></i>');
                            $("#contact-form")[0].reset();
                        }
                    }); */
                    return false; // required to block normal submit since you used ajax
                    }

                });
            }
        </script>
        <script type="text/javascript" src="js/ajax/includes/includes.js"></script>
        @yield('ajax_page')
	</body>
</html>