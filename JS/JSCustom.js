$(document).ready(function(){
	/* edge  color */
	var color;
	$('#red').click(function(){
		color = '#ff0000';
			
		});
		$('#blue').click(function(){
		color = '#0000ff';
			
		});
		$('#yellow').click(function(){
		color = '#ffff00';
			
		});
		$('#green').click(function(){
		color = '#008000';
			
		});
		$('#black').click(function(){
		color = '#000000';
			
		});
		$('#white').click(function(){
		color = '#ffffff';
			
		});
	$('td').click(function(){
		$(this).css('background-color', color);
	});
	
	/* resizing the table */
	$('#ImageResize').click(function(){
		var width = document.getElementById('t01').rows[0].cells[0].offsetWidth
	 console.log(width);
	 $("td").css("height",width);
	});
	/* set table height to be the same as its width */
	 var width = document.getElementById('t01').rows[0].cells[0].offsetWidth
	 
	 $("td").css("height",width);
	 
	/* allows user to choose a color */
	$('#selColor').change(function() {
		var col = $('#selColor').val();
		$("td").click(function(){
			console.log(col);
			$(this).css('background-color', col);
		});
	});
	/* creates an array of the cell colors */
	var ColArray = []
	$("#ImageSave").click(function(){
		ColArray=[];
		$("#t01 tr").each(function(){
			$("td", this).each(function(){
				var cell = $(this);
				var backCol = $(this).css("background-color");
				ColArray.push(backCol);
			});
		});
		/* adds array to local storage */
		localStorage.setItem("colors", JSON.stringify(ColArray) );
		var color = JSON.parse(localStorage.getItem("colors"));
	});
	/* loads local storage */
	var i = 0;
	
	$("#t01 tr").each(function(){
		$("td", this).each(function(){
			var string = JSON.parse(localStorage.getItem("colors"));
			var current = string[i];
			$(this).css('background-color',current);
			i=i+1;
		});
	});
	/* delete the table */
	$("#ImageDelete").click(function(){
		$("#t01 tr").each(function(){
			$("td", this).each(function(){
				$(this).css('background-color', '#FFFFFF');
				localStorage.clear();
			});
		});
	});
	
	
	
});

