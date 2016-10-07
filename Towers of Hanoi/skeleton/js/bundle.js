/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const HanoiGame = __webpack_require__(1);
	const HanoiView = __webpack_require__(2);
	console.log('Hi');
	$( () => {
	  const rootEl = $('.hanoi');
	  const game = new HanoiGame();
	  new HanoiView(game, rootEl);
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	function Game () {
	  this.towers = [[3, 2, 1], [], []];
	};
	
	Game.prototype.isValidMove = function(startTowerIdx, endTowerIdx) {
	    const startTower = this.towers[startTowerIdx];
	    const endTower = this.towers[endTowerIdx];
	
	    if (startTower.length === 0) {
	      return false;
	    } else if (endTower.length == 0) {
	      return true;
	    } else {
	      const topStartDisc = startTower[startTower.length - 1];
	      const topEndDisc = endTower[endTower.length - 1];
	      return topStartDisc < topEndDisc;
	    }
	};
	
	Game.prototype.isWon = function(){
	    // move all the discs to the last or second tower
	    return (this.towers[2].length == 3) || (this.towers[1].length == 3);
	};
	
	
	Game.prototype.move = function(startTowerIdx, endTowerIdx) {
	    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
	      this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
	      return true;
	    } else {
	      return false;
	    }
	};
	
	
	Game.prototype.print = function(){
	    console.log(JSON.stringify(this.towers));
	};
	
	
	Game.prototype.promptMove = function(reader, callback) {
	    this.print();
	    reader.question("Enter a starting tower: ", start => {
	      const startTowerIdx = parseInt(start);
	      reader.question("Enter an ending tower: ", end => {
	        const endTowerIdx = parseInt(end);
	        callback(startTowerIdx, endTowerIdx)
	      });
	    });
	};
	
	Game.prototype.run = function(reader, gameCompletionCallback) {
	    this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
	      if (!this.move(startTowerIdx, endTowerIdx)) {
	        console.log("Invalid move!");
	      }
	
	      if (!this.isWon()) {
	        // Continue to play!
	        this.run(reader, gameCompletionCallback);
	      } else {
	        this.print();
	        console.log("You win!");
	        gameCompletionCallback();
	      }
	    });
	};
	
	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports) {

	function HanoiView(game,el) {
	  this.game = game;
	  this.el = el;
	  this.setupTowers();
	  this.clickTower();
	}
	
	HanoiView.prototype.setupTowers = function () {
	  const rootEl = this.el;
	  for(let i=0; i < 3; i++) {
	    $(rootEl).append(`<ul class=${i}>`);
	  };
	
	  $("ul").each( (index, ele) => {
	    $(ele).append("<li><li><li>");
	  });
	
	  let firstTower = $('ul')[0];
	  let disks = $(firstTower).children();
	  disks.each((index,disk) => {
	    let className = `disk${index}`;
	    $(disk).addClass(className);
	  })
	};
	
	HanoiView.prototype.clickTower = function() {
	  let tower_array = [];
	  let that = this;
	  $('ul').on('click', ev => {
	    let $target1 = $(ev.currentTarget);
	    console.log($target1);
	    tower = parseInt($target1.attr('class'));
	    tower_array.push(tower);
	    if (tower_array.length === 2) {
	      console.log(tower_array);
	      that.makeMove(tower_array[0], tower_array[1]);
	      tower_array = [];
	    }
	  });
	}
	
	HanoiView.prototype.makeMove = function (start, end) {
	  let bool = this.game.move(start, end);
	  if (bool) {
	    this.render();
	  } else {
	    alert("Invalid move!");
	  }
	  if (this.game.isWon()) {
	    alert("Congrats!");
	  }
	};
	
	HanoiView.prototype.render = function () {
	  const towers = this.game.towers;
	  let $li;
	  for(let i = 0; i < 3; i++){
	    for(let j = 2; j >= 0; j--){
	      let num = towers[i][j]
	      let $ul = $('ul').eq(i);
	      let li = $ul.children();
	      if (j === 2) {
	        $li = $(li[0]);
	      } else if (j === 1) {
	        $li = $(li[1]);
	      } else {
	        $li = $(li[2]);
	      }
	      if (num === undefined) {
	        $li.removeClass();
	      }else {
	        $li.attr('class', `disk${num-1}`)
	      }
	    }
	  }
	};
	
	module.exports = HanoiView;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map