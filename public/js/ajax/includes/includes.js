function change_langage(json_content_page, response, lang_request) {
    header_json(json_content_page, response);
    newsletter_json(json_content_page);
    pre_footer_json(json_content_page);
    post_footer_json(json_content_page);
    fill_social_media(json_content_page);
}

function header_json(json_content_page, response) {
    /* ----------------- Phone Header Start ----------------- */
    $("#header_phone_header").removeAttr("href");
    $("#header_phone_header").attr("href", json_content_page.header.phone_header.href);
    $("#header_phone_header").html(json_content_page.header.phone_header.caption);
    /* ----------------- Langage Header End ----------------- */

    /* ----------------- Email Header Start ----------------- */
    $("#header_email_header").removeAttr("href");
    $("#header_email_header").attr("href", json_content_page.header.email_header.href);
    $("#header_email_header").html(json_content_page.header.email_header.caption);
    /* ----------------- Email Header End ----------------- */

    /* ----------------- Langage Header Start ----------------- */
    $("#header_langage").html(json_content_page.header.header_langage);
    /* ----------------- Langage Header End ----------------- */

    /* ----------------- Load Header Start ----------------- */
    /* ----------------- Logo Start ----------------- */
    $("#logo_caption").html(json_content_page.header.menu.logo.caption);
    /* ----------------- Logo End ----------------- */

    /* ----------------- Menu Start ----------------- */
    $("#menu_home").html(json_content_page.header.menu.content.home);
    if (json_content_page.home.nom_page == response.nom_page) {
        $("#li_menu_home").attr("class", "active");
        $("#li_menu_about_us").removeAttr("class");
        $("#li_menu_who_us").removeAttr("class");
        $("#li_menu_team").removeAttr("class");
        $("#li_menu_services").removeAttr("class");
        $("#li_menu_our_services").removeAttr("class");
        $("#li_menu_assistant_it").removeAttr("class");
        $("#li_menu_blog").removeAttr("class");
        $("#li_menu_contact").removeAttr("class");
    }
    $("#menu_about_us").html(json_content_page.header.menu.content.about_us);
    /* if (json_content_page.qui_sommes_nous.nom_page == response.nom_page) {
        $("#li_menu_about_us").attr("class", "active");
        $("#li_menu_home").removeAttr("class");
        $("#li_menu_who_us").removeAttr("class");
        $("#li_menu_team").removeAttr("class");
        $("#li_menu_services").removeAttr("class");
        $("#li_menu_our_services").removeAttr("class");
        $("#li_menu_assistant_it").removeAttr("class");
        $("#li_menu_blog").removeAttr("class");
        $("#li_menu_contact").removeAttr("class");
    } */
    $("#menu_who_us").html(json_content_page.header.menu.content.who_us);
    if (json_content_page.qui_sommes_nous.nom_page == response.nom_page) {
        $("#li_menu_who_us").attr("class", "active");
        $("#li_menu_about_us").attr("class", "active");
        $("#li_menu_home").removeAttr("class");
        $("#li_menu_team").removeAttr("class");
        $("#li_menu_services").removeAttr("class");
        $("#li_menu_our_services").removeAttr("class");
        $("#li_menu_assistant_it").removeAttr("class");
        $("#li_menu_blog").removeAttr("class");
        $("#li_menu_contact").removeAttr("class");
    }
    $("#menu_team").html(json_content_page.header.menu.content.team);
    /* if (json_content_page.home.nom_page == response.nom_page) {
        $("#li_menu_team").attr("class", "active");
        $("#li_menu_about_us").removeAttr("class");
        $("#li_menu_who_us").removeAttr("class");
        $("#li_menu_home").removeAttr("class");
        $("#li_menu_services").removeAttr("class");
        $("#li_menu_our_services").removeAttr("class");
        $("#li_menu_assistant_it").removeAttr("class");
        $("#li_menu_blog").removeAttr("class");
        $("#li_menu_contact").removeAttr("class");
    } */
    $("#menu_services").html(json_content_page.header.menu.content.services);
    /* if (json_content_page.home.nom_page == response.nom_page) {
        $("#li_menu_services").attr("class", "active");
        $("#li_menu_about_us").removeAttr("class");
        $("#li_menu_who_us").removeAttr("class");
        $("#li_menu_team").removeAttr("class");
        $("#li_menu_home").removeAttr("class");
        $("#li_menu_our_services").removeAttr("class");
        $("#li_menu_assistant_it").removeAttr("class");
        $("#li_menu_blog").removeAttr("class");
        $("#li_menu_contact").removeAttr("class");
    } */
    $("#menu_our_services").html(json_content_page.header.menu.content.our_services);
    /* if (json_content_page.home.nom_page == response.nom_page) {
        $("#li_menu_our_services").attr("class", "active");
        $("#li_menu_about_us").removeAttr("class");
        $("#li_menu_who_us").removeAttr("class");
        $("#li_menu_team").removeAttr("class");
        $("#li_menu_services").removeAttr("class");
        $("#li_menu_home").removeAttr("class");
        $("#li_menu_assistant_it").removeAttr("class");
        $("#li_menu_blog").removeAttr("class");
        $("#li_menu_contact").removeAttr("class");
    } */
    $("#menu_assistant_it").html(json_content_page.header.menu.content.assistant_it);
    /* if (json_content_page.home.nom_page == response.nom_page) {
        $("#li_menu_assistant_it").attr("class", "active");
        $("#li_menu_about_us").removeAttr("class");
        $("#li_menu_who_us").removeAttr("class");
        $("#li_menu_team").removeAttr("class");
        $("#li_menu_services").removeAttr("class");
        $("#li_menu_our_services").removeAttr("class");
        $("#li_menu_home").removeAttr("class");
        $("#li_menu_blog").removeAttr("class");
        $("#li_menu_contact").removeAttr("class");
    } */
    $("#menu_blog").html(json_content_page.header.menu.content.blog);
    /* if (json_content_page.home.nom_page == response.nom_page) {
        $("#li_menu_blog").attr("class", "active");
        $("#li_menu_about_us").removeAttr("class");
        $("#li_menu_who_us").removeAttr("class");
        $("#li_menu_team").removeAttr("class");
        $("#li_menu_services").removeAttr("class");
        $("#li_menu_our_services").removeAttr("class");
        $("#li_menu_assistant_it").removeAttr("class");
        $("#li_menu_home").removeAttr("class");
        $("#li_menu_contact").removeAttr("class");
    } */
    $("#menu_contact").html(json_content_page.header.menu.content.contact);
    /* if (json_content_page.home.nom_page == response.nom_page) {
        $("#li_menu_contact").attr("class", "active");
        $("#li_menu_about_us").removeAttr("class");
        $("#li_menu_who_us").removeAttr("class");
        $("#li_menu_team").removeAttr("class");
        $("#li_menu_services").removeAttr("class");
        $("#li_menu_our_services").removeAttr("class");
        $("#li_menu_assistant_it").removeAttr("class");
        $("#li_menu_blog").removeAttr("class");
        $("#li_menu_home").removeAttr("class");
    } */
    /* ----------------- Menu End ----------------- */

    /* ----------------- Select Langage Start ----------------- */
    if (response.lang_selected == "fr") {
        $("#langage_fr").removeAttr("class");
        $("#langage_ar").removeAttr("class");
        $("#langage_en").removeAttr("class");
        $("#langage_es").removeAttr("class");
        $("#langage_fr").attr("class", "dropdown-item active");
        $("#langage_ar").attr("class", "dropdown-item");
        $("#langage_en").attr("class", "dropdown-item");
        $("#langage_es").attr("class", "dropdown-item");
    }
    if (response.lang_selected == "ar") {
        $("#langage_fr").removeAttr("class");
        $("#langage_ar").removeAttr("class");
        $("#langage_en").removeAttr("class");
        $("#langage_es").removeAttr("class");
        $("#langage_ar").attr("class", "dropdown-item active");
        $("#langage_fr").attr("class", "dropdown-item");
        $("#langage_en").attr("class", "dropdown-item");
        $("#langage_es").attr("class", "dropdown-item");
    }
    if (response.lang_selected == "en") {
        $("#langage_fr").removeAttr("class");
        $("#langage_ar").removeAttr("class");
        $("#langage_en").removeAttr("class");
        $("#langage_es").removeAttr("class");
        $("#langage_en").attr("class", "dropdown-item active");
        $("#langage_ar").attr("class", "dropdown-item");
        $("#langage_fr").attr("class", "dropdown-item");
        $("#langage_es").attr("class", "dropdown-item");
    }
    if (response.lang_selected == "es") {
        $("#langage_fr").removeAttr("class");
        $("#langage_ar").removeAttr("class");
        $("#langage_en").removeAttr("class");
        $("#langage_es").removeAttr("class");
        $("#langage_es").attr("class", "dropdown-item active");
        $("#langage_ar").attr("class", "dropdown-item");
        $("#langage_en").attr("class", "dropdown-item");
        $("#langage_fr").attr("class", "dropdown-item");
    }
    /* ----------------- Select Langage End ----------------- */
    /* ----------------- Load Header End ----------------- */
}

