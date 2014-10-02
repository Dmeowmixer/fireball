var computerChoice = Math.random();

if(computerChoice<0.34){
  computerChoice = 'rock';
}

else if((computerChoice<=0.67)&&(computerChoice>=0.34)){
  computerChoice = 'paper';
}

else{
  computerChoice = 'fireball';
}


//all interactive functions go in here
var main = function(){

  var userChoice = '';

  //when rock is clicked
  $('.rock').click(function(){
    userChoice='rock';
  });

  //when paper is clicked
  $('.paper').click(function(){
    userChoice='paper';
  });

    //when message is clicked
  $('.fireball').click(function(){
    userChoice='fireball';
  });

  




};

//load main function only after document is loaded
$(document).ready(main);

