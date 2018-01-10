$(document).ready(function(){
	$("#youtubeBTN").hide();
	$("#spotify").hide();
	$("#youtubeBTN").click(function(){
			$("#youtube").show();
			$("#youtubeBTN").hide();
			$("#spotifyBTN").show();
			$("#spotify").hide();
		
	});
	$("#spotifyBTN").click(function(){
			$("#youtube").hide();
			$("#spotify").show();
			$("#youtubeBTN").show();
			$("#spotifyBTN").hide();
			
	});
	});