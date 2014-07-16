$(document).on("ready",kalinSaluda);
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
        //loader: {path:"assets/images/kalin.png",height:50,width:50,rows:2,columns:4},        
    });
    
    $('#scene').parallax({
    	limitY: 0
    });
};
