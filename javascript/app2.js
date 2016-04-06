$(document).ready(function(){

    var $gameCells = $(".cell");
    var moves = ["", "", "", "", "", "", "", "", ""];
    var count = 0;
    var turn = 'X';
    var countTotal = 1;

    $($gameCells).one('click', function(){
      //$(this).html(turn);
      //$(this).css('background-image', "./Images/BatSymbol.jpg");
      if (turn == 'X') {
        $(this).addClass('xImgClass')
      }
      else {
        $(this).addClass('yImgClass')
      }
      moves[this.id] = turn;
      count++;
      countTotal++;

      turn = (turn == 'X') ? 'O' : 'X';

      console.log(moves, count);

      var champ = null;
      var getWinner = function () {
        if (winnerIs('X')) {
          //return 'X';
          alert("The Hero of Time has defeated the Ex-SOLDIER!");
          $($gameCells).off('click');
        }
        if (winnerIs('O')) {
          //return 'O';
          alert("The Ex-SOLDIER has defeated the Hero of Time!");
          $($gameCells).off('click');
        }
        else if (countTotal === 10 && winnerIs(!'X')) {
          alert("Martha Saves the Day!");
        }
        else {
          return null;
        }
      }
      var winnerIs = function (turn) {
        return winsRow (turn) || winsCol (turn) || winsDiag (turn);
      }
      var winsRow = function (turn) {
        return allThree (turn, moves[0], moves[1], moves[2]) || allThree (turn, moves[3], moves[4], moves[5]) || allThree (turn, moves[6], moves[7], moves[8]);
      }
      var winsCol = function (turn) {
        return allThree (turn, moves[0], moves[3], moves[6]) || allThree (turn, moves[1], moves[4], moves[7]) || allThree (turn, moves[2], moves[5], moves[8]);
      }
      var winsDiag = function (turn) {
        return allThree (turn, moves[0], moves[4], moves[8]) || allThree (turn, moves[2], moves[4], moves[6]);
      }
      var allThree = function (turn, cell1, cell2, cell3) {
        return (cell1 === turn) && (cell2 === turn) && (cell3 === turn);
      }
      champ = getWinner();

    });

});
