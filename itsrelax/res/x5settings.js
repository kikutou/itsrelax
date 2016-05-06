(function ( $, x5engine ) {
	var x = x5engine,
		s = x.settings,
		p = s.currentPath,
		b = x.boot;

	s.siteId = 'C4440EDDE45642D2CA64DF59C78475E0';
	s.version = '12-0-6-25';
	b.push(function () {
		x.setupDateTime();
		x.imAccess.showLogout();
		x.utils.autoHeight();
		x.cart.ui.updateWidget();
		x.imGrid.init();
	});
	s.menu = {
		verticalScroll: false,
		orientation: 'horizontal'
	};
	b.push(function () {
		x.menu({
			target: '#imMnMn',
			showCurrent: false,
			desktopVerticalScroll: false,
			mobileVerticalScroll: false,
			showLogoOnScroll: false,
			orientation: 'horizontal',
			menuHeight: 28,
			menuWidth: 100,
			submenuHeight: 22,
			submenuWidth: 160,
			opacity: 0.8,
			type: 'singleColumn',
			alignment: 'left',
			effect: 'fade'
		});
	});
	b.push(function () { x.utils.imPreloadImages([p + 'menu/hor_main.png',p + 'menu/hor_main_h.png',p + 'menu/hor_main_c.png', p + 'res/imLoad.gif', p + 'res/imClose.png']); });

	// ShowBox
	$.extend(s.imShowBox, {
		'effect' : 'fade',
		'shadow' : '',
		'background' : '#000000',
		'borderWidth' : {
			'top': 1,
			'right': 1,
			'bottom': 1,
			'left': 1
		},
		'borderRadius' : '5px 5px 5px 5px',
		'borderColor' : '#000000 #000000 #000000 #000000',
		'textColor' : '#000000',
		'fontFamily' : 'Tahoma',
		'fontStyle' : 'normal',
		'fontWeight' : 'normal',
		'fontSize' : '9pt',
		'textAlignment' : 'left',
		'boxColor' : '#FFFFFF',
		'opacity' : 0.7,
		'radialBg' : true // Works only in Mozilla Firefox and Google Chrome
	});

	// PopUp
	$.extend(s.imPopUp, {
		'effect' : 'fade',
		'width' : 500,
		'shadow' : '',
		'background' : '#000000',
		'borderRadius' : 10,
		'textColor' : '#000000',
		'boxColor' : '#FFFFFF',
		'opacity' : 0.7
	});

	// Tip
	$.extend(s.imTip, {
		'borderRadius' : 1,
		'arrow' : true,
		'position' : 'bottom',
		'effect' : 'none',
		'showTail' : true
	});

	// Captcha
	b.push(function () {
		x5engine.captcha.instance = new x5engine.captcha.x5captcha({
			"phpfile": "captcha/x5captcha.php",
		});
	}, false, 'first');

	// BreakPoints
	s.breakPoints.push({ "hash": "fc23f27c1080aa74e1efeec9f2399630", "name": "Desktop", "start": "max", "end": 0, "fluid": false });

	b.push(function () { x.cookielaw.activateScripts() });

	s.loaded = true;
})( _jq, x5engine );
