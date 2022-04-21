//Variables to set up the game
const allowed_moves = ['rock','paper','scissors']
player_score = 0
computer_score = 0







//Get players move based on button clicked
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

//Update player's move
function update(){
  update_value = document.getElementById("player_moves")
  update_value.textContent = "Player moves " + player_moves
}




//Check the result of a singular game
function check_result(player_moves, computer_moves){
  computer = document.getElementById("computer_moves")
  game_results = document.getElementById("game_result")
  console.log("Computer Moves " + computer_moves)
  if (player_moves == computer_moves){
  computer.textContent = "Computer moves " + computer_moves
  //game_results.textContent = " It's a draw"
  }
  else if (player_moves == 'rock' && computer_moves == 'scissors' || player_moves == 'paper' && computer_moves == "rock" || player_moves == "scissors" && computer_moves == "paper" ){
  computer.textContent = "Computer moves " + computer_moves
  //game_results.textContent =  " Player wins"
  player_score = player_score + 1
  update_score(player_score, computer_score)
  check_game_result(player_score,computer_score)
  }
  else{
    //game_results.textContent =  "Computer wins"
    computer.textContent = "Computer moves " + computer_moves
    computer_score = computer_score + 1
    update_score(player_score, computer_score)
    check_game_result(player_score,computer_score)
  }
  }
  
//Update both player and computer scores
  function update_score(player_score, computer_score){
    player_score_counter = document.getElementById("player_score_count")
    computer_score_counter = document.getElementById("computer_score_count")
    player_score_counter.textContent = player_score
    computer_score_counter.textContent = computer_score
  }



  function check_game_result(player_score,computer_score){
    if (player_score == 5){
      alert("Game over, player won");
      update_score(0,0)
    }
    else if (computer_score == 5){
      alert("Game over, computer won");
      update_score(0,0);
    }
  }



  //Get random move for computer
  function computer_move(){
      const random_number = Math.trunc((Math.random() * 3))
      computer_moves = allowed_moves[random_number]
      
  }


  window.onload = function event_listeners(){
    let rock = document.getElementById('rock_selection');
    let paper = document.getElementById('paper_selection');
    let scisors = document.getElementById('scissors_selection');
    
    rock.addEventListener('click', () => {player_move("rock")})
    paper.addEventListener('click', () => {player_move("paper")})
    scisors.addEventListener('click', () => {player_move("scissors")})
  }
  
    