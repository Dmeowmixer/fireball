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



var main = function(){

  var userChoice = "";
  //when rock is clicked
  $('.rock').click(function(){
    userChoice='rock';
alert(userChoice);
alert(computerChoice);

    process(userChoice);

  });

  //when paper is clicked
  $('.paper').click(function(){
    userChoice='paper';

    alert(userChoice);
    alert(computerChoice);
    process(userChoice);

  });

    //when message is clicked
  $('.fireball').click(function(){
    userChoice='fireball';

  process(userChoice);
  });

  function process(userChoice){
    if(userChoice===computerChoice){

      $('.game').append("<p>The result is a tie!</p");

    }

    else if((computerChoice==='rock')&&(userChoice==='paper')){

      $('.game').append("<p>You win!</p>");
    }

    else if((computerChoice==='rock')&&(userChoice==='fireball')){

      $('.game').append("<p>You lose! Computer wins!</p>");
    }

    else if((computerChoice==='paper')&&(userChoice==='fireball')){

      $('.game').append("<p>You win!</p>")
    }

    else if((computerChoice==='paper')&&(userChoice==='rock')){

      $('.game').append("<p>You lose! Computer wins!</p>");
    }

    else if((computerChoice==='fireball')&&(userChoice==='rock')){

      $('.game').append("<p>You win!</p>");
    }

    else if((computerChoice==='fireball')&&(userChoice==='paper')){

      $('.game').append("<p>You lose! Computer wins!</p>");
    }
    

  }

 




};

//load main function only after document is loaded
$(document).ready(main);
