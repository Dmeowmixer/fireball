var computerChoice = Math.floor(Math.random()*3);

if(computerChoice===1){
  computerChoice = 'rock';
}

else if(computerChoice===2){
  computerChoice = 'paper';
}

else{
  computerChoice = 'fireball';
}


//<<<<<<< HEAD

//=======
//>>>>>>> c3f19845d7182ed9ed6a7b70a6b2e3a9faa15e0e
//all interactive functions go in here
var main = function(){

  var userChoice = '';

  //when rock is clicked
  $('.rock').click(function(){
    userChoice='rock';
//<<<<<<< HEAD
    process(userChoice);
//=======
//>>>>>>> c3f19845d7182ed9ed6a7b70a6b2e3a9faa15e0e
  });

  //when paper is clicked
  $('.paper').click(function(){
    userChoice='paper';
//<<<<<<< HEAD
    process(userChoice);
//=======
//>>>>>>> c3f19845d7182ed9ed6a7b70a6b2e3a9faa15e0e
  });

    //when message is clicked
  $('.fireball').click(function(){
    userChoice='fireball';
//<<<<<<< HEAD
  process(userChoice);
  });

  function process(userChoice){
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
//=======
  }

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
//>>>>>>> c3f19845d7182ed9ed6a7b70a6b2e3a9faa15e0e
  }



};

//load main function only after document is loaded
$(document).ready(main);

