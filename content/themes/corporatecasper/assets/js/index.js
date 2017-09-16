/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);
	var oldapp = null;
	var sTime = new Date().getTime();
	var eTime = new Date().getTime();
	var searchHints = [];

    $document.ready(function () {
        var $postContent = $(".post-content, .post-excerpt");
        $postContent.fitVids();
		/*
		(function () {
			var s = document.createElement('script'); s.async = true;
			s.type = 'text/javascript';
			s.src = '//' + disqus_shortname + '.disqus.com/count.js';
			(document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
		}());
		*/
        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").unbind("click").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

    });
	$(document).ajaxStart(function() {
		sTime = new Date().getTime();
	});
	$(document).ajaxComplete(function() {
		var $postContent = $(".post-content, .post-excerpt");
        $postContent.fitVids();
		/*
		(function () {
			var s = document.createElement('script'); s.async = true;
			s.type = 'text/javascript';
			s.src = '//' + disqus_shortname + '.disqus.com/count.js';
			(document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
		}());
		*/
		$(".scroll-down").arctic_scroll();
		
        $(".menu-button, .nav-cover, .nav-close").unbind("click").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });
        
		$(".nav-current").removeClass("nav-current");
		$(".current .youarehere").addClass("nav-current");

		eTime = new Date().getTime();
		var tSpent = eTime - sTime;
        console.log("Time: "+tSpent);
		try{
			ga('send', 'timing', 'Site', 'Ajax Load', tSpent, 'Benchmark');
		} catch (e) {

		}
	});

    /* Arctic Scroll by Paul Adam Davis
    https://github.com/PaulAdamDavis/Arctic-Scroll
    */
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
})(jQuery);


