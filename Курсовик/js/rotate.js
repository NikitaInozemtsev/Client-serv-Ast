jQuery("#stRotate").rotate({ 
	   bind: 
	     { 
	        mouseover : function() { 
	        	
	            jQuery(this).rotate({animateTo:360, duration:1000})
	            
	        },
	        mouseout : function() { 
	            jQuery(this).rotate({animateTo:0, duration:1000})
	        }
	     } 
	});