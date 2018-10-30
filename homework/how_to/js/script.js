//Variable to track the number of totalsteps
var totalsteps = 3;
//track which step should be displayed
var currentstep=0;
//store the html of each slide
var currentslide;

$(function(){
  $('.totalsteps').html(totalsteps);

  //hide the steps
  $('.steps li, .end, .controls, #prev').hide();
});

//click events
$('#begin').on('click' , function(){
  //do something here
  $('.welcome').hide();
  currentstep=1;
  currentslide= $('#step'+currentstep);
  $(currentslide).fadeIn(1000);
  $('.controls').fadeIn(1000);

  $('h2').html('Step' + currentstep);

});

//click on next
$('#next').on('click' , function(){
  if(currentstep != totalsteps){}
$(currentslide).hide();
currentstep++;
currentslide= $('#step'+currentstep);
$('h2').html('Step' + currentstep);
$(currentslide).fadeIn(1000);
)}
if(currentstep == totalsteps){
  $('next').hide();
}
if(currentstep !=1){
  $('#prev').show();
}
});

//click on prev
$('#prev').on('click' , function(){
$(currentslide).hide();
currentstep--;
currentslide= $('#step'+currentstep);
$('h2').html('Step' + currentstep);
$(currentslide).fadeIn(1000);

if(currentstep != totalsteps){
  $('next').hide();
}
if(currentstep ==1){
  $('#prev').show();
}
});
