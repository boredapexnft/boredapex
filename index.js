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


var initScrollTop = $(window).scrollTop();
$('.wave-scroll-home').css({'background-position-x' : (initScrollTop/20)+'%'});
$('.wave-scroll').css({'background-position-x' : (initScrollTop/10)+'%'});
$(window).scroll(function() {
	// Find the new scroll top.
	var scrollTop = $(window).scrollTop();
	// Set the new background position.
	$('.wave-scroll-home').css({'background-position-x' : (scrollTop/20)+'%'});
	$('.wave-scroll').css({'background-position-x' : (scrollTop/10)+'%'});
});

$('.main-navigation-key').slick({
	slidesToShow: 5,
	slidesToScroll: 5,
	arrows: false,
	asNavFor: '.container-content-key',
	focusOnSelect: true,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				centerMode: true,
			}
		}
	]
});

$('.container-content-key').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.main-navigation-key',
	dots: false,
	fade: true,
	arrows: true,
	responsive: [
		{
			breakpoint: 480,
			settings: {
				adaptiveHeight: true,
				arrows: false,
			}
		}
	]
});

var checkWidth = $(window).outerWidth();
if(checkWidth < 480) {
	$('.main-navigation-key').removeClass('nav-desktop');

	var initScrollTop = $(window).scrollTop();
	$('.wave-scroll').css({'background-position-x' : (initScrollTop/20)+'%'});

	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		$('.wave-scroll').css({'background-position-x' : (scrollTop/20)+'%'});
	});
} else {
	$('.main-navigation-key').addClass('nav-desktop');
}

$(window).on('resize', function(){
	var checkWidth = $(window).outerWidth();
	if(checkWidth < 480) {
		$('.main-navigation-key').removeClass('nav-desktop');
	} else {
		$('.main-navigation-key').addClass('nav-desktop')
	}
});

}
/*
     FILE ARCHIVED ON 09:45:39 Aug 31, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:36:06 Dec 15, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 5046.188
  exclusion.robots: 0.104
  exclusion.robots.policy: 0.095
  cdx.remote: 0.079
  esindex: 0.011
  LoadShardBlock: 1274.222 (3)
  PetaboxLoader3.datanode: 97.532 (5)
  CDXLines.iter: 15.057 (3)
  PetaboxLoader3.resolve: 1608.191 (2)
  load_resource: 527.719
  loaddict: 53.084
*/