function newsletter_json(json_content_page) {
    /* ----------------- Newsletter Start ----------------- */
    $("#newsletter_last_us").html(json_content_page.newsletter.last_us);
    $("#newsletter_sign_up").html(
        json_content_page.newsletter.newsletter_sign_up
    );
    $("#newsletter_email").removeAttr("placeholder");
    $("#newsletter_email").attr(
        "placeholder",
        json_content_page.newsletter.newsletter_sign_up
    );
    $("#newsletter_submit").removeAttr("value");
    $("#newsletter_submit").attr(
        "value",
        json_content_page.newsletter.newsletter_submit.before
    );
    /* ----------------- Newsletter End ----------------- */
}

function pre_footer_json(json_content_page) {
    /* ----------------- Pre-Footer Start ----------------- */
    /* ----------------- About Start ----------------- */
    $("#footer_pre_footer_about_title").html(
        json_content_page.footer.pre_footer.about.title
    );
    $("#footer_pre_footer_about_content").html(
        json_content_page.footer.pre_footer.about.content
    );
    /* ----------------- About End ----------------- */

    /* ----------------- Useful Links Start ----------------- */
    $("#footer_pre_footer_useful_links_title").html(
        json_content_page.footer.pre_footer.useful_links.title
    );
    var html_footer_pre_footer_useful_links_links = "";
    $.each(json_content_page.footer.pre_footer.useful_links.links, function (
        key,
        value
    ) {
        html_footer_pre_footer_useful_links_links +=
            '<li><a href="' + value.href + '">' + value.caption + "</a></li>";
    });
    $("#footer_pre_footer_useful_links_links").html(
        html_footer_pre_footer_useful_links_links
    );
    /* ----------------- Useful Links End ----------------- */
    /* ----------------- Pre-Footer End ----------------- */
}

