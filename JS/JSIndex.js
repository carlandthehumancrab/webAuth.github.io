jQuery( document ).ready(function() {
	$('#hide').hide();
   //global scope audio element
var audioElement;
// click event, note pass the btn
$('.playBtn').bind('click', function(e) {
  // stop default events       
  event.preventDefault();
  //console.log('play track');
  playSound($(this));
});
function playSound(btn) {
  console.log('play ');
  // boolean to check and swap the btn text
  if (btn.hasClass('playing')) {
    $('.playBtn').removeClass('playing').text('Play');
    song.pause();
	$(".speaker").show();
	$(".speakerOff").hide
  } else {
    if (audioElement) {
      song.pause();
	  $(".speaker").hide();
	  $(".speakerOff").show();
    }
    var soundfile = btn.data('Assets/TNF/Prelude.mp3');//update
    audioElement = new Audio(soundfile);
    $('.playBtn').removeClass('playing');
    btn.addClass('playing').text('Pause');
    song.play();
	$(".speaker").show();
	$(".speakerOff").hide();
  }
  audioElement.onended = function() {
    $('.playBtn').removeClass('playing').text('Play');
  };
}

$('.btnSubmit').click(function(){
	
	$('.sub1').hide();
	$('#hide').show();
})
});
