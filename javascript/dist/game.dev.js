"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var chipDecorationElement = document.getElementById('dec');
var winningSoundElement = document.getElementById('wininngSound');

var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    this.points = 0;
    this.posWinin = [];
    this.textWin = '';
    this.lin;
    this.gameOver = false;
    this.currentPlayer = '';
    this.board = [[0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 16, 17], [18, 19, 20, 21, 22, 23], [24, 25, 26, 27, 28, 29], [30, 31, 32, 33, 34, 35], [36, 37, 38, 39, 40, 41]];
    this.boardBackUp = [[0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 16, 17], [18, 19, 20, 21, 22, 23], [24, 25, 26, 27, 28, 29], [30, 31, 32, 33, 34, 35], [36, 37, 38, 39, 40, 41]];
  }

  _createClass(Game, [{
    key: "nextPlayer",
    value: function nextPlayer() {
      if (this.currentPlayer === 'Player1') {
        this.currentPlayer = 'Player2';
        return 'Player2';
      } else {
        this.currentPlayer = 'Player1';
        return 'Player1';
      }
    }
  }, {
    key: "fillTile",
    value: function fillTile(col) {
      this.nextPlayer();

      for (var i = 0; i < this.board.length; i++) {
        //varre o array pai
        if (this.board[i] === this.board[col]) {
          //entra na coluna
          for (var j = 0; j < this.board[i].length; j++) {
            if (!isNaN(this.board[i][j])) {
              this.lin = this.board[i][j];
              this.board[i][j] = this.currentPlayer;
              return this.board[col][i];
            }
          }
        }
      }

      this.nextPlayer();
    }
  }, {
    key: "printChip",
    value: function printChip() {
      var chip = document.getElementById(this.lin);

      if (this.currentPlayer === 'Player1') {
        chip.classList.add('color-red');
        chipDecorationElement.classList.remove('color-red');
        chipDecorationElement.classList.add('color-yellow');
      } else {
        chip.classList.add('color-yellow');
        chipDecorationElement.classList.remove('color-yellow');
        chipDecorationElement.classList.add('color-red');
      }
    }
  }, {
    key: "checkWinCondition",
    value: function checkWinCondition() {
      var victoryCondition = [// vertical inferior
      [[0, 0], [0, 1], [0, 2], [0, 3]], [[1, 0], [1, 1], [1, 2], [1, 3]], [[2, 0], [2, 1], [2, 2], [2, 3]], [[3, 0], [3, 1], [3, 2], [3, 3]], [[4, 0], [4, 1], [4, 2], [4, 3]], [[5, 0], [5, 1], [5, 2], [5, 3]], [[6, 0], [6, 1], [6, 2], [6, 3]], // vertical meio
      [[0, 1], [0, 2], [0, 3], [0, 4]], [[1, 1], [1, 2], [1, 3], [1, 4]], [[2, 1], [2, 2], [2, 3], [2, 4]], [[3, 1], [3, 2], [3, 3], [3, 4]], [[4, 1], [4, 2], [4, 3], [4, 4]], [[5, 1], [5, 2], [5, 3], [5, 4]], [[6, 1], [6, 2], [6, 3], [6, 4]], //vertical superior 
      [[0, 2], [0, 3], [0, 4], [0, 5]], [[1, 2], [1, 3], [1, 4], [1, 5]], [[2, 2], [2, 3], [2, 4], [2, 5]], [[3, 2], [3, 3], [3, 4], [3, 5]], [[4, 2], [4, 3], [4, 4], [4, 5]], [[5, 2], [5, 3], [5, 4], [5, 5]], [[6, 2], [6, 3], [6, 4], [6, 5]], //horizontal linha 1 
      [[0, 0], [1, 0], [2, 0], [3, 0]], [[1, 0], [2, 0], [3, 0], [4, 0]], [[2, 0], [3, 0], [4, 0], [5, 0]], [[3, 0], [4, 0], [5, 0], [6, 0]], // horizontal linha 2
      [[0, 1], [1, 1], [2, 1], [3, 1]], [[1, 1], [2, 1], [3, 1], [4, 1]], [[2, 1], [3, 1], [4, 1], [5, 1]], [[3, 1], [4, 1], [5, 1], [6, 1]], //horizontal linha 3
      [[0, 2], [1, 2], [2, 2], [3, 2]], [[1, 2], [2, 2], [3, 2], [4, 2]], [[2, 2], [3, 2], [4, 2], [5, 2]], [[3, 2], [4, 2], [5, 2], [6, 2]], //horizontal linha 4
      [[0, 3], [1, 3], [2, 3], [3, 3]], [[1, 3], [2, 3], [3, 3], [4, 3]], [[2, 3], [3, 3], [4, 3], [5, 3]], [[3, 3], [4, 3], [5, 3], [6, 3]], //horizontal linha 5
      [[0, 4], [1, 4], [2, 4], [3, 4]], [[1, 4], [2, 4], [3, 4], [4, 4]], [[2, 4], [3, 4], [4, 4], [5, 4]], [[3, 4], [4, 4], [5, 4], [6, 4]], //horizontal linha 6
      [[0, 5], [1, 5], [2, 5], [3, 5]], [[1, 5], [2, 5], [3, 5], [4, 5]], [[2, 5], [3, 5], [4, 5], [5, 5]], [[3, 5], [4, 5], [5, 5], [6, 5]], //diagonal esquerda 1 
      [[6, 0], [5, 1], [4, 2], [3, 3]], [[6, 1], [5, 2], [4, 3], [3, 4]], [[6, 2], [5, 3], [4, 4], [3, 5]], [[6, 3], [5, 4], [4, 5], [3, 6]], //diagonal esquerda 2
      [[5, 0], [4, 1], [3, 2], [2, 3]], [[5, 1], [4, 2], [3, 3], [2, 4]], [[5, 2], [4, 3], [3, 4], [2, 5]], [[5, 3], [4, 4], [3, 5], [2, 6]], //diagonal esquerda 3
      [[4, 0], [3, 1], [2, 2], [1, 3]], [[4, 1], [3, 2], [2, 3], [1, 4]], [[4, 2], [3, 3], [2, 4], [1, 5]], [[4, 3], [3, 4], [2, 5], [1, 6]], //diagonal esquerda 4
      [[3, 0], [2, 1], [1, 2], [0, 3]], [[3, 1], [2, 2], [1, 3], [0, 4]], [[3, 2], [2, 3], [1, 4], [0, 5]], [[3, 3], [2, 4], [1, 5], [0, 6]], //diagonal direita 1 
      [[0, 0], [1, 1], [2, 2], [3, 3]], [[0, 1], [1, 2], [2, 3], [3, 4]], [[0, 2], [1, 3], [2, 4], [3, 5]], [[0, 3], [1, 4], [2, 5], [3, 6]], //diagonal direita 2 
      [[1, 0], [2, 1], [3, 2], [4, 3]], [[1, 1], [2, 2], [3, 3], [4, 4]], [[1, 2], [2, 3], [3, 4], [4, 5]], [[1, 3], [2, 4], [3, 5], [4, 6]], //diagonal direita 2 
      [[2, 0], [3, 1], [4, 2], [5, 3]], [[2, 1], [3, 2], [4, 3], [5, 4]], [[2, 2], [3, 3], [4, 4], [5, 5]], [[2, 3], [3, 4], [4, 5], [5, 6]], //diagonal direita 2 
      [[3, 0], [4, 1], [5, 2], [6, 3]], [[3, 1], [4, 2], [5, 3], [6, 4]], [[3, 2], [4, 3], [5, 4], [6, 5]], [[3, 3], [4, 4], [5, 5], [6, 6]]];

      for (var i = 0; i < victoryCondition.length; i++) {
        var coord1 = victoryCondition[i][0];
        var coord2 = victoryCondition[i][1];
        var coord3 = victoryCondition[i][2];
        var coord4 = victoryCondition[i][3];

        if (this.board[coord1[0]][coord1[1]] === this.board[coord2[0]][coord2[1]] && this.board[coord2[0]][coord2[1]] === this.board[coord3[0]][coord3[1]] && this.board[coord3[0]][coord3[1]] === this.board[coord4[0]][coord4[1]]) {
          this.textWin = "".concat(this.currentPlayer, " Win.");
          this.posWinin = [this.boardBackUp[coord1[0]][coord1[1]], this.boardBackUp[coord2[0]][coord2[1]], this.boardBackUp[coord3[0]][coord3[1]], this.boardBackUp[coord4[0]][coord4[1]]];
          this.gameOver = true;
        }
      }

      if (this.gameOver) {
        this.points = 10;

        if (this.currentPlayer === 'Player1') {
          chipDecorationElement.classList.remove('color-yellow');
          chipDecorationElement.classList.add('color-red', 'ficha-radius');
        } else {
          chipDecorationElement.classList.remove('color-red');
          chipDecorationElement.classList.add('color-yellow', 'ficha-radius');
        }

        winningSoundElement.play();

        for (var _i = 0; _i < this.board.length; _i++) {
          for (var j = 0; j < this.board[_i].length; j++) {
            if (this.board[_i][j]) {//console.log(this.board[i][j],i,j)
            }
          }
        }
      }
    }
  }]);

  return Game;
}();