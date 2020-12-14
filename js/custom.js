(function($) {
	"use strict";
	$('.nav_toggle').on('click', function(){
		$(this).toggleClass("close_menu");
		$(".navigation_menu_wrap").slideToggle(100);
	});
	//dropdown menu
	$(".navigation_menu ul li ul.sub_menu").parents("li").addClass("dropdown_toggle");
	$(".dropdown_toggle").append("<span class='caret_down'></span>");
	$(".navigation_menu ul li").children(".caret_down").on("click",function(){
		$(this).toggleClass("caret_up");
		$(this).prev("ul").slideToggle();
	});
	//fix header on scroll
	var win_scroll = $(window).scrollTop();
	$(window).on('bind scroll', function(e) {
		if ($(window).scrollTop() > 500) {
			$('.navigation_header_wrap').addClass('fixed_menu');
		} else {
			$('.navigation_header_wrap').removeClass('fixed_menu');
		}	
	});
	//payment radio check
	$('.payment_radio input').change(function(){
		if ($(".card_pay_input").is(':checked')) {
			$(".card_pay_form").slideDown(100);	
		}
		else{
			$(".card_pay_form").slideUp(100);
		}
	});
	//scroll carousel
	//Brands slider
	$(".product_slider").owlCarousel({
		items:4,
		loop:true,
		margin:15,
		autoplay:true,
		autoplayHoverPause:true,
		autoplayTimeout:3000,
		autoplaySpeed:1500,
		smartSpeed:1500,
		dots:false,
		nav:true,
		navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
		responsiveClass: true,
		responsive : {
			0 : {
				items: 1,
				margin:10,
			},
			600 : {
				items: 2,
				margin:10,
			},
			768 : {
				items: 2
			},
			992 : {
				items: 3,
				margin:10,
			},
			1200 : {
				items:4
			}
		}
	});
	//gallery js
	$('.gallery_popup_wrapper').magnificPopup({
		delegate: '.glr_popup_icon',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'my_zoom_in',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: false,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
			}
		}
	});
	//load event
	$(window).on('load', function() {
		$(".loader_wrapper").delay(600).fadeOut("slow");
		setTimeout(function(){
			$("body").addClass("body_loaded");
		},500);
	});
	//tabs Menu
	$('.tabs_menu > li').on('click', function(){
		var tab_data = $(this).attr("data-tab");
		$('.tabs_menu > li').removeClass("active");
		$(this).addClass("active");	
		$(".tab_content").removeClass("active");
		$("#"+tab_data).addClass("active");
	});
	//accordion js
	$(".accordion_heading").on("click", function(){
		$(this).toggleClass("active");
		$(this).next(".accordion_content").slideToggle(250);
		//$(".ac_heading").not(this).next().slideUp(100);
		//$(".ac_heading").not(this).removeClass("active");
	});
	//counter js
	if ($('.counter_number').length > 0){
		$('.counter_number').appear(function() {
			$('.counter_number').each(count);
			function count(options) {	
				var $this = $(this);
				options = $.extend({}, options || {}, $this.data('countToOptions') || {});
				$this.countTo(options);
			}
		});
	}
	//Dropfile function
	$('.dropfile_button input[type="file"]').change(function(e){
		var fileName = e.target.files[0].name;
		$(this).prev(".dropfile_label").children(".filepath").text('('+fileName+')');
	});
	//file upload function
	$('.file_upload_button input[type="file"]').change(function(e){
		var fileName = e.target.files[0].name;
		$(this).parents(".file_upload_button").next(".filepath").text(fileName);
	});
	//bootsrape selectpicker
    if ($(".selectpicker").length > 0) {
      $('.selectpicker').selectpicker();
    }
	//wow animation js
	new WOW().init();
	//slider img call in bg
	$(".slide_img").each(function () {
		var img_path = $(this).attr("src");
		$(this).parents(".slide_item").css("background-image","url("+img_path+")");
	});
	//Custom Dropdown
	$(".d_dropdown_toggle").on("click", function(){
		$(this).next(".dropdown_menu").slideToggle(100);
		$(".d_dropdown_toggle").not(this).next().slideUp(100);
	});
	//product mixit js
	if ($('#product_mixit_wrap').length > 0){
		$('#product_mixit_wrap').mixItUp({
		  load: {
			sort: 'order:asc'
		  },
		  selectors: {
			target: '.mix-target',
			filter: '.filter-btn'
		  },
		  callbacks: {
			onMixEnd: function(state){
			  console.log(state)
			}
		  }
		});
	}
	//footer menu accordion js
	$(".f_widget_title").on("click", function(){
		$(this).toggleClass("active");
		$(this).next(".footer_menu").slideToggle(100);
		$(".f_widget_title").not(this).next().slideUp(100);
		$(".f_widget_title").not(this).removeClass("active");
	});
	//Datepicker
	$( ".datepicker" ).datepicker({
		dateFormat: "dd-mm-yy",
		minDate:0
	});
	//upload doc file name function
	$('.docs_input').change(function(e){
		var fileName = e.target.files[0].name;
		$(this).parents(".upload_docs").children(".text").text(fileName);
	});
})(jQuery);