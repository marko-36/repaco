var moves=0;
var validmouseleave = 1;
$(document).on('mouseleave', '#nav,#nav02', (function (event) {
	if (validmouseleave == 1){
	$('nav li.navhover').removeClass();
	}else{
	event.stopImmediatePropagation();
	};
}));
$(document).on('mousemove', 'nav a', (function (event) {
	++moves;
	if(moves==4){
		if($(this).parent().parents().find('nav .navhover').lenght==0){/*deaktivuj předchůdce, pokud nemají navhover*/
			$('nav li.navhover').removeClass();};
		$(this).parent().siblings().removeClass();/*deaktivuj sourozence*/
		$(this).parent().find('li').removeClass();/*deaktivuj děti*/
		$(this).parent().addClass('navhover');
		event.stopImmediatePropagation();
	}
}));
$(document).on('mouseup', 'nav a', (function (event) {
	validmouseleave = 0;
}));
$(document).on('mouseleave', 'nav a', (function (event) {
	if (validmouseleave == 1){
	moves=0;
	}else{
	event.stopImmediatePropagation();
	};
	validmouseleave = 1;
}));
/*$(document).on('click','#nav>li:nth-of-type(2) a',(function(event) {
	event.preventDefault();
	$('#nav').toggleClass('menuon');
	event.stopImmediatePropagation();	
}));*/
$(document).on('click', 'nav a', (function (event) {
	moves=0;
	if(!$(this).parent().hasClass('navhover')){	
	if($(this).parent().find('ul').length>0){
		event.preventDefault();
		if($(this).parent().parents().find('nav .navhover').lenght==0){/*deaktivuj předchůdce, pokud nemají navhover*/
			$('nav li.navhover').removeClass();};
		$(this).parent().siblings().removeClass();/*deaktivuj sourozence*/
		$(this).parent().find('li').removeClass();/*deaktivuj děti*/
		$(this).parent().addClass('navhover');
		};
	}else{
			$(this).parent().removeClass('navhover');
	};	
	event.stopImmediatePropagation();	
}));
$(document).on('click','._m',(function(event) {
	event.stopImmediatePropagation();
}));
$(document).on('click','html',(function() {
	$('#nav').removeClass('menuon');	
	$('._m').removeClass('_m').addClass('_mx');
	$('body').removeClass('_overlay');
}));