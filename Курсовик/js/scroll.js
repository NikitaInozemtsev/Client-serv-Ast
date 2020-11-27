let object = document.getElementById('start');
	let object1 = document.getElementById('startLeft');
	let heig = object1.offsetWidth / 3.33;
	let rot = document.getElementById('stRotate');
	let rot1 = document.getElementById('centerImg');
	let rot2 = document.getElementById('centerImg2');




	let way = 60, // кол-во пройденных пикселей
    	deg = 10;

    let scTop = pageYOffset;
	
	window.onscroll = function() {
		
		posTop = (object.pageYOffset !== undefined) ? object.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		let currentScroll = posTop > scTop; //true если скролл вниз
		if (posTop > object.offsetHeight/2) {
			let s = $(this).scrollTop() - object.offsetHeight/2;
			let res = +(s / way * deg) ;		  
		  	rot1.style.transform = `translate(-50%, -50%) rotate(${res}deg)`;
		}

		if (posTop < object.offsetHeight/10) {
			rot.style.opacity = "1";
			rot1.style.opacity = "0";
			rot2.style.opacity = "0";
		}

		if (posTop > object.offsetHeight/1.8 && posTop < object.offsetHeight * 2.6) {
			rot.style.opacity = "0";
			rot1.style.opacity = "1";
			rot2.style.opacity = "0";
		}

		if (posTop > object.offsetHeight * 2.8 && posTop < object.offsetHeight * 4.4) {
			rot.style.opacity = "0";
			rot1.style.opacity = "0";
			rot2.style.opacity = "1";
		}

		if(currentScroll) {
			rot2.style.transform = "translate(-50%, -70%) rotate(-68deg)";
		}
		else {
			rot2.style.transform = "translate(-50%, -20%) rotate(112deg)";
		}
		
		let sc = 1;
		if (posTop >= object.offsetHeight * 4.4 && posTop >= object.offsetHeight * 4.5) {
			if(currentScroll) {				
				rot2.style.opacity = "0";
			}
			else {
				rot2.style.opacity = "1";
			}
		}
		if (posTop >= object.offsetHeight * 2.6 && posTop <= object.offsetHeight * 2.8) {
			if (currentScroll) {				
				rot1.style.opacity = "0";
				rot2.style.opacity = "1";
			}
			else {
				rot1.style.opacity = "1";
				rot2.style.opacity = "0";
			}
			
		} 
		if (posTop >= object.offsetHeight/2.2 && posTop <= object.offsetHeight/1.8) {	
			if (currentScroll) {
				rot.style.opacity = "0";
				rot1.style.opacity = "1";			
				
			}
			else {
				rot.style.opacity = "1";
				rot1.style.opacity = "0";
			}
					
		}		
		 
	
	  
		scTop = posTop;
	}