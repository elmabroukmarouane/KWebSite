function loadJsonFile(lang_request) {
    var json_content_page = null;
    $.ajax({
        url: "get-content-json-qui-sommes-nous/" + lang_request,
        type: "GET",
        async: false,
        success: function (response) {
            json_content_page = response[0];
            $("#lang_selected").val(response.lang_selected);
            change_langage(json_content_page, response);
            qui_sommes_nous_banner(json_content_page);
            home_propos_nous(json_content_page);
            /* qui_sommes_nous_propos_nous(json_content_page);
            qui_sommes_nous_services(json_content_page);
            qui_sommes_nous_portfolio(json_content_page); */
        }
    });
    return json_content_page;
}

function qui_sommes_nous_banner(json_content_page) {
    $("#inner-banner").attr(
        "style",
        json_content_page.qui_sommes_nous.banner.style
    );
}

function home_propos_nous(json_content_page) {
    $("#home_propos_nous_qui_sommes_nous").html(
        json_content_page.home.propos_nous.qui_sommes_nous
    );
    $("#home_propos_nous_prk_nous_choisir").html(
        json_content_page.home.propos_nous.prk_nous_choisir
    );
    $("#home_propos_nous_content").html(
        json_content_page.home.propos_nous.content
    );
    $("#home_propos_nous_a_propos_nous").attr(
        "href",
        json_content_page.home.propos_nous.a_propos_nous.href
    );
    $("#home_propos_nous_a_propos_nous").html(
        json_content_page.home.propos_nous.a_propos_nous.caption
    );
    $("#home_propos_nous_a_propos_nous").attr(
        "style",
        "display:none;"
    );
    $("#home_propos_nous_backgroud").attr(
        "src",
        json_content_page.home.propos_nous.background.src
    );
    $("#home_propos_nous_backgroud").attr(
        "alt",
        json_content_page.home.propos_nous.background.alt
    );
    $("#home_propos_nous_backgroud").attr(
        "title",
        json_content_page.home.propos_nous.background.title
    );
}

/* function qui_sommes_nous_propos_nous(json_content_page) {
    $("#qui_sommes_nous_propos_nous_qui_sommes_nous").html(
        json_content_page.qui_sommes_nous.propos_nous.qui_sommes_nous
    );
    $("#qui_sommes_nous_propos_nous_prk_nous_choisir").html(
        json_content_page.qui_sommes_nous.propos_nous.prk_nous_choisir
    );
    $("#qui_sommes_nous_propos_nous_content").html(
        json_content_page.qui_sommes_nous.propos_nous.content
    );
    $("#qui_sommes_nous_propos_nous_a_propos_nous").attr(
        "href",
        json_content_page.qui_sommes_nous.propos_nous.a_propos_nous.href
    );
    $("#qui_sommes_nous_propos_nous_a_propos_nous").html(
        json_content_page.qui_sommes_nous.propos_nous.a_propos_nous.caption
    );
    $("#qui_sommes_nous_propos_nous_backgroud").attr(
        "src",
        json_content_page.qui_sommes_nous.propos_nous.background.src
    );
    $("#qui_sommes_nous_propos_nous_backgroud").attr(
        "alt",
        json_content_page.qui_sommes_nous.propos_nous.background.alt
    );
    $("#qui_sommes_nous_propos_nous_backgroud").attr(
        "title",
        json_content_page.qui_sommes_nous.propos_nous.background.title
    );
}

function qui_sommes_nous_services(json_content_page) {
    $("#qui_sommes_nous_services_ce_que_ns_offrons").html(
        json_content_page.qui_sommes_nous.services.ce_que_ns_offrons
    );
    $("#qui_sommes_nous_services_title_nos_services").html(
        json_content_page.qui_sommes_nous.services.title_nos_services
    );
    var html_qui_sommes_nous_services_items_nos_services = '<div class="row">';
    var count = 0;
    $.each(json_content_page.qui_sommes_nous.services.items_nos_services, function (
        key,
        value
    ) {
        if (count % 3 == 0 && count != 0) {
            html_qui_sommes_nous_services_items_nos_services += '<div class="row">';
        }
        html_qui_sommes_nous_services_items_nos_services +=
            '<div class="col-md-4 col-sm-12 wow fadeIn" data-wow-delay="0.2s">' +
            '<div class="service-item">' +
            '<span class="service-ico"><span class="ico-sep-v"></span><i class="fa fa-' +
            value.icon +
            '"></i></span>' +
            '<span class="s-sep"></span>' +
            "<h3>" +
            value.title +
            "</h3>" +
            "<p>" +
            value.content +
            "</p>" +
            '<a class="banner-btn btn-com btn-sm animated3" href="' +
            value.a_items_nos_services.href +
            '">' +
            value.a_items_nos_services.caption +
            "</a>" +
            "</div>" +
            "</div>";
        if (((count + 1 + 3) % 3 == 0 && count != 0) || count == 2) {
            html_qui_sommes_nous_services_items_nos_services += "</div>";
        }
        count++;
    });
    $("#qui_sommes_nous_services_items_nos_services").html(
        html_qui_sommes_nous_services_items_nos_services
    );
    $("#qui_sommes_nous_services_a_tous_nos_services").attr(
        "href",
        json_content_page.qui_sommes_nous.services.a_tous_nos_services.href
    );
    $("#qui_sommes_nous_services_a_tous_nos_services").html(
        json_content_page.qui_sommes_nous.services.a_tous_nos_services.caption
    );
}

function qui_sommes_nous_portfolio(json_content_page) {
    var html_qui_sommes_nous_portfolio_li_filter =
        '<li class="filter active" data-filter="all">All</li>';
    $.each(json_content_page.qui_sommes_nous.portfolio.li_filter, function (key, value) {
        html_qui_sommes_nous_portfolio_li_filter +=
            '<li class="filter" data-filter=".' +
            value.item_filter +
            '">' +
            value.caption_filter +
            "</li>";
    });
    $("#qui_sommes_nous_portfolio_li_filter").html(html_qui_sommes_nous_portfolio_li_filter);

    var html_qui_sommes_nous_portfolio_portfolio_items = "";
    $.each(json_content_page.qui_sommes_nous.portfolio.portfolio_items, function (
        key,
        value
    ) {
        html_qui_sommes_nous_portfolio_portfolio_items +=
            '<div class="' +
            value.class +
            '">' +
            '<div class="project-items">' +
            '<img src="' +
            value.src +
            '" alt="' +
            value.alt +
            '" title="' +
            value.title +
            '">' +
            '<div class="ovrly"></div>' +
            '<div class="buttons">' +
            '<a href="' +
            value.href +
            '" data-lightbox="' +
            value.data_lightbox +
            '" data-title="' +
            value.title +
            '">' +
            '<span class="project-ico"><i class="fa fa-' +
            value.project_ico +
            '"></i></span>' +
            '<span class="project-caps">' +
            value.project_caps +
            "</span>" +
            "</a>" +
            "</div>" +
            "</div>" +
            "</div>";
    });
    console.log(
        "html_qui_sommes_nous_portfolio_portfolio_items => ",
        html_qui_sommes_nous_portfolio_portfolio_items
    );
    $("#qui_sommes_nous_portfolio_portfolio_items").html(
        html_qui_sommes_nous_portfolio_portfolio_items
    );
    if ($(".project-wrapper").length > 0) {
        $(".project-wrapper").mixItUp();
    }
} */

$(document).ready(function () {
    var json_content_page = loadJsonFile($("#lang_selected").val());
    /* $("#subscribe-form").submit(function (e) {
        e.preventDefault();
        subscribe_newsletter(json_content_page);
    }); */
});