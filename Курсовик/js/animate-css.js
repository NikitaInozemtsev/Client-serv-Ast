
(function($) {
    $.fn.animated = function(inEffect, outEffect) {
     
      $(this).each(function(index) {
      	var value = $(this);
      		value.css("opacity", "0").addClass("animated").waypoint(function(dir) {
            if (dir === "down") {
                value.removeClass(outEffect).addClass(inEffect).css("opacity", "1");
            } else {
                value.removeClass(inEffect).addClass(outEffect).css("opacity", "1");
            };
        }, {
            offset: "60%"
        });
      		value.css("opacity", "0").addClass("animated").waypoint(function(dir) {
            if (dir === "down") {
                value.removeClass(inEffect).addClass(outEffect).css("opacity", "1");
            } else {
                value.removeClass(outEffect).addClass(inEffect).css("opacity", "1");
            };
        }, {
            offset: -$(window).height()
        });
    });
        
   };
})(jQuery);