const allowed_moves = ['rock','paper','scissors']

function computer_move(){
    const random_number = Math.trunc((Math.random() * 3))
    computer_moves = allowed_moves[random_number]
    
}


function player_move(move){
  player_moves = move.toLowerCase()
  if(allowed_moves.includes(player_moves)){
    console.log(player_moves)
    check_result(player_moves, computer_moves)
  }
  else{
    console.log("Wrong move, try again")
  }
}

function check_result(player_moves, computer_moves){
  console.log("Computer Moves " + computer_moves)
  if (player_moves == computer_moves){
    console.log("Draw")
  }
  else if (player_moves == 'rock' && computer_moves == 'scissors' || player_moves == 'paper' && computer_moves == "rock" || player_moves == "scissors" && computer_moves == "paper" ){
    console.log("Player wins")
  }
  else{
    console.log("Computer wins")
  }
  }
  