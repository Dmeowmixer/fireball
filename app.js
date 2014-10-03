var computerChoice =  '';
function getComputerChoice(){
   computerChoice = Math.floor(Math.random()*3);

  if(computerChoice===1){
    computerChoice = 'rock';
  }

  else if(computerChoice===2){
    computerChoice = 'paper';
  }

  else{
    computerChoice = 'fireball';
  }

}



var playAgain = false;
function replay(){
  if (playAgain){
    getComputerChoice();
  }
  else {
    alert('Fine then');
    compScore=0;
    userScore=0;
  }
}

var compScore = 0;
var userScore = 0;



var main = function(){
getComputerChoice();
  var userChoice = "";
  //when rock is clicked
  $('.rock').click(function(){
    userChoice='rock';

    process(userChoice);

  });

  //when paper is clicked
  $('.paper').click(function(){
    userChoice='paper';

   
    process(userChoice);

  });

    //when message is clicked
  $('.fireball').click(function(){
    userChoice='fireball';

  process(userChoice);
  });

  function process(userChoice){
    if(userChoice===computerChoice){

      //$('.game').append("<p>The result is a tie!</p");
      alert('The result is a tie!');
      playAgain = confirm('ComputerScore: ' + compScore + '\nYour score: ' + userScore + '\nPlay again?');
      replay();
    }

    else if((computerChoice==='rock')&&(userChoice==='paper')){
      userScore++;
      //$('.game').append("<p>You win!</p>");
      alert('You win!');
      playAgain = confirm('ComputerScore: ' + compScore + '\nYour score: ' + userScore + '\nPlay again?');
      replay();
      
    }

    else if((computerChoice==='rock')&&(userChoice==='fireball')){
      compScore++;
      //$('.game').append("<p>You lose! Computer wins!</p>");
      alert('You lose! Computer wins!');
      playAgain = confirm('ComputerScore: ' + compScore + '\nYour score: ' + userScore + '\nPlay again?');
      replay();

    }

    else if((computerChoice==='paper')&&(userChoice==='fireball')){
      userScore++;
      //$('.game').append("<p>You win!</p>")
      alert('You win!');
      playAgain = confirm('ComputerScore: ' + compScore + '\nYour score: ' + userScore + '\nPlay again?');
      replay();
    }

    else if((computerChoice==='paper')&&(userChoice==='rock')){
      compScore++;
      //$('.game').append("<p>You lose! Computer wins!</p>");
       alert('You lose! Computer wins!');
       playAgain = confirm('ComputerScore: ' + compScore + '\nYour score: ' + userScore + '\nPlay again?');
      replay();
    }

    else if((computerChoice==='fireball')&&(userChoice==='rock')){
      userScore++;
      //$('.game').append("<p>You win!</p>");
      alert('You wins!');
      playAgain = confirm('ComputerScore: ' + compScore + '\nYour score: ' + userScore + '\nPlay again?');
      replay();
    }

    else if((computerChoice==='fireball')&&(userChoice==='paper')){
      compScore++;
      //$('.game').append("<p>You lose! Computer wins!</p>");
      alert('You lose! Computer wins!');
      playAgain = confirm('ComputerScore: ' + compScore + '\nYour score: ' + userScore + '\nPlay again?');
      replay();
    }
    

  }

 




};

//load main function only after document is loaded
$(document).ready(main);