function post_footer_json(json_content_page) {
    /* ----------------- Post-Footer Start ----------------- */
    $("#footer_post_footer_copyright").html(
        json_content_page.footer.post_footer.copyright
    );
    $("#footer_post_footer_top_page").html(
        json_content_page.footer.post_footer.top_page
    );
    /* ----------------- Post-Footer End ----------------- */
}

function subscribe_newsletter(json_content_page) {
    $(".subs-button").val(json_content_page.newsletter.newsletter_submit.pending);
    setTimeout(function () {
        $(".subs-button").val(json_content_page.newsletter.newsletter_submit.after);
        setTimeout(function () {
            $(".subs-button").val(
                json_content_page.newsletter.newsletter_submit.before
            );
            $("#subscribe-form")[0].reset();
        }, 2000);
    }, 3000);
}

function fill_social_media(json_content_page) {
    $(".a_facebook_hover").removeAttr("href");
    $(".a_facebook_hover").attr("href", json_content_page.header.social_media_header.facebook.href);
    $(".a_facebook_hover").html(json_content_page.header.social_media_header.facebook.caption);
    $(".a_twitter_hover").removeAttr("href");
    $(".a_twitter_hover").attr("href", json_content_page.header.social_media_header.twitter.href);
    $(".a_twitter_hover").html(json_content_page.header.social_media_header.twitter.caption);
    $(".a_gplus_hover").removeAttr("href");
    $(".a_gplus_hover").attr("href", json_content_page.header.social_media_header.gplus.href);
    $(".a_gplus_hover").html(json_content_page.header.social_media_header.gplus.caption);
    $(".a_linkedin_hover").removeAttr("href");
    $(".a_linkedin_hover").attr("href", json_content_page.header.social_media_header.linkedin.href);
    $(".a_linkedin_hover").html(json_content_page.header.social_media_header.linkedin.caption);
    $(".a_instagram_hover").removeAttr("href");
    $(".a_instagram_hover").attr("href", json_content_page.header.social_media_header.instagram.href);
    $(".a_instagram_hover").html(json_content_page.header.social_media_header.instagram.caption);
    $(".a_github_hover").removeAttr("href");
    $(".a_github_hover").attr("href", json_content_page.header.social_media_header.github.href);
    $(".a_github_hover").html(json_content_page.header.social_media_header.github.caption);
}