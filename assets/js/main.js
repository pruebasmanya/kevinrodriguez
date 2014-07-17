$(document).on('ready',kalinSaluda);
$(document).on('ready',modalMenu);
$(document).on('ready',dropdownIdioma);
function kalinSaluda(){
	$('.movie').jsMovie({
        //sequence: 'animation####.jpg',
        //from: 1,
        //to: 120,
        images : ['kalin.png'],
        folder : "assets/images/",        
        height:711,
        width:336,
        grid : {height:711, width:336, columns:1, rows:12},
        showPreLoader : false,
        playOnLoad : true        
    });

    $('#scene').parallax({
    	limitY: 0
    });
};
function modalMenu(){
    $('.btn-toggle-large').click(function(e){
		e.preventDefault();
		$('.slicknav').fadeIn('5000s');
	});

	$('.slicknav-btn').click(function(e){
		e.preventDefault();
		$('.slicknav').fadeOut('5000s');
	});
};
function dropdownIdioma(){
	$('.down-arrow').addClass('flaticon-arrow486');
    $('.dropdown-toggle').click(function(e){
		e.preventDefault();		
		if($('.btn-group').hasClass('open')){
			$('.down-arrow').addClass('flaticon-arrow492');
		}else{
			$('.down-arrow').removeClass('flaticon-arrow486').addClass('flaticon-arrow486');
		}
	});
};