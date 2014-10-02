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

  if(userChoice===computerChoice){

    $('.body').appendTo("The result is a tie!");

  }

  else if((computerChoice==='rock')&&(userChoice==='paper')){

    $('.body').appendTo("You win!");
  }

  else if((computerChoice==='rock')&&(userChoice==='fireball')){

    $('.body').appendTo("You lose! Computer wins!");
  }

  else if((computerChoice==='paper')&&(userChoice==='fireball')){

    $('.body').appendTo("You win!");
  }

  else if((computerChoice==='paper')&&(userChoice==='rock')){

    $('.body').appendTo("You lose! Computer wins!");
  }

  else if((computerChoice==='fireball')&&(userChoice==='rock')){

    $('.body').appendTo("You win!");
  }

  else if((computerChoice==='fireball')&&(userChoice==='paper')){

    $('.body').appendTo("You lose! Computer wins!");
  }



};

//load main function only after document is loaded
$(document).ready(main);

