var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(window).scroll(function(){
    if ($(window).scrollTop() > 150) {
        $('.main-global-header').addClass('main-global-header--fixed');
    } else {
        $('.main-global-header').removeClass('main-global-header--fixed');
    }
});

var topMenu = $("#navHeader");
offset = 60;
// topMenuHeight = topMenu.outerHeight() + offset,
// topMenuHeight = 60 + offset

if( $(window).outerWidth() < 480 ){
	topMenuHeight = 0 + offset
} else {
	topMenuHeight = 60 + offset
}
// All list items
menuItems = topMenu.find('a[href*="#"]'),
// Anchors corresponding to menu items
scrollItems = menuItems.map(function () {
	var href = $(this).attr("href"),
	id = href.substring(href.indexOf('#')),
	item = $(id);
	if (item.length) {
		return item;
	}
});

// so we can get a fancy scroll animation
menuItems.click(function (e) {
	var href = $(this).attr("href"),
	id = href.substring(href.indexOf('#'));
	offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
	$('html, body').stop().animate({
		scrollTop: offsetTop
	}, 600);
	e.preventDefault();
	$('.global-header__menu').removeClass('is-show');
	$('body').removeClass('body-hidden');
	$('.btn-toggle').removeClass('is-open');
});

// Bind to scroll
$(window).scroll(function () {
	// Get container scroll position
	var fromTop = $(this).scrollTop() + topMenuHeight;

	// Get id of current scroll item
	var cur = scrollItems.map(function () {
		if ($(this).offset().top < fromTop)
		return this;
	});

	// Get the id of the current element
	cur = cur[cur.length - 1];
	var id = cur && cur.length ? cur[0].id : "";

	menuItems.removeClass("list-menu--active");
	if (id) {
		menuItems.parent().end().filter("[href*='#" + id + "']").addClass("list-menu--active");
	}
});

$('#btnToggleMenu').on('click', function(){
	$(this).toggleClass('is-open');
	$('.global-header__menu').toggleClass('is-show');
	$('body').toggleClass('body-hidden');
});

$('.card-faq__header').on('click', function(){
	$(this).parent().toggleClass('card-faq--show')
})

}
/*
     FILE ARCHIVED ON 09:45:56 Aug 31, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:36:06 Dec 15, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 134.521
  exclusion.robots: 0.102
  exclusion.robots.policy: 0.092
  RedisCDXSource: 8.818
  esindex: 0.022
  LoadShardBlock: 100.163 (3)
  PetaboxLoader3.datanode: 60.943 (5)
  CDXLines.iter: 20.01 (3)
  load_resource: 65.215
  PetaboxLoader3.resolve: 43.104
  loaddict: 15.966
*/