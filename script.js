const allowed_moves = ['rock','paper','scissors']
player_score = 0
computer_score = 0




function computer_move(){
    const random_number = Math.trunc((Math.random() * 3))
    computer_moves = allowed_moves[random_number]
    
}


function player_move(move){
  computer_move()
  player_moves = move.toLowerCase()
  if(allowed_moves.includes(player_moves)){
    update()
    console.log(player_moves)
    check_result(player_moves, computer_moves)
  }
  else{
    console.log("Wrong move, try again")
  }
}


function update(){
  update_value = document.getElementById("player_moves")
  update_value.textContent = player_moves
}


function check_result(player_moves, computer_moves){

  game_results = document.getElementById("game_result")
  console.log("Computer Moves " + computer_moves)
  if (player_moves == computer_moves){
  game_results.textContent = "Computer moves " + computer_moves + " It's a draw"
  }
  else if (player_moves == 'rock' && computer_moves == 'scissors' || player_moves == 'paper' && computer_moves == "rock" || player_moves == "scissors" && computer_moves == "paper" ){
  game_results.textContent = "Computer moves " + computer_moves + " Player wins"
  player_score = player_score + 1
  update_score(player_score, computer_score)
  }
  else{
    game_results.textContent = "Computer moves " + computer_moves + " Computer wins"
    computer_score = computer_score + 1
    update_score(player_score, computer_score)
  }
  }
  

  function update_score(player_score, computer_score){
    player_score_counter = document.getElementById("player_score_count")
    player_score_counter.textContent = player_score
  }