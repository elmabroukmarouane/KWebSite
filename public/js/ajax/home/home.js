function loadJsonFile(lang_request) {
  var json_content_page = null;
  $.ajax({
    url: "get-content-json/" + lang_request,
    type: "GET",
    async: false,
    success: function(response) {
      json_content_page = response[0];
      change_langage(json_content_page, response);
      home_banner(json_content_page);
      home_propos_nous(json_content_page);
      home_services(json_content_page);
      home_portfolio(json_content_page);
    }
  });
  return json_content_page;
}

function home_banner(json_content_page) {
  var html_home_banner = "";
  $.each(json_content_page.home.banner, function(key, value) {
    html_home_banner +=
      '<div style="' +
      value.style_banner +
      '" class="banner-2 slider-part1 slider-item">' +
      '<div class="container">' +
      '<div class="row">' +
      '<div class="col-md-6 col-md-offset-5">' +
      '<div class="banner-content">' +
      '<h1 class="b-headlines animated1">' +
      value.headlines_banner +
      "</h1>" +
      '<p class="b-desc animated2">' +
      value.desc_banner +
      "</p>" +
      '<a class="banner-btn btn-com btn-sm animated3" href="' +
      value.a_banner.href +
      '">' +
      value.a_banner.caption +
      "</a>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
  });
  $("#home_banner").html(html_home_banner);
  if ($("#slider-sections").length > 0) {
    $(".carousel-single-slide").owlCarousel({
      loop: true,
      center: true,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  }
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

function home_services(json_content_page) {
  $("#home_services_ce_que_ns_offrons").html(
    json_content_page.home.services.ce_que_ns_offrons
  );
  $("#home_services_title_nos_services").html(
    json_content_page.home.services.title_nos_services
  );
  var html_home_services_items_nos_services = '<div class="row">';
  var count = 0;
  $.each(json_content_page.home.services.items_nos_services, function(
    key,
    value
  ) {
    if (count % 3 == 0 && count != 0) {
      html_home_services_items_nos_services += '<div class="row">';
    }
    html_home_services_items_nos_services +=
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
      html_home_services_items_nos_services += "</div>";
    }
    count++;
  });
  $("#home_services_items_nos_services").html(
    html_home_services_items_nos_services
  );
  $("#home_services_a_tous_nos_services").attr(
    "href",
    json_content_page.home.services.a_tous_nos_services.href
  );
  $("#home_services_a_tous_nos_services").html(
    json_content_page.home.services.a_tous_nos_services.caption
  );
}

function home_portfolio(json_content_page) {
  var html_home_portfolio_li_filter =
    '<li class="filter active" data-filter="all">All</li>';
  $.each(json_content_page.home.portfolio.li_filter, function(key, value) {
    html_home_portfolio_li_filter +=
      '<li class="filter" data-filter=".' +
      value.item_filter +
      '">' +
      value.caption_filter +
      "</li>";
  });
  $("#home_portfolio_li_filter").html(html_home_portfolio_li_filter);

  var html_home_portfolio_portfolio_items = "";
  $.each(json_content_page.home.portfolio.portfolio_items, function(
    key,
    value
  ) {
    html_home_portfolio_portfolio_items +=
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
    "html_home_portfolio_portfolio_items => ",
    html_home_portfolio_portfolio_items
  );
  $("#home_portfolio_portfolio_items").html(
    html_home_portfolio_portfolio_items
  );
  if ($(".project-wrapper").length > 0) {
    $(".project-wrapper").mixItUp();
  }
}

$(document).ready(function() {
  var json_content_page = loadJsonFile();
  $("#subscribe-form").submit(function(e) {
    e.preventDefault();
    subscribe_newsletter(json_content_page);
  });
});
